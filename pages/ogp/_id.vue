<template>
  <div class="outer bg-orange-200 h-screen w-screen">
    <div class="inner">
      <svg
        class="animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        height="80"
        width="80"
        viewBox="0 0 75 75"
      >
        <circle
          cx="37.5"
          cy="37.5"
          r="33.5"
          stroke-width="8"
          fill="none"
          stroke="#F5AD54"
          stroke-linecap="square"
          stroke-dasharray="151.55042961px,210.48670779px"
          stroke-dashoffset="0"
        />
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ params }) {
    return {
      uuid: params.id,
      url: `${process.env.BASE_URL}/ogp/${params.id}`,
      image: `${process.env.AWS_IMAGE_URL}/ogpimg/${params.id}.jpg`,
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
<style>
.outer {
  position: relative;
}
.inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
}
</style>
