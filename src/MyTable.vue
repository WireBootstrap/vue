<script setup>
defineProps({
  config: {
    type: Object
  }
})
</script>

<template>
    <table wire-component="wire.bsTable" v-wire-config="config" class="table table-hover table-striped"></table>
</template>