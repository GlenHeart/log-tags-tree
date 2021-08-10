<template>
<div>
  <div v-if="$slots.default">
    <slot></slot>
  </div>
  <div v-else>
    1234
  </div>
</div>
</template>
<script>
export default {
  name: 'TreeNode'
}
</script>
