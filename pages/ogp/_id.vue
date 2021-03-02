<template>
  <div>
    <img class="mx-auto" :src="image" alt />
  </div>
</template>
<script>
export default {
  async asyncData({ params }) {
    return {
      url: `https://nurie-maker.com/ogp/${params.id}`,
      image: `https://nurie.s3-ap-northeast-1.amazonaws.com/ogpimg/${params.id}.jpg`,
      twitterImage: `https://nurie.s3-ap-northeast-1.amazonaws.com/ogpimg/${params.id}.jpg`,
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
  created() {
    this.$router.push('/')
  },
}
</script>
