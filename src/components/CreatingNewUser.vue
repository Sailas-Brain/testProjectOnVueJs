<template>
 <div>
   <h1>Create new user</h1>
   <div class="containet">
     <label for="">
       <span>First name</span>
       <input type="text" v-model="user.name.first">
     </label>
     <label for="">
       <span>Last name</span>
       <input type="text" v-model="user.name.last">
     </label>
     <label for="">
       <span>Email</span>
       <input type="text" v-model="user.email">
     </label>
     <label for="">
       <span>Phone</span>
       <the-mask :mask="['#(###)-###-##-##', '###-###-####']"  v-model="user.phone"/>
     </label>
     <label for="">
       <span>Age</span>
       <the-mask :mask="['##']" v-model="user.dob.age"/>
     </label>
     <label for="">
       <span>Date of birth</span>
       <the-mask ref="test" :mask="['####:##:## ##:##:##:##']" v-model="user.dob.date"/>
     </label>
     <div class="gender">
       <span>Gender</span>
       <select name="" id="" v-model="user.gender">
         <option value="male">male</option>
         <option value="female">female</option>
       </select>
     </div>
     <label for="">
       <span>City</span>
       <input type="text" v-model="user.location.city">
     </label>
     <label for="">
       <span>National</span>
       <input type="text" v-model="user.nat">
     </label>
     <label class="inner-file" for="download">
       <input ref="picture" id="download" class="file" type="file">
       download images
     </label>
     <button @click="handlerClick" class="save">Save</button>
   </div>
 </div>
</template>

<script>
import {createImagePreview} from "@/tools";

export default {
  name: "CreatingNewUser",
  data: () => {
    return {
      user: {
        name: {
          first: '',
          last: '',
        },
        email: '',
        phone: '',
        dob: {
          age: '',
          date: ''
        },
        gender: '',
        location: {
          city: '',
        },
        nat: '',
        picture: {
          large: ''
        }
      }
    }
  },
  methods: {
    handlerClick() {
      const file = this.$refs.picture.files[0]
      if(file) {
        this.user.picture.large = createImagePreview(file);
      }
      this.$store.dispatch('CREATE_NEW_USER', this.user);
      this.$router.push('/');
    }
  }
};



</script>

<style scoped>
span {
  display: block;
  margin-top: 10px;
  margin-bottom: 5px;
}
.file {
  display: none;
}

label {
  display: block;
}
input {
  padding: 0 10px;
  width: 200px;
  height: 20px;
  font-size: 13px;
}

.inner-file {
  display: block;
  margin-top: 20px;
  font-size: 14px;
  width: 120px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #000;
  cursor: pointer;
}

.save {
  display: block;
  margin-top: 20px;
  width: 120px;
  height: 30px;
  cursor: pointer;
}
</style>
