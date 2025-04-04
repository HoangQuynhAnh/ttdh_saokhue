<template>
  <div id="app" class="bg-gray-50">
    <app-header></app-header>
    <app-sidenav></app-sidenav>
    <router-view/>
    <app-footer></app-footer>
    <button 
      v-show="showBackToTop" 
      @click="scrollToTop" 
      class="fixed bottom-6 right-6 bg-primary-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-50 hover:bg-primary-800 focus:outline-none"
    >
      <i class="fas fa-arrow-up"></i>
    </button>
  </div>
</template>

<script>
  import Footer from './components/layout/Footer.vue';
  import Header from './components/layout/Header.vue';
  import Sidenav from './components/layout/Sidenav.vue';
  export default {
    name: 'App',
    components: {
      'app-header': Header,
      'app-sidenav': Sidenav,
      'app-footer': Footer
    },
    data(){
      return {
        mobileMenuOpen: false,
        showBackToTop: false,
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.showBackToTop = window.pageYOffset > 300;
      },
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  }

</script>

<style>

</style>
