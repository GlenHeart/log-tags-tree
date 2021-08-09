<template>
  <div class="log-tags--wrapper">
    <div style="display: flex" class="log-tags-swim-pane">
      <div
        v-for="(head, index) in swimPane"
        class="log-tags-swim-pane-item"
        :key="index"
      >
        <div class="log-tags-swim-pane-item--header">
          {{ head.name }}
          <div v-if="head.ties.length > 0" class="fold-btns">
            <el-button type="text" @click="expand(head.ties)">展开</el-button>
            <el-button type="text" @click="fold(head.ties)">折叠</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogTagsTree',
  props: {
    swimPane: [Array]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.log-tags {
  &--wrapper {
    position: relative;
    height: 100%;
  }
  &-swim-pane {
    height: 100%;
    &-item {
      display: inline-block;
      background: #fff;
      height: 100%;
      min-width: 350px;
      box-shadow: inset -1px 0 0 0 #c2c9df, inset 0px 1px 0 0 #c2c9df;
      box-shadow: inset 0px -1px 0 0 #c2c9df, inset 1px 0px 0 0 #c2c9df;
      &:last-child {
        box-shadow: inset -1px -1px 0 0 #c2c9df, inset 1px 0px 0 0 #c2c9df;
        .log-tags-swim-pane-item--header {
          box-shadow: inset 1px 1px 0 0 #c2c9df, inset -1px 0 0 0 #c2c9df;
        }
      }
      &--header {
        height: 40px;
        color: #000;
        line-height: 40px;
        text-align: center;
        background: #e9f0fa;
        box-shadow: inset 1px 0 0 0 #c2c9df, inset 0px 1px 0 0 #c2c9df;
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
}
</style>
