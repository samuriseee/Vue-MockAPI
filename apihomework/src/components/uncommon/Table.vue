<template>
  <section class="awesome-table">
    <table>
      <thead>
        <tr>
          <th v-for="(obj, ind) in config" :key="ind">
            {{ obj.title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="person in theData"
          :key="'person-' + person.id"
          @click="$router.push(`/people/`+ person.id)"
        >
          <td v-for="(obj, ind) in config" :key="ind">
            <span v-if="obj.type === 'text'">{{ person[obj.key]}}</span>
            <span v-if="obj.type === 'date'"
              >{{ new Date(person.createdAt).toLocaleDateString() }}
            </span>
            <figure v-if="obj.type === 'image'">
              <img :src="person.avatar" height="60px" />
            </figure>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  props: ["theData", "config"],
  data() {
    return {}
  }
};
</script>

<style scoped>
.awesome-table {
  border: 1px solid #999;
  border-radius: 4px;
  color: #333;
  overflow: auto;
  margin-top: 30px;
}
.awesome-table figure {
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
}
.awesome-table figure img {
  border: 1px solid #bbb;
  border-radius: 50%;
  overflow: hidden;
}
.awesome-table table tbody tr {
  cursor: pointer;
}
table {
  margin-top: -10px;
  width: 100%;
}
table th {
  position: sticky;
  top: 0;
  background: #f1f1f1;
  padding: 10px 5px;
  text-align: left;
  border-bottom: 1px solid #999;
}
table td {
  padding: 5px 5px;
  text-align: left;
}
</style>
