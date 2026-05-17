<template>
  <main class="bg-white">
    <section class="gradient text-white py-10">
      <div class="container mx-auto px-5 md:px-20">
        <h1 class="text-3xl md:text-5xl font-bold leading-tight">
          {{ $t('このサイトについて') }}
        </h1>
      </div>
    </section>

    <article
      class="container mx-auto px-5 md:px-20 py-10 text-gray-800 leading-relaxed max-w-4xl"
    >
      <p class="mb-8 text-lg">{{ $t('サイトについて本文1') }}</p>

      <h2 class="text-2xl md:text-3xl font-bold mt-8 mb-4">
        {{ $t('サイトの特徴') }}
      </h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="p-5 bg-orange-50 rounded-lg shadow">
          <h3 class="text-lg font-bold mb-2 text-orange-700">
            {{ $t('特徴1タイトル') }}
          </h3>
          <p class="text-sm">{{ $t('特徴1本文') }}</p>
        </div>
        <div class="p-5 bg-orange-50 rounded-lg shadow">
          <h3 class="text-lg font-bold mb-2 text-orange-700">
            {{ $t('特徴2タイトル') }}
          </h3>
          <p class="text-sm">{{ $t('特徴2本文') }}</p>
        </div>
        <div class="p-5 bg-orange-50 rounded-lg shadow">
          <h3 class="text-lg font-bold mb-2 text-orange-700">
            {{ $t('特徴3タイトル') }}
          </h3>
          <p class="text-sm">{{ $t('特徴3本文') }}</p>
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

      <div class="mt-10 flex flex-wrap gap-3">
        <nuxt-link
          to="/"
          class="inline-block bg-orange-400 hover:bg-orange-300 text-white font-bold rounded-full py-2 px-6"
          >← {{ $t('ホーム') }}</nuxt-link
        >
        <nuxt-link
          to="/contact"
          class="inline-block border-2 border-orange-600 text-orange-600 hover:bg-orange-50 font-bold rounded-full py-2 px-6"
          >{{ $t('お問い合わせ') }}</nuxt-link
        >
      </div>
    </article>
  </main>
</template>

<script>
export default {
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
