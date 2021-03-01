<template>
  <transition name="modal" appear>
    <div class="modal__overlay">
      <div class="modal__window max-h-96 mx-3 w-full lg:w-1/3 md:1/2">
        <div class="modal__content">
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>
<style>
.modal__overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
}
.modal__window {
  overflow: hidden;
  background-color: #fff;
  color: black;
  padding: 5px;
}
.modal__content {
  height: 100%;
  padding: 20px;
  position: relative;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s;
}
.modal-enter-active,
.modal-leave-active > .modal__window {
  transition: opacity 0.4s, transform 0.4s;
}
.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
}

.modal-enter,
.modal-leave-to > .modal__window {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
