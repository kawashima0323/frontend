<template>
  <Header/>
  <Calender/>
  <Footer/>
</template>
<script>
import Calender from '../components/Calendar.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
//import Navigation from '../components/Navigation.vue'
export default {
   
      components: {
        Calender,
        Header,
        Footer,
        //Navigation
  }
}
</script>