<template>
  <div
    style="height: 100%; background: #fff"
    ref="swimingLane"
  >
    <div style="position: relative; height: 100%">
      <div style="display: flex" class="origin-column">
        <div
          v-for="(head, index) in tableHead"
          class="origin-column-item"
          :key="index"
        >
          <div class="origin-column-item--header">
            {{ head.name }}
            <div v-if="head.ties.length > 0" class="fold-btns">
              <el-button type="text" @click="expand(head.ties)"
                >展开</el-button
              >
              <el-button type="text" @click="fold(head.ties)">折叠</el-button>
            </div>
          </div>
        </div>
      </div>
      <div
        ref="wrapper"
        style="width: 100%; height: 100%;position: absolute;top: 0;left: 0;padding-top: 50px;"
      >
        <div id="wrapper" style="height: 100%">
          <log-tags-tree :parentTies="'BAS'" :treeNodes="invocationList">
            <template slot-scope="{ tag }">
              <popover-tag :messageType="tag.successFlag" :ids="tag.id">
                <p style="font-size: 13px">
                  {{ tag.ties }}
                  {{
                    `${tag.apiNo ? tag.apiNo : ''}(${tag.invokedConsumeTime})`
                  }}
                </p>
                <p style="font-size: 13px" :title="tag.apiDesc">
                  {{ ` ${tag.apiDesc}` }}
                </p>
              </popover-tag>
            </template>
          </log-tags-tree>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import emitter from './utils/emitter'

import mockData from './mock.js'

import PopoverTag from './component/popoverTag'
import LogTagsTree from './component/log-tags-tree/index.vue'

export default {
  name: 'callChain',
  data () {
    return {
      invocationList: [],
      successFlag: true,
      testLoading: true,
      totalTime: '',
      visible: true,
      fullscreenStatus: false,
      tableHead: [
        {
          name: '事件',
          ties: ['TOTAL']
        },
        {
          name: '前台(BAS,MAS)',
          ties: ['BAS', 'MAS']
        },
        {
          name: '聚合中台(AMTS)',
          ties: ['AMTS']
        },
        {
          name: '业务中台(BMTS)',
          ties: ['BMTS']
        },
        {
          name: '业务主数据中台(MDS)',
          ties: ['MDS']
        },
        {
          name: '基础主数据中台(MDS)',
          ties: ['MDS']
        }
      ],
      foldStatus: false, // 滚动条在底部，点击折叠会触发加载
      scrollTop: 0,
      scrollTopBeforeFold: 0
    }
  },
  mixins: [emitter],
  provide () {
    return {
      app: this
    }
  },
  components: {
    LogTagsTree,
    PopoverTag
  },
  mounted () {
    this.getInvocationList()
    this.recordWrapperScrollTop()
  },
  methods: {
    getScrollPos () {
      return this.$refs.wrapper.scrollTop
    },
    expand (ties) {
      if (ties[0] === 'TOTAL') {
        this.visible = true
        this.foldStatus = true
      }
      if (ties[0] !== 'TOTAL') {
        this.broadcast('ChildChain', 'expand', [ties])
      }
      setTimeout(() => {
        this.$refs.wrapper.scrollTop = this.scrollTopBeforeFold
      }, 200)
    },
    fold (ties) {
      if (ties[0] === 'TOTAL') {
        this.visible = false
        this.foldStatus = true
      }
      if (ties[0] !== 'TOTAL') {
        this.broadcast('ChildChain', 'fold', [ties])
      }
      this.scrollTopBeforeFold = this.getScrollPos()
    },
    async getInvocationList () {
      this.invocationList = mockData.data || []
      this.successFlag = this.invocationList.every((item) => item.successFlag)
    },
    handleBtnClick () {
      this.visible = !this.visible
    },
    recordWrapperScrollTop () {
      this.$refs.wrapper.addEventListener('scroll', () => {
        this.scrollTop = this.$refs.wrapper.scrollTop
      })
    }
  }
}
</script>
