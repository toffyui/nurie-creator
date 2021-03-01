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
import Meta from '~/assets/mixins/meta'

export default {
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: '塗り絵ツクール',
        description: 'オリジナル塗り絵を作ろう',
        type: 'article',
        url: `https://nurie-maker.com/ogp/?id=${this.$route.query.id}`,
        image: `https://nurie.s3-ap-northeast-1.amazonaws.com/ogpimg/${this.$route.query.id}.jpg`,
        twitterImage: `https://nurie.s3-ap-northeast-1.amazonaws.com/ogpimg/${this.$route.query.id}.jpg`,
      },
    }
  },
  //   mounted() {
  //     window.location.href = '/'
  //   },
}
</script>
