<template>
  <div class="form-control">
    <label :for="id">
      <font-awesome-icon v-if="type === 'file'" icon="camera" />{{ name }}</label
    >
    <input
      :class="classname"
      :type="type"
      :placeholder="placeholder"
      :value="val"
      :name="name"
      :id="id"
      @input="type !== 'file' ? $emit('input', $event.target.value) : $emit('input', $event.target.files)"
    />
  </div>
</template>

<script>
export default {
  props: {
    classname: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    val: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
input {
  border-radius: 5px;
  padding: 0.25rem 0.5rem;
  border: 1px solid gray;
}
label {
  margin-bottom: 0.5rem;
}
label svg {
  margin-right: 0.5rem;
}
.form-control {
  display: flex;
  flex-direction: column;
}

.custom-file-input::before {
  content: "Change photo";
  display: inline-block;
  background: white;
  color: black;
  border: 1px solid #999;
  border-radius: 3px;
  padding: 5px 8px;
  outline: none;
  white-space: nowrap;
  cursor: pointer;
  text-shadow: 1px 1px #fff;
  font-weight: 700;
  font-size: 10pt;
}

.custom-file-upload {
  border: 1px solid #ccc;
  display: inline-block;
  cursor: pointer;
  margin-top: 1rem;
  width: 100%;
  text-align: center;
  padding: 0.5rem;
}
input[type="file"] {
  display: none;
}
.custom-file-upload label {
  cursor: pointer;
  margin-bottom: 0;
  padding: 6px 12px;
}
</style>
