<template>
  <NavBar/>
  <router-view/>
</template>


<script>
import NavBar from './components/NavBar.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
// import $ from 'jquery'

export default{
  components: {
    NavBar
  },
  setup(){
    // $.ajax({
    //     url: "http://localhost:3000/user/account/token/",
    //     type: "post",
    //     data:{
    //       username: 'chou',
    //       password: 'chou',
    //     },
    //     success(resp){
    //         console.log(resp)
    //     },
    //     error(resp){
    //         console.log(resp)
    //     }
    //   })
    // $.ajax({
    //   url: "http://localhost:3000/user/account/info/",
    //   type: "get",
    //   headers:{
    //     Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI5MWY0ZThiYTg1OTg0OTZiYjZlMjQ4MTBlZWUwNjdlMiIsInN1YiI6IjEiLCJpc3MiOiJzZyIsImlhdCI6MTcyMTg3NTkyNiwiZXhwIjoxNzIzMDg1NTI2fQ.9h11a99GhzfKzSkCuBUiY0d3bjzFoXHhshThtouYCsg"
    //   },
    //   success(resp){
    //     console.log(resp)
    //   },
    //   error(resp){
    //     console.log(resp)
    //   }

    // })

    // $.ajax({
    //   url: "http://localhost:3000/user/account/register/",
    //   type: "post",
    //   data:{
    //     username: "c",
    //     password: "pc",
    //     confirmedPassword: "pcc",
    //   },
    //   success(resp){ 
    //     console.log(resp)
    //   },
    //   error(resp){
    //     console.log(resp)
    //   }

    // })
  }
}
</script>

<style>
body {
  background-image: url("/src/assets/images/background.png");
  background-size: cover;
}
</style>
