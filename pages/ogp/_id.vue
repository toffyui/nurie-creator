<template>
  <div>
    <img class="mx-auto" :src="url" alt />
  </div>
</template>
<script>
export default {
  data() {
    return {
      meta: {
        url: `https://nurie-maker.com/ogp/?id=${this.$route.query.id}`,
        image: `https://nurie.s3-ap-northeast-1.amazonaws.com/ogpimg/${this.$route.query.id}.jpg`,
      },
    }
  },
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
            content: this.meta.url,
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: this.meta.image,
          },
        ],
      }
    },
  },
}
</script>
