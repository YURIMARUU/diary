<template>
    <h3>Search entries by date</h3>
  <input v-model="searchDateString" @change="store.changeSearchDate(searchDateString)" type="date">

  <!-- show previous entries submited on a certain date -->
  <div v-if="store.searchedDiaries.length==0">
    <p>No entry found.</p>
  </div>
  <div v-else>
    <li v-for="diary in store.searchedDiaries" :key="diary.id">
      <div class="diary">
        <p class="timestamp">{{ diary.date.toDateString() }}</p>
        <h3 v-if="diary.task!=''">Task内容</h3>
        <p>{{ diary.task }}</p>
        <span v-if="diary.isDone">Task Completed:|</span>
        <span v-else>Still in progress :/</span>
      </div>
    </li>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useDiariesStore } from '../store/DiaryStore'

const store = useDiariesStore()
store.searchedDiaries
const searchDateString = ref<string>('')

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.diary {
  background-color:rgb(215, 211, 237);
  border-radius: 10px;
}

.timestamp {
  font-size: small;
  display: inline;
}

form {
  background-color: rgb(147, 161, 121);
  border-radius: 10px;
  padding: 10px;
}

input, button {
  display:inline-block;
  margin: 15px;
}

li {
  list-style: none;
  margin-top: 3%;
  margin-bottom: 3%;
}
</style>
