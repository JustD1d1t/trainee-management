<template>
  <div class="notification">
    {{ content }}
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
.notification {
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 90%;
  max-width: 800px;
  background-color: rgba(187, 171, 171, 0.7);
  padding: 1rem 2rem;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  display: block;
}
</style>
