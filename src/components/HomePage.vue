<template>  

<div >
 <h1>DashBoard </h1>

</div>

</template>

<script>

export default {
  mounted() {
      console.log("ugur adalar");
      debugger;
      this.getListData();
      
    },
    
methods: {

   getListData(){
   this.$store.dispatch("getServicePostsData")
   }
    
}
}


</script>

<style>
</style>
