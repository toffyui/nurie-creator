<template>
  <div>
    <h1
      class="
        w-full
        md:text-5xl
        text-2xl
        font-bold
        leading-tight
        text-center text-gray-800
      "
    >
      <slot>{{ text }}</slot>
    </h1>
    <div class="w-full mb-4">
      <div
        class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-b"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>
