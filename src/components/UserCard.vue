<template>
  <div class="container-card">
    <div
        class="picture"
        v-if="item.picture.large"
    >
      <img :src="item.picture.large" alt="">
    </div>
    <div class="info">
      <span v-if="item.name.first">Name: {{ `${item.name.first}  ${item.name.last}`}}</span>
      <span v-if="item.email">Email: {{ item.email }}</span>
      <span v-if="item.phone">Phone: {{ item.phone }}</span>
      <span v-if="item.dob.age">Age: {{ item.dob.age }}</span>
      <span v-if="item.dob.date">Date of birth: {{ item.dob.date }}</span>
      <span v-if="item.gender">Gender: {{ item.gender }}</span>
      <span v-if="item.location.city">City: {{ item.location.city }}</span>
      <span v-if="item.nat">National: {{ item.nat }}</span>
      <button class="remove" @click="handlerClick(id)">Delete</button>
      <router-link class="change" :to="{name: 'change', path: '/change', params: {id: id, data: item }}" tag="button">Change</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  computed: {
    id () {
      return this.$route.params.id;
    },
    item() {
      return this.$route.params.data;
    }
  },
  methods: {
    handlerClick(id) {
      this.$store.dispatch('DELETE_CARD', id);
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>

.container-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #000;
  padding: 20px 10px;
  margin-top: 20px;
  box-sizing: border-box;
  width: 100%;
}

.info span {
  display: block;
  margin-top: 10px;
}
button {
  width: 120px;
  height: 30px;
  margin-top: 15px;
}

.change {
  margin-left: 50px;
}
.picture img {
  width: 128px;
  height: 128px;
  object-fit: cover;
}
</style>
