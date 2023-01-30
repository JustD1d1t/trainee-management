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
.add-user__form-wrapper {
  display: flex;
  justify-content: space-between;
}

.add-user__image {
  width: 36%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.add-user__image img {
  width: 150px;
  height: 150px;
  border-radius: 100%;
  margin-bottom: 3rem;
}

.add-user__details {
  width: 61%;
  display: flex;
  justify-content: space-between;
  gap: 40px;
}
.add-user__input {
  flex-grow: 1;
}
.add-user__image {
  width: 36%;
}
</style>
