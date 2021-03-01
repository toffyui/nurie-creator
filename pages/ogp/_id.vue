<template>
  <div>
    <img
      class="mx-auto"
      :src="`https://nurie.s3-ap-northeast-1.amazonaws.com/ogpimg/${this.$route.query.id}.jpg`"
      alt
    />
  </div>
</template>
<script>
export default {
  async asyncData($route) {
    return {
      url: `https://nurie-maker.com/ogp/?id=${$route.query.id}`,
      image: `https://nurie.s3-ap-northeast-1.amazonaws.com/ogpimg/${$route.query.id}.jpg`,
      twitterImage: `https://nurie.s3-ap-northeast-1.amazonaws.com/ogpimg/${$route.query.id}.jpg`,
    }
  },
  head() {
    return {
      title: 'オリジナル塗り絵を作ろう',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'オリジナル塗り絵を作ろう',
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: '塗り絵ツクール',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'オリジナル塗り絵を作ろう',
        },
        { hid: 'og:url', property: 'og:url', content: this.url },
        { hid: 'og:image', property: 'og:image', content: this.image },
        {
          name: 'twitter:image',
          content: this.twitterImage,
        },
      ],
    }
  },

  mounted() {
    window.location.href = '/'
  },
}
</script>
