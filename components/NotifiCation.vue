<template>
  <div class="alert alert-danger" >
    {{ message }}
  </div>
</template>
<script>
  export default {
    name: 'NotifiCation',
    props: ['message']
  }
</script>
