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
  head() {
    return {
      meta: [
        { property: 'og:title', hid: 'og:title', content: '塗り絵ツクール' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://nurie-maker.com/ogp/?id=${this.$route.query.id}`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://nurie.s3-ap-northeast-1.amazonaws.com/ogpimg/${this.$route.query.id}.jpg`,
        },
      ],
    }
  },
}
</script>
