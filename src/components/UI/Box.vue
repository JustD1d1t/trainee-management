<template>
  <div class="box">
    <slot/>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.box {
  background-color: rgb(252, 248, 248);
  border-radius: 10px;
  box-shadow: 0px 0px 18px -11px rgba(0, 0, 0, 1);
  padding: 2rem 1rem;
}

</style>