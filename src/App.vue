<template>
  <div
    class="pd_20"
    style="height: 100%; background: #fff"
    v-loading="loading"
    ref="swimingLane"
  >
    <div style="height: calc(100% - 90px); overflowx: auto; background: #fff">
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
          style="
            min-height: 200px;
            padding-top: 20px;
            height: calc(100% - 50px);
            position: absolute;
            top: 50px;
            left: 40px;
            width: 2070px;
          "
        >
          <div
            id="wrapper"
            style="height: 100%;"
          >
            <tag :messageType="successFlag">{{ '业务事件' }}</tag>
            <span class="chain-child-time" v-if="totalApiTime">{{
              `${totalApiTime}ms`
            }}</span>
            <span
              class="chain-expand-btn"
              :class="{ 'chain-expand-error-btn': !successFlag }"
              @click="handleBtnClick('left')"
              v-if="invocationList.length"
              >{{ invocationList.length }}</span
            >
            <div class="branch lv1" v-show="visible">
              <div class="branch-line"></div>
              <DynamicScroller
                :items="invocationList"
                :minItemSize="60"
                style="height: 846px;margin-left: -50px;"
              >
                <template v-slot="{ item, index, active }">
                  <DynamicScrollerItem
                    :item="item"
                    :active="active"
                    :data-index="index"
                  >
                    <child-chain
                      :parentTies="'BAS'"
                      :key="index"
                      :child="item"
                      :sole="invocationList.length === 1"
                      :listLength="invocationList.length"
                      :chainIndex="index"
                    ></child-chain>
                  </DynamicScrollerItem>
                </template>
              </DynamicScroller>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="apiDetailVisible" title="API详情">
      <div style="height: 300px; overflow-y: auto" v-loading="detailDialogLoad">
        <p>接口描述: {{ detail.apiDesc }}</p>
        <p>接口地址: {{ detail.apiPath }}</p>
        <p>入参: {{ detail.apiInputParameter }}</p>
        <p>出参: {{ detail.apiOutputParameter }}</p>
        <p>调用时间: {{ detail.invokedAt }}</p>
        <p>调用耗时: {{ detail.invokedConsumeTime }}</p>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import emitter from './utils/emitter'

import childChain from './component/childChain'
import tag from './component/tag.vue'
import mockData from './mock.js'

export default {
  name: 'callChain',
  data () {
    return {
      invocationList: [],
      soid: '',
      searchLoading: false,
      eventList: [],
      bizDomainList: [],
      successFlag: true,
      loading: false,
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
      apiDetailVisible: false,
      detail: {},
      detailDialogLoad: false,
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
    childChain,
    tag
  },
  mounted () {
    this.getInvocationList()
    this.recordWrapperScrollTop()
  },
  computed: {
    totalApiTime () {
      const invocationList = this.invocationList
      if (!invocationList || invocationList.length === 0) return ''
      return this.invocationList.reduce((acc, cut) => {
        return (
          acc +
          parseInt(
            cut.invokedConsumeTime.slice(0, cut.invokedConsumeTime.length - 2)
          )
        )
      }, 0)
    }
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
    load () {
      if (this.foldStatus) {
        this.foldStatus = false
        return
      }
      if (this.loading === true) return
      this.testLoading = true
    },
    async getInvocationList () {
      this.invocationList = mockData.data || []
      console.log(this.invocationList, '1234')
      this.successFlag = this.invocationList.every((item) => item.successFlag)
    },
    async showApiDetail (row) {
      this.apiDetailVisible = true
      this.detail = {}
      this.detailDialogLoad = true
      // try {
      //   if (res.success) {
      //     this.detail = res.data[0] || {}
      //   }
      //   this.detailDialogLoad = false
      // } catch {
      //   this.detailDialogLoad = false
      // }
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
