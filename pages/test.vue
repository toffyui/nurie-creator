<template>
  <div class="pt-10 text-center">
    <label
      class="cursor-pointer inline-flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    >
      <svg
        class="w-8 h-8"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
        />
      </svg>
      <span class="ml-2 text-base leading-normal">Upload Image</span>
      <input
        id="file"
        ref="fileInput"
        type="file"
        accept="image/*"
        class="hidden"
        @change="setImage"
      />
    </label>
    <div class="max-w-xl mx-auto pt-10">
      <img v-if="uploadImageUrl" width="100%" :src="uploadImageUrl" />
    </div>
  </div>
</template>
