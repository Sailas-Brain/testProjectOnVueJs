<template>
  <div class="containet-item">
      <div
          class="item"
          v-for="(item, index) in list"
          :key="index"
      >
        <div
            class="picture"
            v-if="item.picture.large"
        >
          <img :src="item.picture.large" alt="">
        </div>
        <h2>{{ `${item.name.first}  ${item.name.last}`}}</h2>
        <div class="info">
          <span v-if="item.email">Email: {{ item.email }}</span>
          <span v-if="item.phone">Phone: {{ item.phone }}</span>
          <router-link class="detailed" :to="{ name: 'user', params: { id: index, data: item}, }" tag="button">More detailed</router-link>
        </div>
      </div>
  </div>
</template>

<script>
export default {
name: "UserItem",

  props: {
    list: {
      type: Array,
      default: () => ([]),
    }
  },

}
</script>

<style scoped>

.containet-item {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #000;
  padding: 20px 10px;
  margin-top: 20px;
  box-sizing: border-box;
  width: calc((100% / 2) - 10px);
}

.item:first-child {
  margin-left: 0px;
}

.item:nth-of-type(2n + 1) {
  margin-left: 0px;
}

.info span {
  display: block;
  margin-top: 10px;
}
.detailed {
  margin-top: 15px;
  width: 120px;
  height: 30px;
  cursor: pointer;
}

.picture img {
  width: 128px;
  height: 128px;
  object-fit: cover;
}
</style>
