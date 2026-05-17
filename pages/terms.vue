<template>
  <main class="bg-white">
    <section class="gradient text-white py-10">
      <div class="container mx-auto px-5 md:px-20">
        <h1 class="text-3xl md:text-5xl font-bold leading-tight">
          {{ $t('利用規約') }}
        </h1>
        <p class="mt-3 text-sm opacity-90">
          {{ $t('最終更新日') }}: {{ lastUpdated }}
        </p>
      </div>
    </section>

    <article
      class="container mx-auto px-5 md:px-20 py-10 text-gray-800 leading-relaxed max-w-4xl"
    >
      <p class="mb-6">{{ $t('利用規約本文1') }}</p>

      <h2 class="text-xl md:text-2xl font-bold mt-8 mb-3">
        1. {{ $t('サービス内容') }}
      </h2>
      <p class="mb-4">{{ $t('サービス内容本文') }}</p>

      <h2 class="text-xl md:text-2xl font-bold mt-8 mb-3">
        2. {{ $t('禁止事項') }}
      </h2>
      <p class="mb-4">{{ $t('禁止事項本文') }}</p>

      <h2 class="text-xl md:text-2xl font-bold mt-8 mb-3">
        3. {{ $t('知的財産権') }}
      </h2>
      <p class="mb-4">{{ $t('知的財産権本文') }}</p>

      <h2 class="text-xl md:text-2xl font-bold mt-8 mb-3">
        4. {{ $t('サービスの停止') }}
      </h2>
      <p class="mb-4">{{ $t('サービスの停止本文') }}</p>

      <h2 class="text-xl md:text-2xl font-bold mt-8 mb-3">
        5. {{ $t('免責事項') }}
      </h2>
      <p class="mb-4">{{ $t('免責事項本文') }}</p>

      <h2 class="text-xl md:text-2xl font-bold mt-8 mb-3">
        6. {{ $t('規約の変更') }}
      </h2>
      <p class="mb-4">{{ $t('規約の変更本文') }}</p>

      <h2 class="text-xl md:text-2xl font-bold mt-8 mb-3">
        7. {{ $t('準拠法および管轄') }}
      </h2>
      <p class="mb-4">{{ $t('準拠法本文') }}</p>

      <div class="mt-10">
        <nuxt-link
          to="/"
          class="inline-block bg-orange-400 hover:bg-orange-300 text-white font-bold rounded-full py-2 px-6"
          >← {{ $t('ホーム') }}</nuxt-link
        >
      </div>
    </article>
  </main>
</template>

<script>
const LAST_UPDATED = '2026-05-17'

export default {
  data() {
    return {
      lastUpdated: LAST_UPDATED,
    }
  },
  head() {
    return {
      title: `${this.$t('利用規約')} | ${this.$t('塗り絵ツクール')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('利用規約本文1'),
        },
      ],
    }
  },
}
</script>
