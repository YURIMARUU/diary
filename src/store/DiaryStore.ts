import { defineStore } from 'pinia'
import { ref } from 'vue';
import { Diary } from '../types/interface'


export const useDiariesStore = defineStore('diaries', {

    state: () => {
        const diaryList = ref<Diary[]>([])
        const hideCompleted = ref<boolean>(false)
        const count = ref<number>(0)
        const searchDateString = ref<string>('')

        return {diaryList, hideCompleted, count, searchDateString}
    },

    getters: {

        filteredDiaries: (state) => {
            return state.hideCompleted
                ? state.diaryList.filter((t) => !t.isDone)
                : state.diaryList
        },

        searchedDiaries: (state) => {
            function checkMatches (searchedDate: Date, candidate: Date) {
                if (candidate.getFullYear() === searchedDate.getFullYear() &&
                    candidate.getMonth() === searchedDate.getMonth() &&
                    candidate.getDate() === searchedDate.getDate())  {
                    return true
                } else {
                    return false
                }
            }

            return state.diaryList.filter((d) => checkMatches(new Date(state.searchDateString), d.date))
        },
    },

    actions: {
        increment() {
            this.count++
        },

        addDiary( nDate: Date, nTask: string, nIsDone: boolean ) {
            this.diaryList.push({id: this.count, date: nDate, task: nTask, isDone: nIsDone});
            this.increment()
        },

        changeSearchDate(newSearchDateString: string) {
            this.searchDateString = newSearchDateString
        }

    },
})