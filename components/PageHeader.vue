<template>
  <nuxt-link
    to="/"
    class="
      block
      leading-normal
      cursor-pointer
      tracking-normal
      text-white
      gradient
      no-underline
    "
    style="font-family: 'Source Sans Pro', sans-serif"
  >
    <div>
      <div class="container mx-auto text-center pt-4 pb-12">
        <h2 class="my-4 md:text-5xl text-2xl font-bold leading-tight">
          {{ $t('塗り絵ツクール') }}
        </h2>
      </div>
      <WaveDown color="#FFEBC8" />
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'PageHeader',
}
</script>
