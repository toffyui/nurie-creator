<template>
  <div>
    <img class="mx-auto" :src="url" alt />
  </div>
</template>
<script>
export default {
  computed: {
    url() {
      return `https://nurie.s3-ap-northeast-1.amazonaws.com/ogpimg/${this.$route.query.id}.jpg`
    },
    head() {
      return {
        meta: [
          {
            hid: 'og:url',
            property: 'og:url',
            content: 'https://nurie-maker.com/',
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: `https://nurie.s3-ap-northeast-1.amazonaws.com/ogpimg/${this.$route.query.id}.jpg`,
          },
        ],
      }
    },
  },
}
</script>
