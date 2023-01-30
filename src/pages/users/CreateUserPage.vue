<template>
  <div>
    <h2>Add user</h2>
    <Form :method="'POST'"/>
  </div>
</template>

<script>
import Form from "../../components/Users/Form.vue";

export default {
  components: { Form },
};
</script>

<style>

</style>
