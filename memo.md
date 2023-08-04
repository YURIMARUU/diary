js構文

- [ ] 条件 ? Trueならこれ : falseならこれ;
- [ ] for (let i = 1; i <= 10; i++) {console.log(`Hi ${i}`);} template literal
- [ ] const sum = (a, b, c) => a + b + c; return しかない時
- [ ] const double =(a) => a * 2;　aはparameter

備考
- [ ] directory構成
- [ ] date　ライブラリ 
- [ ] repo権限
- [ ] electron
- [ ] npmjs.com (node.jsのlib), GitHub
- [ ] security (socket.dev), issues, downloads, support切れてる？
- [ ] promise, async, await
- [ ] React document

リソース
- [ ] Can I use
- [ ] https://www.sociomedia.co.jp/9556
- [ ] https://kinsta.com/jp/blog/svelte-vs-react/#:~:text=%E3%81%AE%E9%80%9A%E3%82%8A%E3%81%A7%E3%81%99%E3%80%82-,Svelte%E3%81%AE%E9%95%B7%E6%89%80,%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8%E3%81%8C%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82
- [ ] https://zenn.dev/akkie1030/articles/js-loop-summary
- [ ] https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
- [ ] https://jsprimer.net/
- [ ] https://ja.javascript.info/
- [ ] https://typescript-jp.gitbook.io/deep-dive/
- [ ] https://typescriptbook.jp/
- [ ] https://jsprimer.net/
- [ ] https://www.webdesignleaves.com/pr/jquery/javaascript_02.html
- [ ] https://azu.github.io/promises-book/#introduction
- [ ] https://reffect.co.jp/vue/understaind-vue-basic/
- [ ] https://qiita.com/d-dai/items/7df318b9369be3d58a58
- [ ] https://www.npmjs.com/package/vuex
- [ ] https://socket.dev/npm/package/vuex
- [ ] https://reffect.co.jp/vue/understaind-vue-basic/
- [ ] https://qiita.com/d-dai/items/7df318b9369be3d58a58
- [ ] https://engineering.mercari.com/blog/entry/20220128-3a0922eaa4/

使った
- [ ] https://qiita.com/k_shiota/items/05f67006bb3012dfee2f
- [ ] https://reffect.co.jp/vue/nuxt3/
- [ ] https://reffect.co.jp/vue/vue3-typescript/#%E5%A4%89%E6%95%B0%E3%81%AE%E5%9E%8B%E3%81%AE%E8%A8%AD%E5%AE%9A%E6%96%B9%E6%B3%95
- [ ] https://typescriptbook.jp/overview/features
- [ ] https://learn.microsoft.com/ja-jp/windows/dev-environment/javascript/nodejs-beginners-tutorial
- [ ] https://zenn.dev/akkie1030/articles/js-loop-summary
- [ ] https://zenn.dev/protoout/articles/17-how-to-nodejs-install

https://tisch.nyu.edu/itp

https://ideate.cmu.edu/undergraduate-programs/game-design/

Vue.js

Composition v.3

- [ ] <h1>{{ message }}</h1>
- [ ] import { ref, reactive, computed, onMounted, onUpdated, onUnmounted, watch, PropType} from 'vue'
- [ ] refの時はvalueをいじる。でも、{{}}の時はvalueいらない。
- [ ] reactive({}), ref() <- - 推奨
- [ ] <div v-bind:id="dynamicId"></div>
- [ ] v-bind　略してもいい
- [ ] <button v-on:click="increment">{{ count }}</button>
- [ ] V-on: @
- [ ] <input :value="text" @input="onInput">
- [ ] v-model　onとbindを合体。<input>関連。
- [ ] v-if=“”
- [ ] todos.value = todos.value.filter(/* ... */)
- [ ] todos.value = todos.value.filter((t) => t !== todo) みたいな。
- [ ] computed(() => {})
- [ ] ref は null で初期化。
- [ ] watch(count, (newCount) => {  console.log(`new count is: ${newCount}`)})
- [ ] setup内は、import ChildComp from './ChildComp.vue'
- [ ] Template内は、<ChildComp :msg="greeting" />
- [ ] 子コンポーネント内、defineProps({ msg: String })
- [ ] defineEmits(['イベント名'])
- [ ] emit('イベント名', 'hello from child')
- [ ] 親コンポーネント内、スロット <ChildComp></ChildComp>
- [ ] 子コンポーネント内、<slot>Fallback content</slot>

Option v.2

- [ ] data() {return {message: 'Hello World!' }}
- [ ] methods: {この中でfunction定義。this使ってコンポーネント内の関数にアクセス。}
- [ ] computed: {}
- [ ] export default { mounted() { }}
- [ ] this.$refs.レフの名前
- [ ] watch: {todoId() { this.fetchData()}}
- [ ] components: { ChildComp }
- [ ] props: {msg: String }
- [ ] 子emits: ['response']
- [ ] 子created() {this.$emit('response', 'hello from child')}

Overall

- [ ] 親->子<ChildComp />
- [ ] 子->親props
- [ ] 子->親events
- [ ] 親->子slot
- [ ] import HelloWorld, { User } from './components/HelloWorld.vue';
- [ ] const state = reactive <{ msg: string } >{msg: 'Hello TypeScript',};
- [ ] reactiveの時は、.valueを書かなくていい。
- [x] $subscribe()はpatchの後１回
- [ ] actions can be asynchronous
- [ ] pinia.use( plugin名 )
- [ ] Nuxt 3データ取得に関する関数: useFetch, useLazyFetch, useAsyncData, useLazyAsyncData
- [ ] fetch 関数では取得したデータを JSON Parse する必要(response.json())がありますが $fetch では自動で行ってくれます。
- [ ] Universal mode レンダリングはサーバ側でレンダリングされた HTML が戻される
- [ ] クライアント側でもサーバ側と同様の処理を行います。クライアント側で行う処理のことを Hydration といいます。

TypeScript

- [ ] function sum(a: number, b: number): number {return a + b;}
- [ ] function identity<T>(arg: T): T { return arg;}
- [ ] type NullableString = string | null;　どっちもOK
- [ ] type Point2D = [number, number];　タプル型
- [ ] interface, class Employee implements Person{}
- [ ] promise, async, await
- [ ] any, void
- [ ] type 型エイリアス
- [ ]  <HelloWorld :msg=100 />
- [ ] type: String as PropType<string>


Front End Library
- [ ] storybook コンポーネントごとの動作チェックなど
- [ ] resetCSS　デフォルトのスタイル、paddingなどのリセット
- [ ] eslint, stylelint
- [ ] prettier
- [ ] plop
