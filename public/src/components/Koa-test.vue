<template>
    <div>这是 Vue + {{title}}</div>
</template>

<script>
    export default {
      name: "Koa-test",
      data(){
          return {
            title:''
          }
      },
      mounted(){
        this.axios.get('/koa-test').then((response) =>{
          console.log(response);
          this.title = response.data
        }).catch(function (error) {
          console.log(error);
        });
      },
    }
</script>

<style scoped>

</style>
