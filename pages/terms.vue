<template>
  <div>
    <PageHeader />
    <div class="bg-orange-200">
      <SectionTitle :text="$t('利用規約')" />
      <p class="text-center text-sm text-gray-700 -mt-2 mb-6">
        {{ $t('最終更新日') }}: {{ lastUpdated }}
      </p>
      <article
        class="
          container
          mx-auto
          px-5
          md:px-20
          pb-12
          text-gray-800
          leading-relaxed
          max-w-4xl
        "
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
      </article>
    </div>
  </div>
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
