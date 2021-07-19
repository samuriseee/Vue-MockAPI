<template>
  <div class="home">
    <div class="companies">
      <h1>Companies</h1>
      <p>List of Companies on the platform</p>
    </div>
    <div class="filter">
      <!-- <div class="search-wrapper">
    <input type="text" v-model="search" placeholder="Search title.."/>
        <label>Search title:</label>
    </div>
      
      <button><i class="fas fa-filter"></i>Filter</button> -->
    </div>

    <main>
      <Table
        v-if="tableData"
        :theData="computedTableData"
        :config="config"
        :style="{ height: '600px' }"
      />
    </main>
    <Pagination
      v-if="tableData"
      :totalRecords="tableData.length"
      :perPageOptions="perPageOptions"
      v-model="pagination"
    />
  </div>
</template>

<script>
import Table from "../components/uncommon/Table.vue";
import Pagination from "../components/uncommon/Pagination";

const perPageOptions = [15, 20, 30];

export default {
  components: {
    Table,
    Pagination,
  },
  data: function () {
    return {
      perPageOptions,
      tableData: undefined,
      search: "",
      pagination: { page: 1, perPage: perPageOptions[0] },
      config: [
        {
          key: "avatar",
          title: "Avatar",
          type: "image",
        },
        {
          key: "name",
          title: "Name",
          type: "text",
        },
        {
          key: "city",
          title: "City",
          type: "text",
        },
        {
          key: "phone",
          title: "Phone",
          type: "text",
        },
        {
          key: "companyName",
          title: "Company",
          type: "text",
        },
        {
          key: "createdAt",
          title: "Signup Date",
          type: "date",
        },
      ],
    };
  },
  computed: {
    computedTableData() {
      if (!this.tableData) return [];
      else {
        const firstIndex = (this.pagination.page - 1) * this.pagination.perPage;
        const lastIndex = this.pagination.page * this.pagination.perPage;

        return this.tableData.slice(firstIndex, lastIndex);
      }
    },
    filteredList() {
      return this.people.filter((person) => {
        return person.title.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  mounted() {
    this.$axios.get("http://localhost:3000/people").then(({ data }) => {
      this.tableData = data;
    });
  },
};
</script>
<style scoped>
.home .companies {
  margin-left: 20px;
  text-align: left;
  font-size: 1.5rem;
}
.home .companies h1 {
  padding-bottom: 0px;
}
.home .companies p {
  margin-top: -10px;
  font-size: 1rem;
  opacity: 0.8;
}
.home .filter {
  display: flex;
  padding: 10px;
  justify-content: flex-end;
}
.home .filter button {
  width: 100px;
  height: 40px;
  color: #fff;
  background: #fa7c65;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 7px;
  margin-right: 10px;
  transition: 0.5s;
}
.home .filter button:hover {
  background: #e95338;
  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
}
body {
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  margin: 0;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

nav {
  height: 60px;
  background: #222;
  font-size: 32px;
  color: white;
  display: flex;
  align-items: center;
  padding-left: 20px;
}
.name {
  font-size: 1.5rem;
  padding: 10px;
}
</style>
