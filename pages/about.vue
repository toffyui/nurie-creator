<template>
  <div>
    <PageHeader />
    <div class="bg-orange-200">
      <SectionTitle :text="$t('このサイトについて')" />
      <article
        class="
          container
          mx-auto
          px-5
          md:px-20
          pb-12
          pt-4
          text-gray-800
          leading-relaxed
          max-w-4xl
        "
      >
        <p class="mb-8 text-lg">{{ $t('サイトについて本文1') }}</p>

        <h2 class="text-2xl md:text-3xl font-bold mt-8 mb-4">
          {{ $t('サイトの特徴') }}
        </h2>
        <div class="flex flex-wrap -mx-3">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="w-full md:w-1/3 p-3 flex flex-col"
          >
            <div
              class="
                h-full
                bg-white
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
              <div class="p-6">
                <h3 class="text-lg font-bold mb-2 text-orange-700">
                  {{ $t(feature.title) }}
                </h3>
                <p class="text-sm">{{ $t(feature.body) }}</p>
              </div>
            </div>
          </div>
        </div>

        <h2 class="text-2xl md:text-3xl font-bold mt-10 mb-4">
          {{ $t('活用シーン') }}
        </h2>
        <p class="mb-6">{{ $t('活用シーン本文') }}</p>

        <h2 class="text-2xl md:text-3xl font-bold mt-10 mb-4">
          {{ $t('運営者情報') }}
        </h2>
        <p class="mb-6">{{ $t('運営者情報本文') }}</p>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        { title: '特徴1タイトル', body: '特徴1本文' },
        { title: '特徴2タイトル', body: '特徴2本文' },
        { title: '特徴3タイトル', body: '特徴3本文' },
      ],
    }
  },
  head() {
    return {
      title: `${this.$t('このサイトについて')} | ${this.$t('塗り絵ツクール')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('サイトについて本文1'),
        },
      ],
    }
  },
}
</script>
