<template>
  <div>
    <div
      class="leading-normal cursor-pointer tracking-normal text-white gradient"
      style="font-family: 'Source Sans Pro', sans-serif"
      @click="goTop"
    >
      <div>
        <div class="container mx-auto text-center pt-4 pb-12">
          <h2 class="my-4 md:text-5xl text-2xl font-bold leading-tight">
            {{ $t('塗り絵ツクール') }}
          </h2>
        </div>
        <div class="relative -mt-12 lg:-mt-24">
          <svg
            viewBox="0 0 1428 174"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                transform="translate(-2.000000, 44.000000)"
                fill="#FFFFFF"
                fill-rule="nonzero"
              >
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  id="Path-4"
                  opacity="0.200000003"
                ></path>
              </g>
              <g
                transform="translate(-4.000000, 76.000000)"
                fill="#FFEBC8"
                fill-rule="nonzero"
              >
                <path
                  d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
                ></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
    <div class="bg-orange-200">
      <h1
        class="
          w-full
          md:text-5xl
          text-2xl
          font-bold
          leading-tight
          text-center text-gray-800
        "
      >
        {{ $t('作成された塗り絵') }}
      </h1>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-b"
        ></div>
      </div>
      <div class="flex md:flex-row flex-col justify-center p-3 gap-5">
        <div class="w-full h-auto md:w-1/2 lg:w-1/3">
          <div class="relative">
            <Loading class="absolute overlay" v-if="overlay" />
            <canvas
              ref="canvas"
              height="300"
              @mousedown.prevent="dragStart"
              @touchstart.prevent="dragStart"
              @touchend.prevent="dragEnd"
              @mouseup.prevent="dragEnd"
              @mouseout.prevent="dragEnd"
              @mousemove.prevent="draw"
              @touchmove.prevent="spDraw"
            >
            </canvas>
          </div>
          <div ref="wrapper" class="flex items-center" @click="goTop">
            <div
              class="
                cursor-pointer
                text-center
                mx-auto
                bg-orange-400
                text-white
                font-bold
                rounded-b
                py-4
                w-full
                shadow-lg
              "
            >
              {{ $t('塗り絵ツクールで塗り絵を作る') }}
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/4">
          <client-only>
            <Sketch :value="colors" @input="updateValue"></Sketch>
          </client-only>
          <div class="flex items-center justify-center py-4">
            <div>
              <p>{{ $t('線の太さ') }}</p>
              <div class="circle">
                <div
                  class="lineWidth"
                  :style="{
                    width: lineWidth / 2 + 'px',
                    height: lineWidth / 2 + 'px',
                    backgroundColor: currentColor,
                    borderRadius: '50%',
                  }"
                ></div>
              </div>
            </div>
            <img
              alt="line"
              src="../../assets/img/pencil.svg"
              width="80px"
              height="80px"
            />
          </div>
          <input
            class="w-full input-range"
            @input="updateLineWidth"
            type="range"
            :value="lineWidth"
            step="1"
            max="100"
          />
          <div class="flex gap-4 mt-4">
            <button
              @click="deleteNurie"
              class="
                text-center
                mx-auto
                bg-orange-900
                text-white
                font-bold
                rounded
                py-4
                w-1/2
                shadow-lg
              "
            >
              {{ $t('やりなおす') }}
            </button>
            <button
              @click="download"
              class="
                text-center
                mx-auto
                bg-orange-700
                text-white
                font-bold
                rounded
                py-4
                w-1/2
                shadow-lg
              "
            >
              {{ $t('ダウンロード') }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="gradient text-white">
      <svg
        class="wave-top"
        viewBox="0 0 1439 147"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
            <g class="wave" fill="#FFEBC8">
              <path
                d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"
              ></path>
            </g>
            <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
              <g
                transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) "
              >
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  opacity="0.200000003"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <section
        class="
          md:flex md:justify-between
          container
          mx-auto
          py-3
          md:py-6
          px-5
          md:px-20
        "
      >
        <div class="my-4 text-base leading-tight">
          <a href="https://twitter.com/yui_active" class="underline"
            ><strong>Yui</strong></a
          >
          All Rights Reserved.
        </div>
        <div class="my-4 text-base leading-tight">
          {{ new Date().getFullYear() }} —
          <strong>© {{ $t('塗り絵ツクール') }}</strong>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import Loading from '~/components/Loading.vue'
