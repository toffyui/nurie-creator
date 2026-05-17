<template>
  <div>
    <PageHeader />
    <div class="bg-orange-200">
      <SectionTitle :text="$t('お問い合わせ')" />
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
      </article>
    </div>
  </div>
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
