<template>
  <div class="pagination">
    <router-link :to="'/?page=' + prevPage" class="pagination-button" :class="{disabled: disabledPrevPage}">&lt;&lt;</router-link>
    <router-link :to="'/?page=' + page"
      class="pagination-button"
      :class="{ active: currentPage == page || (!currentPage && page == 1) }"
      v-for="page in pages"
      :key="page"
    >
      {{ page }}
    </router-link>
    <router-link :to="'/?page=' + nextPage" class="pagination-button" :class="{disabled: disabledNextPage}">&gt;&gt;</router-link>
  </div>
</template>

<script>
export default {
  props: {
    pages: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    currentPage() {
      return this.$route.query.page;
    },
    nextPage() {
      return parseFloat(this.$route.query.page) + 1;
    },
    prevPage() {
      return parseFloat(this.$route.query.page) - 1;
    },
    disabledPrevPage() {
      return parseFloat(this.$route.query.page) === 1;
    },
    disabledNextPage() {
      return parseFloat(this.$route.query.page) === this.pages;
    }
  },
};
</script>

<style scoped>
.pagination {
  padding: 1.5rem 0;
}
.pagination-button {
  width: 30px;
  border: 1px solid rgb(24, 107, 24);
  border-right: none;
  background-color: white;
  aspect-ratio: 1/1;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  box-sizing: border-box;
}

.pagination-button.disabled {
  opacity: 0.5;
  pointer-events: none;
}
.pagination-button:last-of-type {
  border-right: 1px solid rgb(24, 107, 24);
}
.pagination-button.active {
  background-color: rgb(24, 107, 24);
  color: white;
}
</style>
