<template>
  <div
    class="pd_20"
    style="height: 100%; background: #fff"
    v-loading="loading"
    ref="swimingLane"
  >
    <div
      style="height: calc(100% - 90px); overflowx: auto; background: #fff"
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
          style="
            overflow: scroll;
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
            v-infinite-scroll="load"
            infinite-scroll-disabled="testLoading"
            infinite-scroll-immediate="false"
          >
            <tag :messageType="successFlag">{{
              '业务事件'
            }}</tag>
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
              <child-chain
                :parentTies="'BAS'"
                v-for="(item, index) in invocationList"
                :key="index"
                :child="item"
                :sole="invocationList.length === 1"
                :listLength="invocationList.length"
                :chainIndex="index"
              ></child-chain>
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
      tableHead: [{
        name: '事件',
        ties: ['TOTAL']
      }, {
        name: '前台(BAS,MAS)',
        ties: ['BAS', 'MAS']
      }, {
        name: '聚合中台(AMTS)',
        ties: ['AMTS']
      }, {
        name: '业务中台(BMTS)',
        ties: ['BMTS']
      }, {
        name: '业务主数据中台(MDS)',
        ties: ['MDS']
      }, {
        name: '基础主数据中台(MDS)',
        ties: ['MDS']
      }],
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
        return acc + parseInt(cut.invokedConsumeTime.slice(0, cut.invokedConsumeTime.length - 2))
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
      this.successFlag = this.invocationList.every(item => item.successFlag)
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
<style lang="scss">
@use 'sass:math';
html,
body {
  height: 100%;
}
.detail-red {
  color: red;
  &:hover {
    color: red;
  }
}

.origin-column {
  height: 100%;
  &-item {
    display: inline-block;
    background: #fff;
    height: 100%;
    min-width: 350px;
    box-shadow: inset -1px 0 0 0 #c2c9df, inset 1px 1px 0 0 #c2c9df;
    box-shadow: inset -1px -1px 0 0 #c2c9df, inset 1px 1px 0 0 #c2c9df;
    &--header {
      height: 40px;
      color: #000;
      line-height: 40px;
      text-align: center;
      background: #e9f0fa;
      box-shadow: inset -1px 0 0 0 #c2c9df, inset 1px 1px 0 0 #c2c9df;
      &:hover {
        .fold-btns {
          display: inline-block;
        }
      }
    }
    .fold-btns {
      display: none;
    }
  }
}
//------- {{ Variables }} -------//

$white: #555;
$bg: #2e6ba7;

$horizontal-gutter: 100px;
$border-radius: 0px;

$entry-min-height: 60px;

$label-width: 260px;
$label-height: 38px;
$label-border-radius: 5px;

//------- {{ Styles }} -------//

*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
#wrapper {
  position: relative;
}

.branch {
  position: relative;
  margin-left: $horizontal-gutter + $label-width;
  .branch-line {
    content: '';
    width: math.div($horizontal-gutter, 2);
    border-top: 1px solid $white;
    position: absolute;
    left: -$horizontal-gutter;
    top: 50%;
    margin-top: 1px;
  }
}

.entry {
  position: relative;
  min-height: $entry-min-height;
  & > .before-line {
    height: 100%;
    border-left: 1px solid $white;
    position: absolute;
    left: -(math.div($horizontal-gutter, 2));
  }
  & > .after-line {
    width: math.div($horizontal-gutter, 2);
    border-top: 1px solid $white;
    position: absolute;
    left: -(math.div($horizontal-gutter, 2));
    top: 50%;
  }
  &.first-entry {
    & > .before-line {
      width: $border-radius;
      height: 50%;
      top: 50%;
      border-radius: $border-radius 0 0 0;
    }
    & > .after-line {
      height: $border-radius;
      border-radius: $border-radius 0 0 0;
    }
  }
  &.last-entry {
    & > .before-line {
      width: $border-radius;
      height: 50%;
      border-radius: 0 0 0 $border-radius;
    }
    & > .after-line {
      height: $border-radius;
      border-top: none;
      border-bottom: 1px solid $white;
      border-radius: 0 0 0 $border-radius;
    }
  }
  &.sole {
    & > .before-line {
      display: none;
    }
    & > .after-line {
      width: math.div($horizontal-gutter, 2);
      height: 0;
      border-radius: 0;
      margin-top: 1px;
    }
  }
}

.label {
  display: block;
  min-width: $label-width;
  line-height: $label-height - 5px * 2;
  text-align: center;
  border-radius: $label-border-radius;
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: math.div(-$label-height, 2);
}
</style>
