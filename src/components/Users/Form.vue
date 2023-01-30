<template>
  <div>
    <Transition>
      <Notification v-if="show" :content="content" />
    </Transition>
    <form class="add-user__form" @submit.prevent="onSubmit">
      <div class="add-user__form-wrapper">
        <Box class="add-user__details">
          <UIInput
            class="add-user__input"
            :val="user?.first_name ? user.first_name : ''"
            :name="'First name'"
            v-model.trim="updatedFirstName"
          />
          <UIInput
            class="add-user__input"
            :val="user?.last_name ? user.last_name : ''"
            :name="'Last name'"
            v-model.trim="updatedLastName"
          />
        </Box>
        <Box class="add-user__image">
          <img :src="urlUpdatedImage ? urlUpdatedImage : user?.avatar" alt="" />
          <UIInput
            class="add-user__input custom-file-upload"
            :type="'file'"
            name="Photo"
            id="change-photo"
            v-model="updatedImage"
          />
        </Box>
      </div>
      <UIButton type="submit" class="primary-button submit-form-button">Submit</UIButton>
    </form>
  </div>
</template>

<script>
import Notification from "@/components/UI/Notification";
import { mapActions } from "vuex";

export default {
  components: { Notification },
  props: {
    user: {
      type: Object,
      default: () => {
        return {};
      },
    },
    method: {
      type: String,
      default: "POST",
    },
  },
  data() {
    return {
      updatedFirstName: "",
      updatedLastName: "",
      updatedImage: "",
      urlUpdatedImage: "",
      show: false,
      content: "",
    };
  },
  methods: {
    ...mapActions("usersModule", {
      editUser: "editUser",
      addUser: "addUser",
    }),
    async onSubmit() {
      if(!this.updatedFirstName.length && !this.updatedLastName.length) {
        this.show = true;
        this.content = "Uzupełnij pola i wstaw zdjęcie"
        setTimeout(() => {
          this.show = false;
        }, 2000);
        return
      }
      if (this.method === "PATCH") {
        const updated = await this.editUser({
          firstName: this.updatedFirstName,
          lastName: this.updatedLastName,
          id: this.$route.params.id,
          method: this.method,
        });
        if (updated) {
          this.show = true;
          this.content = "Zaktualizowano dane";
          setTimeout(() => {
            this.show = false;
            this.$router.push("/");
          }, 2000);
        }
      } else if (this.method === "POST") {
        const created = await this.addUser({
          firstName: this.updatedFirstName,
          lastName: this.updatedLastName,
          avatar: this.urlUpdatedImage,
          method: this.method,
        });
        if (created) {
          this.show = true;
          this.content = "Dodano użytkownika";
          setTimeout(() => {
            this.show = false;
            this.$router.push("/");
          }, 2000);
        }
      }
    },
  },
  watch: {
    updatedImage() {
      this.urlUpdatedImage = URL.createObjectURL(this.updatedImage[0]);
    },
  },
};
</script>

<style scoped>
::v-deep .submit-form-button {
  margin-top: 1rem;
  cursor: pointer;
}
</style>
