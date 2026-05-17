<template>
  <footer class="container mx-auto px-5 md:px-20 py-3 md:py-6">
    <div
      class="md:flex md:justify-between md:items-center text-base leading-tight"
    >
      <div class="my-4">
        <a href="https://x.com/toffy_dev" class="underline"
          ><strong>Toffy</strong></a
        >
        All Rights Reserved.
      </div>
      <ul class="my-4 flex flex-wrap md:justify-center gap-x-4 gap-y-2 text-sm">
        <li>
          <nuxt-link to="/about" class="hover:underline">{{
            $t('このサイトについて')
          }}</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/privacy" class="hover:underline">{{
            $t('プライバシーポリシー')
          }}</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/terms" class="hover:underline">{{
            $t('利用規約')
          }}</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact" class="hover:underline">{{
            $t('お問い合わせ')
          }}</nuxt-link>
        </li>
      </ul>
      <div class="my-4">
        {{ new Date().getFullYear() }} —
        <strong>© {{ $t('塗り絵ツクール') }}</strong>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter',
}
</script>
