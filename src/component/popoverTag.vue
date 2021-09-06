<template>
<div>
  <el-popover
    placement="right-start"
    trigger="click"
    @show="popoverShow"
    :append-to-body="false"
  >
    <div v-loading="loading" style="width:600px;height: 300px;overflow-y: auto;" class="call-chain-popover">
      <p><span class="title">接口描述:</span> <span class="api-detail">{{detail.apiDesc}}</span></p>
      <p><span class="title">接口地址:</span> <span class="api-detail">{{detail.apiPath}}</span></p>
      <p><span class="title">traceId:</span> <span class="api-detail">{{detail.traceId}}</span></p>
      <p><span class="title">入参:</span> <span class="api-detail">{{detail.apiInputParameter}}</span></p>
      <p><span class="title">出参:</span> <span class="api-detail">{{detail.apiOutputParameter}}</span></p>
      <p><span class="title">调用时间:</span> <span class="api-detail">{{detail.invokedAt}}</span></p>
      <p><span class="title">调用耗时:</span> <span class="api-detail">{{detail.invokedConsumeTime}}</span></p>
      <p><span class="title">process:</span> <span class="api-detail">{{detail.process}}</span></p>
    </div>
    <tag slot="reference" :messageType="messageType"><slot></slot></tag>
  </el-popover>
</div>
</template>
<script>
import tag from './tag'

export default {
  name: 'PopoverTag',
  data () {
    return {
      loading: true,
      detail: {}
    }
  },
  inject: ['app'],
  props: {
    messageType: {
      type: Boolean,
      default: true
    },
    ids: {
      type: String
    }
  },
  computed: {
    typeClass () {
      return this.messageType ? 'icon-success' : 'icon-error'
    }
  },
  methods: {
    async popoverShow () {
      // if (!this.ids) {
      //   return
      // }
      // const res = await getInvocationListDetail({
      //   ids: [this.ids],
      //   soid: [this.app.soid]
      // })
      // if (res.success) {
      //   this.detail = res.data[0] || {}
      // }
      // this.loading = false
    }
  },
  components: {
    tag
  }
}
</script>
<style lang="scss">
.call-chain-popover {
  p {
    margin: 0;
    line-height: 28px;
    span.title {
      color: #000;
      font-weight: 600;
    }
    .api-detail {
      margin-left:10px;
    }
  }
}
</style>
