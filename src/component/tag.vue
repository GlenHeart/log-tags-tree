<template>
  <span class="label">
    <div class="message">
      <i class="message__icon" :class="typeClass"></i>
      <p class="el-message__content mul-ellipsis"><slot></slot></p>
    </div>
  </span>
</template>
<script>
export default {
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
    }
  },
  computed: {
    typeClass () {
      return this.messageType ? 'icon-success' : 'icon-error'
    }
  }
}
</script>
<style lang="scss" scoped>
.message {
  width: 260px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  transition: opacity .3s,transform .4s,top .4s,height .3s,width .3s;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding-right: 8px;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
  p {
    margin: 0;
  }
  .message__icon {
    width: 38px;
    height: 38px;
    flex-shrink: 0;
    margin-right: 10px;
  }
  .icon-error {
    color: #ec0000;
    background: url('~@/assets/icon_danger.svg');
  }
  .icon-success {
    background: url('~@/assets/icon_success.svg');
  }
  .el-message__content {
    line-height: 18px;
    text-align: left;
  }
  .mul-ellipsis {
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
