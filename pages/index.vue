<template>
  <div
    class="leading-normal tracking-normal text-white gradient"
    style="font-family: 'Source Sans Pro', sans-serif"
  >
    <div>
      <div
        class="
          container
          px-3
          mx-auto
          flex flex-wrap flex-col
          md:flex-row
          items-center
          lg:pt-0
          pt-5
        "
      >
        <!--Left Col-->
        <div
          class="
            flex flex-col
            w-full
            md:w-2/5
            justify-center
            items-start
            text-center
            md:text-left
          "
        >
          <p class="tracking-loose w-full md:block hidden">
            {{ $t('オリジナル塗り絵作りませんか？') }}
          </p>
          <h2 class="my-4 md:text-5xl text-2xl font-bold leading-tight">
            {{ $t('塗り絵ツクール') }}
          </h2>
          <p class="leading-normal md:text-2xl text-base mb-8">
            {{ $t('画像をボタン一つで塗り絵にできます。') }}
          </p>
          <a
            class="
              md:mx-auto
              lg:mx-0
              hover:underline
              bg-white
              text-gray-800
              font-bold
              rounded-full
              md:my-3
              py-4
              px-8
              shadow-lg
              focus:outline-none focus:shadow-outline
              transform
              transition
              hover:scale-105
              duration-300
              ease-in-out
            "
            href="#make"
          >
            {{ $t('今すぐ作る') }}
          </a>
        </div>
        <!--Right Col-->
        <div class="w-full md:w-3/5 md:py-3 md:p-0 pb-3">
          <img
            class="w-full mx-auto w-4/5 z-50"
            src="../assets/img/titlePic.png"
          />
        </div>
      </div>
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
            fill="#FFFFFF"
            fill-rule="nonzero"
          >
            <path
              d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
            ></path>
          </g>
        </g>
      </svg>
    </div>
    <section id="make" class="bg-white border-b md:py-8 py-4">
      <div class="container max-w-5xl mx-auto m-8">
        <h1
          class="
            w-full
            my-2
            md:text-5xl
            text-2xl
            font-bold
            leading-tight
            text-center text-gray-800
          "
        >
          {{ $t('塗り絵を作る') }}
        </h1>
        <div class="w-full mb-4">
          <div
            class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded"
          ></div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full sm:w-1/2 p-6 mx-auto">
            <h3
              class="
                md:text-3xl
                text-lg text-gray-800
                font-bold
                leading-none
                mb-3
              "
            >
              {{ $t('ライブラリから画像を選択') }}
            </h3>
            <p class="text-gray-600 mb-3 text-base">
              {{ $t('できる限り輪郭がはっきりしている画像を選んでください。') }}
            </p>
            <label
              class="
                cursor-pointer
                inline-flex
                items-center
                bg-orange-400
                hover:bg-orange-300
                text-white
                font-bold
                py-2
                px-4
                rounded-full
              "
            >
              <img
                alt="upload"
                src="../assets/img/upload.svg"
                class="w-8 h-8"
              />
              <span class="ml-2 text-base leading-normal">{{
                $t('画像を選択')
              }}</span>
              <input
                id="file"
                ref="fileInput"
                type="file"
                accept=".jpg,.jpeg,.png"
                class="hidden"
                @change="setImage"
              />
            </label>
            <h3
              class="
                md:text-3xl
                text-lg text-gray-800
                font-bold
                leading-none
                mt-6
                mb-3
              "
            >
              {{ $t('塗り絵に変換') }}
            </h3>
            <p
              class="mt-3 text-gray-600 text-base mb-3"
              v-if="!uploadImageUrl && !nurieImageUrl"
            >
              {{ $t('先に画像を選択してください') }}
            </p>
            <p class="mt-3 text-gray-600 text-base mb-3" v-if="nurieImageUrl">
              {{ $t('塗り絵が作成されました！') }}
            </p>
            <div class="mt-3" v-if="uploadImageUrl">
              <p class="mt-3 text-gray-600 text-base mb-3">
                {{
                  $t(
                    '塗り絵に変換して公開するを選ぶと、できた塗り絵が自動で公開されます。'
                  )
                }}
              </p>
              <label
                class="
                  cursor-pointer
                  inline-flex
                  items-center
                  bg-white
                  boder-solid
                  border-2 border-orange-600
                  hover:border-orange-500
                  text-white
                  font-bold
                  py-2
                  px-4
                  rounded-full
                "
              >
                <img
                  alt="paint"
                  src="../assets/img/paint.svg"
                  class="w-8 h-8"
                />
                <div
                  class="text-orange-600 ml-2 text-base leading-normal"
                  @click="getNurie"
                >
                  {{ $t('塗り絵にする') }}
                </div>
              </label>
              <label
                class="
                  cursor-pointer
                  lg:m-0
                  mt-3
                  inline-flex
                  items-center
                  boder-solid
                  border-2 border-orange-600
                  bg-orange-600
                  hover:bg-orange-500 hover:border-orange-500
                  text-white
                  font-bold
                  py-2
                  px-4
                  rounded-full
                "
              >
                <img
                  alt="global"
                  src="../assets/img/global.svg"
                  class="w-8 h-8"
                />
                <div
                  class="ml-2 text-base leading-normal"
                  @click="getNuriePublic"
                >
                  {{ $t('塗り絵に変換して公開する') }}
                </div>
              </label>
            </div>

            <h3
              class="
                md:text-3xl
                text-lg text-gray-800
                font-bold
                leading-none
                mt-6
                mb-3
              "
            >
              {{ $t('画像をシェア/保存') }}
            </h3>
            <p v-if="!nurieImageUrl" class="text-gray-600 md:mb-8 text-base">
              {{ $t('先に塗り絵を作成してください') }}
            </p>
            <p class="mt-3 text-gray-600 text-base mb-3" v-if="nurieImageUrl">
              {{ $t('シェアや保存などしてお楽しみください。') }}
            </p>
            <ul v-show="nurieImageUrl" class="flex space-x-6 mt-3">
              <div @click="OpenTwitterModal" class="cursor-pointer">
                <img
                  alt="twitter"
                  src="../assets/img/twitter.svg"
                  :width="size"
                  :height="size"
                />
              </div>
              <div @click="OpenFBModal" class="cursor-pointer">
                <img
                  alt="facebook"
                  src="../assets/img/facebook.svg"
                  :width="size"
                  :height="size"
                />
              </div>
              <a :href="nurieImageUrl" download>
                <img
                  alt="line"
                  src="../assets/img/download.svg"
                  :width="size"
                  :height="size"
                />
              </a>
            </ul>
            <h3
              class="
                md:text-3xl
                text-lg text-gray-800
                font-bold
                leading-none
                mt-6
                mb-3
              "
            >
              {{ $t('塗り絵で遊ぶ') }}
            </h3>
            <p v-if="!nurieImageUrl" class="text-gray-600 md:mb-8 text-base">
              {{ $t('先に塗り絵を作成してください') }}
            </p>
            <label
              v-else
              class="
                cursor-pointer
                inline-flex
                items-center
                bg-white
                boder-solid
                border-2 border-orange-600
                hover:border-orange-500
                text-white
                font-bold
                py-2
                px-4
                rounded-full
              "
            >
              <img
                alt="twitter"
                src="../assets/img/paint.svg"
                class="w-8 h-8"
              />
              <div
                class="text-orange-600 ml-2 text-base leading-normal"
                @click="goNuriePage"
              >
                {{ $t('塗り絵で遊ぶ') }}
              </div>
            </label>
          </div>
          <div class="w-full mt-3 sm:w-1/2 relative">
            <div class="relative">
              <img
                v-if="!uploadImageUrl && !nurieImageUrl"
                src="../assets/img/defaultPic.png"
                alt="default"
                class="border-dashed border-4 border-gray-600"
                width="100%"
              />
              <img
                v-if="uploadImageUrl"
                class="border-dashed border-4 border-gray-600"
                width="100%"
                :class="{ 'opacity-50': overlay }"
                :src="uploadImageUrl"
              />
              <img
                v-if="nurieImageUrl"
                class="border-dashed border-4 border-gray-600"
                width="100%"
                :src="nurieImageUrl"
              />
              <Loading class="absolute overlay" v-if="overlay" />
            </div>
          </div>
        </div>
        <Modal v-if="twitterModalFlag">
          <div>
            <img
              v-if="nurieImageUrl"
              class="
                border-dashed border-4
                mt-3
                border-gray-600
                mx-auto
                modalImageClass
                block
                w-full
                h-auto
                object-cover
              "
              :src="nurieImageUrl"
            />
            <div
              @click="CloseModal"
              class="absolute cursor-pointer top-0 right-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-8 h-8"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <button
              @click="tweetButton"
              class="
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
              {{ $t('ツイートする') }}
            </button>
          </div>
        </Modal>
        <Modal v-if="FBModalFlag">
          <div>
            <img
              v-if="nurieImageUrl"
              class="
                border-dashed border-4
                mt-3
                border-gray-600
                mx-auto
                modalImageClass
                block
                w-full
                h-auto
                object-cover
              "
              :src="nurieImageUrl"
            />
            <div
              @click="CloseModal"
              class="absolute cursor-pointer top-0 right-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-8 h-8"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <button
              @click="tweetButton"
              class="
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
              {{ $t('シェアする') }}
            </button>
          </div>
        </Modal>
      </div>
    </section>
    <section class="bg-orange-200 py-8">
      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <h1
          class="
            w-full
            my-2
            md:text-5xl
            text-2xl
            font-bold
            leading-tight
            text-center text-gray-800
          "
        >
          {{ $t('最近投稿された塗り絵') }}
        </h1>
        <div
          class="
            w-full
            font-bold
            md:text-2xl
            text-xl
            mb-2
            text-center text-gray-800
          "
        >
          {{ $t('画像クリックで塗り絵で遊べます') }}
        </div>
        <div class="w-full mb-4">
          <div
            class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-b"
          ></div>
        </div>
        <div
          v-for="nurie in nuries"
          :key="nurie.id"
          class="w-full md:w-1/3 p-3 flex flex-col"
        >
          <div
            @click="goPaintPage(nurie[0])"
            class="
              cursor-pointer
              overflow-hidden
              rounded-lg
              shadow-lg
              transform
              transition
              hover:scale-105
              duration-300
              ease-in-out
            "
          >
            <img
              :src="nurie[0]"
              class="imageClass block w-full h-auto object-cover"
              alt="nurie"
            />

            <div class="flex items-center">
              <div
                class="
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
                {{ nurie[1] }}{{ $t('に投稿') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Change the colour #f8fafc to match the previous section colour -->
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
        <a href="https://x.com/toffy_dev" class="underline"
          ><strong>Toffy</strong></a
        >
        All Rights Reserved.
      </div>
      <div class="my-4 text-base leading-tight">
        {{ new Date().getFullYear() }} —
        <strong>© {{ $t('塗り絵ツクール') }}</strong>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import resizeImage from '~/assets/lib/resizeImage'
import getNurieImage from '~/assets/lib/getNurie'
import getAllNurie from '~/assets/lib/getAllNurie'
import postImageData from '~/assets/lib/postImageData'
import Modal from '~/components/Share.vue'
import Loading from '~/components/Loading.vue'
export default Vue.extend({
  asyncData({ app }) {
    const locale = app.$cookies.get('locale')
    return {
      defaultLang: locale,
    }
  },
  components: {
    Modal,
    Loading,
  },
  data() {
    return {
      nurieImageUrl: '',
      uploadImageUrl: '',
      overlay: false,
      file: '',
      nuries: [],
      uuid: '',
      path: '',
      twitterModalFlag: false,
      FBModalFlag: false,
      nurieData: '',
      isFetched: false,
      base64: '',
    }
  },
  computed: {
    size() {
      return 36
    },
    url() {
      return `${process.env.BASE_URL}/nurie/${this.uuid}`
    },
    twitterURL() {
      const shareText = this.$t('塗り絵ツクールで塗り絵を作ったよ')
      const hash = this.$t('#塗り絵ツクール')
      return (
        `https://twitter.com/intent/tweet?url=${this.url}&text=` +
        encodeURIComponent(shareText + `\r\n` + hash)
      )
    },
    facebookURL() {
      const shareText = this.$t('塗り絵ツクールで塗り絵を作ったよ')
      const hash = this.$t('#塗り絵ツクール')
      return `https://www.facebook.com/sharer/sharer.php?u=${this.url}&t=${shareText}\n${hash}`
    },
    paintUrl() {
      return function (url) {
        return new URL(url).pathname.split('/')[2].replace('.jpg', '')
      }
    },
  },

  async mounted() {
    try {
      const data = await getAllNurie('notr18')
      this.nuries = data
    } catch (error) {
      console.error(error)
    }
    if (this.defaultLang) {
      return
    }
    const userLanguage = navigator.language
    const setLang = userLanguage === 'ja' ? 'ja' : 'en'
    this.$cookies.set('locale', setLang)
    this.$i18n.locale = setLang
  },
  methods: {
    tweetButton() {
      if (this.isFetched) {
        window.open(this.twitterURL, '_blank')
      }
    },
    FBButton() {
      if (this.isFetched) {
        window.open(this.facebookURL, '_blank')
      }
    },
    async OpenTwitterModal() {
      this.twitterModalFlag = true
      this.uuid = this.generateUuid()
      await postImageData(this.uuid, this.nurieData).then(() => {
        this.isFetched = true
        window.history.pushState(null, null, `/nurie/${this.uuid}`)
      })
    },
    async OpenFBModal() {
      this.FBModalFlag = true
      this.uuid = this.generateUuid()
      await postImageData(this.uuid, this.nurieData).then(() => {
        this.isFetched = true
        window.history.pushState(null, null, `/nurie/${this.uuid}`)
      })
    },
    async goNuriePage() {
      this.overlay = true
      this.uuid = this.generateUuid()
      await postImageData(this.uuid, this.nurieData).then(() => {
        this.overlay = false
        this.$router.push(`/nurie/${this.uuid}`)
      })
    },
    goPaintPage(paint) {
      window.open(`/paint/${this.paintUrl(paint)}`, '_blank')
    },
    CloseModal() {
      this.twitterModalFlag = false
      this.FBModalFlag = false
      this.isFetched = false
      window.history.pushState(null, null, '/')
    },

    checkImageSize(file) {
      return new Promise((resolve) => {
        const reader = new FileReader()
        if (file.size > 40 * 1000 * 1000) {
          alert(this.$t('画像サイズが大き過ぎます。'))
          return
        }
        reader.onload = (e) => {
          this.uploadImageUrl = reader.result
          const image = new Image()
          image.src = e.target.result
          image.onload = () => {
            resolve(image)
          }
        }
        reader.readAsDataURL(file)
      })
    },
    async setImage(e) {
      const [file] = e.target.files
      this.nurieImageUrl = ''
      const image = await this.checkImageSize(file)
      if (image) {
        this.base64 = await resizeImage(image, 800, 800)
      }
    },
    isPublicChange() {
      this.isPublic = !this.isPublic
      if (this.nurieImageUrl) {
        this.nurieImageUrl = ''
      }
    },
    getNurie() {
      this.getResult(this.base64, 'False')
    },
    getNuriePublic() {
      this.getResult(this.base64, 'True')
    },
    generateUuid() {
      let chars = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.split('')
      for (let i = 0, len = chars.length; i < len; i++) {
        switch (chars[i]) {
          case 'x':
            chars[i] = Math.floor(Math.random() * 16).toString(16)
            break
          case 'y':
            chars[i] = (Math.floor(Math.random() * 4) + 8).toString(16)
            break
        }
      }
      return chars.join('')
    },
    async getResult(file, isPublic) {
      this.overlay = true
      try {
        this.nurieData = await getNurieImage(file, isPublic)
        this.nurieImageUrl = 'data:image/png;base64,' + this.nurieData
        this.uploadImageUrl = ''
        this.overlay = false
        this.nuries = await getAllNurie('notr18')
      } catch (error) {
        console.error(error)
        this.overlay = false
      }
    },
  },
})
</script>
<style>
.gradient {
  background: linear-gradient(90deg, #ff5757 0%, #fedd58 100%);
}
.overlay {
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
  margin: auto;
}
.imageClass {
  height: 350px;
}
.modalImageClass {
  max-height: 350px;
}
</style>
