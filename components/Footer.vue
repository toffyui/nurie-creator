<template>
  <footer class="bg-gray-800 text-gray-200 text-sm">
    <div
      class="container mx-auto px-5 md:px-20 py-8 flex flex-col md:flex-row md:justify-between items-center gap-4"
    >
      <div class="flex flex-wrap justify-center gap-x-6 gap-y-2">
        <nuxt-link to="/" class="hover:underline">{{ $t('ホーム') }}</nuxt-link>
        <nuxt-link to="/about" class="hover:underline">{{
          $t('このサイトについて')
        }}</nuxt-link>
        <nuxt-link to="/privacy" class="hover:underline">{{
          $t('プライバシーポリシー')
        }}</nuxt-link>
        <nuxt-link to="/terms" class="hover:underline">{{
          $t('利用規約')
        }}</nuxt-link>
        <nuxt-link to="/contact" class="hover:underline">{{
          $t('お問い合わせ')
        }}</nuxt-link>
      </div>
      <div class="text-xs text-gray-400">
        © {{ new Date().getFullYear() }}
        <a
          href="https://x.com/toffy_dev"
          target="_blank"
          rel="noopener"
          class="underline hover:text-white"
          >Toffy</a
        >
        — {{ $t('塗り絵ツクール') }}
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
}
</script>
