<template>
<div class="entry" :class="{ sole: sole, 'last-entry': chainIndex === listLength - 1, 'first-entry': chainIndex === 0 }" :style="entry">
  <div class="before-line" :style="beforeLine"></div>
  <div class="after-line" :style="afterLine"></div>
  <span
    class="chain-expand-btn"
    :class="{'chain-expand-error-btn': !child.successFlag}"
    @click="handleBtnClick('left')"
    v-if="showNodeBtn"
  >{{child.subInvocationList.length}}</span>
  <span class="chain-child-time" v-if="subTotalApiTime">{{`${subTotalApiTime}ms`}}</span>
  <popover-tag :messageType="child.successFlag" :ids="child.id">
    <p style="font-size:13px;">{{child.ties}} {{`${child.apiNo ? child.apiNo : ''}(${child.invokedConsumeTime})`}}</p>
    <p style="font-size: 13px;" :title="child.apiDesc">{{` ${child.apiDesc}`}}</p>
  </popover-tag>
  <div class="branch" v-if="hasBranch" v-show="visible">
    <div class="branch-line"></div>
    <child-chain
      :child="subChild" v-for="(subChild, c) in child.subInvocationList"
      :key="c"
      :chainIndex="c"
      :sole="child.subInvocationList.length <= 1"
      :listLength="child.subInvocationList.length"
      :parentTies="child.ties"
    >
    </child-chain>
  </div>
</div>
</template>
<script>
import popoverTag from './popoverTag'
import emitter from '@/utils/emitter'
const API_ORIGIN_MAP = {
  BAS: '0',
  MAS: '0',
  AMTS: '1',
  BMTS: '2',
  MDS: '3'
}

const MARGIN_BASE = 350 // 偏移宽度

export default {
  name: 'ChildChain',
  data () {
    return {
      visible: true,
      entry: {},
      beforeLine: {},
      afterLine: {}
    }
  },
  mixins: [emitter],
  props: {
    child: {
      type: Object
    },
    sole: {
      type: Boolean,
      default: false
    },
    listLength: {
      type: Number
    },
    chainIndex: {
      type: Number
    },
    parentTies: {
      type: [String, Number]
    }
  },
  components: {
    popoverTag
  },
  created () {
    this.$on('fold', (val) => {
      this.broadcast('ChildChain', 'fold', [val])
      if (!this.child.ties) return
      if (val.indexOf(this.child.ties) !== -1) {
        this.visible = false
      }
    })
    this.$on('expand', (val) => {
      this.broadcast('ChildChain', 'expand', [val])
      if (!this.child.ties) return
      if (val.indexOf(this.child.ties) !== -1) {
        this.visible = true
      }
    })
    if (this.gapNum) {
      this.entry = { marginLeft: `${(this.gapNum - 1) * MARGIN_BASE}px` }
      this.beforeLine = { left: `-${(this.gapNum - 1) * MARGIN_BASE + 50}px` }
      this.afterLine = { width: `${(this.gapNum - 1) * MARGIN_BASE + 50}px`, left: `-${(this.gapNum - 1) * MARGIN_BASE + 50}px` }
    }
  },
  computed: {
    showNodeBtn () {
      return !!this.child.subInvocationList.length
    },
    gapNum () {
      return API_ORIGIN_MAP[this.child.ties] - API_ORIGIN_MAP[this.parentTies]
    },
    hasBranch () {
      return this.child.subInvocationList && this.child.subInvocationList.length >= 1
    },
    subTotalApiTime () {
      const subInvocationList = this.child.subInvocationList
      if (!subInvocationList || subInvocationList.length === 0) return ''
      return this.child.subInvocationList.reduce((acc, cut) => {
        return acc + parseInt(cut.invokedConsumeTime.slice(0, cut.invokedConsumeTime.length - 2))
      }, 0)
    }
  },
  methods: {
    handleBtnClick () {
      this.visible = !this.visible
    }
  }
}
</script>
<style>
  .chain-expand-btn {
    position: absolute;
    background: #0aa550;
    top:50%;
    font-size: 12px;
    width: 18px;
    height: 18px;
    color: #fff;
    left: 251px;
    z-index: 999;
    border-radius: 50%;
    text-align: center;
    transform: translateY(-50%);
    cursor: pointer;
  }
  .chain-child-time {
    position: absolute;
    top: 50%;
    left: 270px;
    transform: translateY(-100%);
  }
  .chain-expand-error-btn {
    background: #ec0000;
  }
</style>
