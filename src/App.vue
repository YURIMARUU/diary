<template>

  <form @submit.prevent="store.addDiary(new Date(timeString), nDiary.task,nDiary.isDone)">
    <h1>日報</h1>
    <label for="name">今日の日付</label>
    <input v-model="timeString" type="date" name="date" required="true">    
    <br>
    <label for="task">今日のタスク・進捗</label>
    <input v-model="nDiary.task" name="task">
    <br>
    <label for="progress">今日の目標達成できた</label>
    <input v-model="nDiary.isDone" type="checkbox" name="progress">
    <br>
    <button>提出</button>
  </form>

  <!-- show previous entries -->
  <li v-for="diary in store.filteredDiaries" :key="diary.id">
    <div class="diary">
      <p>{{ diary.task }}</p>
      <p class="timestamp">{{ diary.date.toDateString() }}</p>
      <h3 v-if="diary.task!=''">Task内容</h3>
      <p>{{ diary.task }}</p>
      <span v-if="diary.isDone">Task Completed:|</span>
      <span v-else>Still in progress :/</span>
    </div>
  </li>

  <button @click="store.hideCompleted = !store.hideCompleted">
    {{ store.hideCompleted ? '全て' : '未完了のみ' }}
  </button>

  <HelloWorld />
</template>

<script setup lang="ts">

  import { useDiariesStore } from './store/DiaryStore'
  import { ref } from 'vue';
  import HelloWorld from './components/HelloWorld.vue';
  import { Diary } from '../src/types/interface'

  const store = useDiariesStore()

  const timeString = ref<string>('')
  const nDiary =ref<Diary>({
    id: -1,
    date: new Date(),
    task: '',
    isDone: false,
  });

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.diary {
  background-color:antiquewhite;
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
