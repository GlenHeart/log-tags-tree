<template>
  <div id="app"><log-tags-tree :swim-pane="swimPaneList"/></div>
</template>

<script>
import LogTagsTree from './components/log-tags-tree.vue'
import { ref } from '@vue/composition-api'
export default {
  name: 'App',
  setup () {
    const swimPaneList = ref([{
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
    }])
    return {
      swimPaneList
    }
  },
  components: {
    LogTagsTree
  }
}
</script>

<style lang="scss">
#app {
  height: 500px;
}
</style>
