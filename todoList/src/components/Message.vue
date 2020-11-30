<template>
  <div>
    <h2 class="title">留言板</h2>
    <div class="addMessage">
      <input type="text" placeholder="请输入昵称" v-model="newName" />
      <textarea placeholder="请输入留言" v-model="newMessage"></textarea>
      <button @click="ADD_LIST">提交留言</button>
    </div>
    <ul class="messageList">
      <li class="editing" v-for="list of dataTodos" :key="list.id">
        <h3>{{ list.name }}</h3>
        <input type="checkbox" v-model="list.checked" />
        <p :style="{ display: { edit } ? 'block' : 'none' }">
          {{ list.message }}
        </p>
        <textarea
          :style="{ display: { edit } ? 'none' : 'block' }"
          v-model="list.message"
        ></textarea>
        <a @click="REMOVE_LIST(list.id)">删除</a>
      </li>
    </ul>
    <div class="sum">
      <label>
        <input type="checkbox" v-model="allCount"/>
        <span>选中全部</span>
      </label>
      <button @click="REMOVE_CLECK('removeChecked')">删除选中项</button>
      <p>当前选中{{ count }}项，共{{ dataTodos.length }}条留言</p>
    </div>
  </div>
</template>

<script lang='ts'>
import TodoList from "../stroe/index";
import { ref } from "vue";
export default {
  name: "Message",
  data() {
    return {
      edit: false,
    };
  },
  setup() {
    let {
      ADD_LIST,
      REMOVE_LIST,
      REMOVE_CLECK,
      newName,
      newMessage,
      count,
      allCount,
      dataTodos,
    } = TodoList();
    return {
      ADD_LIST,
      REMOVE_LIST,
      REMOVE_CLECK,
      newName,
      newMessage,
      dataTodos,
      count,
      allCount
    };
  },
};
</script>