

<template>
  <navbar />
  <router-view></router-view>
  <Footer1 />


</template>


<script>
import navbar from './components/Navbar.vue'
import Footer1 from './components/footer.vue'

export default{
  components:{
navbar,
Footer1,

  }
}
</script>

