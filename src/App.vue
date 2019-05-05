<template>
  <div>
    <appFooter></appFooter>
   
      <router-view></router-view>
   
    <appHeader></appHeader>
  </div>
</template>

<script>
import Footer from './components/public/Footer';
import Header from './components/public/Header';

export default {
  components: {
    appFooter: Footer,
    appHeader: Header
  }
};
</script>

<style>
</style>