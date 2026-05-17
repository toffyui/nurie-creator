<template>
  <main class="bg-white">
    <section class="gradient text-white py-10">
      <div class="container mx-auto px-5 md:px-20">
        <h1 class="text-3xl md:text-5xl font-bold leading-tight">
          {{ $t('お問い合わせ') }}
        </h1>
      </div>
    </section>

    <article
      class="container mx-auto px-5 md:px-20 py-10 text-gray-800 leading-relaxed max-w-4xl"
    >
      <p class="mb-8 text-lg">{{ $t('お問い合わせ本文') }}</p>

      <h2 class="text-2xl md:text-3xl font-bold mt-8 mb-4">
        {{ $t('連絡方法') }}
      </h2>
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>
          {{ $t('X（旧Twitter）のDM') }}:
          <a
            href="https://x.com/toffy_dev"
            target="_blank"
            rel="noopener"
            class="text-orange-600 underline hover:text-orange-500"
            >@toffy_dev</a
          >
        </li>
      </ul>

      <h2 class="text-2xl md:text-3xl font-bold mt-10 mb-4">
        {{ $t('対応について') }}
      </h2>
      <p class="mb-6">{{ $t('対応について本文') }}</p>

      <h2 class="text-2xl md:text-3xl font-bold mt-10 mb-4">
        {{ $t('画像削除依頼') }}
      </h2>
      <p class="mb-6">{{ $t('画像削除依頼本文') }}</p>

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
export default {
  head() {
    return {
      title: `${this.$t('お問い合わせ')} | ${this.$t('塗り絵ツクール')}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('お問い合わせ本文'),
        },
      ],
    }
  },
}
</script>
