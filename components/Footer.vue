<template>
  <div class="gradient text-white">
    <WaveUp color="#FFEBC8" />
    <footer
      class="
        md:flex md:justify-between md:items-center
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
      <div class="my-4 text-base leading-tight">
        {{ new Date().getFullYear() }} —
        <strong>© {{ $t('塗り絵ツクール') }}</strong>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'SiteFooter',
}
</script>
