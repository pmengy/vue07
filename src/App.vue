<template>
  <div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
  },
};
</script>
