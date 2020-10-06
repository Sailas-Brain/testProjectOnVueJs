<template>
  <div class="container">
    <label for="">
      <span class="text">Search by name</span>
      <input
          @input="resultSearch"
          v-click-outside="hide"
          v-model="result"
      >
    </label>
    <div v-show="opened" class="list-users">
      <ul>
        <li
            v-for="(user, index) in users"
            :key="index"
            @click="handlerClick(user)"
        >
          {{user.name.first}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';

export default {
  name: "SearchByName",
  data: () => {
    return {
      result: '',
      opened: false,
      isQuery: false,
    }
  },

  computed: {
    users() {
      return this.$store.state.user.filterUsers;
    }
  },

  mounted () {
    this.popupItem = this.$el
  },

  methods: {
    resultSearch() {
      this.isQuery && this.$store.dispatch('FETCH_USERS'); this.isQuery = false;
      console.log("dfs");
      this.opened = this.result === '' ? false : true;
      this.$store.dispatch('SEARCH_BY_NAME', this.result);
    },

    hide () {
      this.opened = false
    },

    handlerClick(user) {
      this.opened = false;
      this.isQuery = true;
      this.$store.commit('SET_USERS', [user]);
    }
  },
  directives: {
    ClickOutside,
  }
}
</script>

<style scoped>
.container {
  position: relative;
}

.text {
  display: block;
  margin-bottom: 5px;
}
input {
  padding: 5px 10px;
}

.list-users {
  position: absolute;
  top: 51px;
  left: 0px;
  background: #fff;
  margin: 0;
  width: 100%;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  font-size: 12px;
  padding: 5px 10px;
  border: 1px solid #000;
  cursor: pointer;
}

li:hover {
  background: #e3e3e3;
}

</style>