export default {
  async asyncData({ app, params }) {
    const locale = app.$cookies.get('locale')
    return {
      url: `${process.env.BASE_URL}/paint/${params.id}`,
      image: `${process.env.AWS_IMAGE_NURIE_URL}/Moderation/${params.id}.jpg`,
      defaultLang: locale,
    }
  },
  components: {
    Loading,
  },
  head() {
    return {
      title: this.$t('オリジナル塗り絵を作ろう'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('オリジナル塗り絵を作ろう'),
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$t('塗り絵ツクール'),
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.$t('オリジナル塗り絵を作ろう'),
        },
        { hid: 'og:url', property: 'og:url', content: this.url },
        { hid: 'og:image', property: 'og:image', content: this.image },
        {
          name: 'twitter:image',
          content: this.image,
        },
      ],
    }
  },
  data() {
    return {
      isDrag: false,
      lastPosition: {
        x: null,
        y: null,
      },
      currentColor: '#000000',
      lineWidth: 20,
      nurieCanvas: null,
      nurieCtx: null,
      canvas: null,
      ctx: null,
      colors: '#000000',
      noPicture: require('@/assets/img/noPic.png'),
      overlay: true,
    }
  },
  mounted() {
    this.init()
    if (this.defaultLang) {
      return
    }
    const userLanguage = navigator.language
    const setLang = userLanguage === 'ja' ? 'ja' : 'en'
    this.$cookies.set('locale', setLang)
    this.$i18n.locale = setLang
  },
  methods: {
    async init() {
      this.canvas = this.$refs.canvas
      this.ctx = this.canvas.getContext('2d')
      this.nurieCanvas = document.createElement('canvas')
      this.nurieCtx = this.nurieCanvas.getContext('2d')
      const wrapper = this.$refs.wrapper
      await this.loadImage(this.image).then((res) => {
        this.ctx.scale(2, 2)
        const scale = wrapper.clientWidth / res.naturalWidth
        this.canvas.width = this.nurieCanvas.width =
          res.naturalWidth * scale * 2
        this.canvas.height = this.nurieCanvas.height =
          res.naturalHeight * scale * 2
        this.canvas.style.width = this.nurieCanvas.style.width =
          this.canvas.width / 2 + 'px'
        this.canvas.style.height = this.nurieCanvas.style.height =
          this.canvas.height / 2 + 'px'
        this.ctx.drawImage(res, 0, 0, this.canvas.width, this.canvas.height)
      })
      this.overlay = false
    },
    loadImage(src) {
      return new Promise((resolve) => {
        const img = new Image()
        img.src = src
        img.onload = () => resolve(img)
        img.onerror = () => {
          img.src = this.noPicture
        }
      })
    },
    goTop() {
      this.$router.push('/')
    },
    dragStart() {
      this.nurieCtx.beginPath()
      this.isDrag = true
    },
    draw(e) {
      const x = (e.clientX - this.canvas.getBoundingClientRect().left) * 2
      const y = (e.clientY - this.canvas.getBoundingClientRect().top) * 2
      if (!this.isDrag) {
        return
      }
      this.nurieCtx.lineCap = 'round'
      this.nurieCtx.lineJoin = 'round'
      this.nurieCtx.lineWidth = this.lineWidth
      this.nurieCtx.strokeStyle = this.currentColor
      if (this.lastPosition.x === null || this.lastPosition.y === null) {
        this.nurieCtx.moveTo(x, y)
      } else {
        this.nurieCtx.moveTo(this.lastPosition.x, this.lastPosition.y)
      }
      this.nurieCtx.lineTo(x, y)
      this.nurieCtx.stroke()
      this.lastPosition.x = x
      this.lastPosition.y = y
      this.ctx.drawImage(
        this.nurieCanvas,
        0,
        0,
        this.canvas.width,
        this.canvas.height
      )
    },
    spDraw(e) {
      if (e.changedTouches.length == 1) {
        this.draw(e.changedTouches[0])
      }
    },
    dragEnd() {
      this.nurieCtx.closePath()
      this.isDrag = false
      this.lastPosition.x = null
      this.lastPosition.y = null
      this.isErase = false
    },
    download() {
      let link = document.createElement('a')
      link.href = this.canvas.toDataURL('image/jpeg')
      link.download = 'nurie-' + new Date().getTime() + '.jpg'
      link.click()
    },
    updateValue(e) {
      this.currentColor = e.hex
    },
    updateLineWidth(e) {
      this.lineWidth = e.target.value
    },
    deleteNurie() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.init()
    },
  },
}
</script>
<style>
.gradient {
  background: linear-gradient(90deg, #ff5757 0%, #fedd58 100%);
}
.input-range[type='range'] {
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  height: 10px;
  width: 100%;
  border-radius: 6px;
}
.input-range[type='range']:focus,
.input-range[type='range']:active {
  outline: none;
}
.input-range[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  position: relative;
  width: 22px;
  height: 22px;
  display: block;
  background-color: #ff5757;
  border-radius: 50%;
  -webkit-border-radius: 50%;
}
.input-range[type='range']:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 4px rgba(255, 87, 87, 0.6);
  transition: 0.4s;
}
.circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid #000;
  background: #fff;
  position: relative;
}
.lineWidth {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
}
.overlay {
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
  margin: auto;
}
</style>
