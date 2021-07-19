<template>
  <section>
    <p class="pagination-container">
      <i class="fas fa-angle-double-left" @click="changePage(0)" />
      <i class="fas fa-angle-left" @click="changePage(-1)" />
      <span class="inner-pagination-content">
        Page {{ page }} of {{ pages }}
      </span>
      <i class="fas fa-angle-right" @click="changePage(1)" />
      <i class="fas fa-angle-double-right" @click="changePage(pages)" />
    </p>
  </section>
</template>

<script>
export default {
  props: ["totalRecords", "perPageOptions"],
  data: function () {
    return {
      page: 1,
      perPage: this.perPageOptions[0],
    };
  },
  computed: {
    pages() {
      const remainder = this.totalRecords % this.perPage;

      if (remainder > 0) {
        return Math.floor(this.totalRecords / this.perPage) + 1;
      } else {
        return this.totalRecords / this.perPage;
      }
    },
  },
  methods: {
    changePage(val) {
      switch (val) {
        case 0:
          this.page = 1;
          break;
        case -1:
          this.page = this.page > 1 ? this.page - 1 : this.page;
          break;
        case 1:
          this.page = this.page < this.pages ? this.page + 1 : this.page;
          break;
        case this.pages:
          this.page = this.pages;
          break;
      }

      this.$emit("input", { page: this.page, perPage: this.perPage });
    },
  },
};
</script>

<style>
.pagination-container {
  display: flex;
  justify-content: center;
  color: #444;
  margin-right: 20px;
}
.pagination-container .inner-pagination-content {
  display: flex;
  align-items: center;
  margin: 0px 10px;
}
section i {
  width: 30px;
  height: 30px;
  font-size: 25px;
  justify-content: center;
  cursor: pointer;
  transition: ease-in-out 0.5s;
}
section i:hover {
  color: #397c95;
}
</style>
