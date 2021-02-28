<template>
  <div>
    <img :src="NurieImage" alt="" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: '',
    }
  },
  computed: {
    NurieImage() {
      this.url = this.$store.state.storeImage.list.find(
        (a) => a.id === this.$route.query.id
      )
      console.log(this.url)
      this.url = this.url ? this.url.imageUrl : ''

      return this.url
    },
  },
}
</script>
