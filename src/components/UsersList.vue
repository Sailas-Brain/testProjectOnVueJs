<template>
  <div class="container">
      <div class="container-filter">
        <SearchByName />
        <router-link class="create" to="/create" tag="button">Creating new user</router-link>
      </div>
      <UserItem
          :list="data"
      />
  </div>
</template>

<script>
import UserItem from "@/components/UserItem";
import SearchByName from "@/components/SearchByName";

export default {
  name: "UsersList",

  components: {
    UserItem,
    SearchByName
  },

  computed: {
    data() {
      return this.$store.state.user.users;
    }
  },
}
</script>

<style scoped>

.container-filter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.create {
  width: 150px;
  height: 30px;
  cursor: pointer;
}

</style>
