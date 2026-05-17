<template>
  <div>
    <PageHeader />
    <div class="bg-orange-200">
      <SectionTitle :text="$t('プライバシーポリシー')" />
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
        <p class="mb-6">{{ $t('プライバシーポリシー本文1') }}</p>

        <h2 class="text-xl md:text-2xl font-bold mt-8 mb-3">
          1. {{ $t('取得する情報') }}
        </h2>
        <p class="mb-4">{{ $t('取得する情報本文') }}</p>

        <h2 class="text-xl md:text-2xl font-bold mt-8 mb-3">
          2. {{ $t('Cookieの利用について') }}
        </h2>
        <p class="mb-4">{{ $t('Cookie本文') }}</p>

        <h2 class="text-xl md:text-2xl font-bold mt-8 mb-3">
          3. {{ $t('アクセス解析について') }}
        </h2>
        <p class="mb-4">{{ $t('アクセス解析本文') }}</p>

        <h2 class="text-xl md:text-2xl font-bold mt-8 mb-3">
          4. {{ $t('広告配信について') }}
        </h2>
        <p class="mb-4">{{ $t('広告配信本文') }}</p>

        <h2 class="text-xl md:text-2xl font-bold mt-8 mb-3">
          5. {{ $t('アップロード画像の取り扱い') }}
        </h2>
        <p class="mb-4">{{ $t('アップロード画像本文') }}</p>

        <h2 class="text-xl md:text-2xl font-bold mt-8 mb-3">
          6. {{ $t('免責事項') }}
        </h2>
        <p class="mb-4">{{ $t('免責事項本文') }}</p>

        <h2 class="text-xl md:text-2xl font-bold mt-8 mb-3">
          7. {{ $t('ポリシーの変更') }}
        </h2>
        <p class="mb-4">{{ $t('ポリシー変更本文') }}</p>
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
      title: `${this.$t('プライバシーポリシー')} | ${this.$t(
        '塗り絵ツクール'
      )}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('プライバシーポリシー本文1'),
        },
      ],
    }
  },
}
</script>
