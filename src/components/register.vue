<template>
  <div>asdfasgggg</div>
</template>

<script>
export default {
  name: 'register',
  methods: {
    hidenLoginModal () {
      this.$store.commit('hidenLoginModal')
    }
  },
  mounted: function () {
    this.hidenLoginModal()
  }
}
</script>

<style>

</style>
