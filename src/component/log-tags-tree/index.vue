<template>
  <div class="tree-wrap">
    <div class="root-node-wrap">
      <div class="root-node" v-show="visible">
      <div class="branch-line"></div>
        <tag :messageType="successFlag">{{ '业务事件' }}</tag>
        <span class="chain-child-time" v-if="totalApiTime">{{
          `${totalApiTime}ms`
        }}</span>
        <span
          class="chain-expand-btn"
          :class="{ 'chain-expand-error-btn': !successFlag }"
          @click="handleBtnClick('left')"
          v-if="treeNodes.length"
          >{{ treeNodes.length }}</span
        >
      </div>
    </div>
    <DynamicScroller :items="treeNodes" :minItemSize="60" :style="wrapStyle" class="tag-nodes">
      <template v-slot="{ item, index, active }">
        <DynamicScrollerItem :item="item" :active="active" :data-index="index">
          <child-chain
            :parentTies="parentTies"
            :key="index"
            :child="item"
            :sole="treeNodes.length === 1"
            :listLength="treeNodes.length"
            :chainIndex="index"
          >
            <template slot-scope="{ tag }">
              <slot :tag="tag"></slot>
            </template>
          </child-chain>
        </DynamicScrollerItem>
      </template>
    </DynamicScroller>
  </div>
</template>
<script>
import ChildChain from './childChain.vue'
import tag from '../tag.vue'

export default {
  name: 'LogTagsTree',
  data () {
    return {
      visible: true,
      successFlag: false
    }
  },
  props: {
    treeNodes: {
      require: true,
      type: Array,
      default: () => []
    },
    parentTies: String,
    wrapStyle: {
      type: Object,
      default () {
        return {
          height: '100%'
        }
      }
    }
  },
  computed: {
    totalApiTime () {
      const treeNodes = this.treeNodes
      if (!treeNodes || treeNodes.length === 0) return ''
      return this.treeNodes.reduce((acc, cut) => {
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
    handleBtnClick () {
      this.visible = !this.visible
    }
  },
  components: {
    ChildChain,
    tag
  }
}
</script>
