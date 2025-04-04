<template>
   <nav class="bg-white shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-4">
        <div class="flex justify-between items-center py-4">
            <div class="flex items-center">
              <router-link to="/" class="flex items-center">
                <img src="./../../assets/logo.png" alt="Sao Khuê Logo" class="h-14 mr-3" >
              </router-link>
            </div>
            <!-- Desktop Menu -->
            <div class="hidden md:flex space-x-8">
              <router-link to="trang-chu" class="text-gray-700 hover:text-primary-700 font-medium" active-class="border-b-2 border-secondary-400">Trang chủ</router-link>
              <router-link to="giao-vien" class="text-gray-700 hover:text-primary-700 font-medium" active-class="border-b-2 border-secondary-400">Giáo viên</router-link>
              <router-link to="hoc-sinh" class="text-gray-700 hover:text-primary-700 font-medium" active-class="border-b-2 border-secondary-400">Học sinh</router-link>
              <router-link to="lich-hoc" class="text-primary-700  hover:text-primary-700 font-medium " active-class="border-b-2 border-secondary-400">Lịch học</router-link>
              <router-link to="tuyen-sinh" class="text-gray-700 hover:text-primary-700 font-medium" active-class="border-b-2 border-secondary-400">Tuyển sinh</router-link>
              <router-link to="lien-he" class="text-gray-700 hover:text-primary-700 font-medium" active-class="border-b-2 border-secondary-400">Liên hệ</router-link>
            </div>
            
            <!-- Mobile Menu Button -->
            <div class="md:hidden">
                <button @click="toggleMobileMenu()" id="mobile-menu-button" class="text-gray-700 hover:text-primary-700 focus:outline-none">
                    <i class="fas fa-bars text-2xl"></i>
                </button>
            </div>
        </div>
        <!-- Mobile Menu -->
        <div v-show="mobileMenuOpen" class="md:hidden pb-4">
          <router-link to="trang-chu" class="block py-2 text-primary-700 font-medium">Trang chủ</router-link>
          <router-link to="/giao-vien" class="block py-2 text-gray-700 hover:text-primary-700 font-medium">Giáo viên</router-link>
          <router-link to="/hoc-sinh" class="block py-2 text-gray-700 hover:text-primary-700 font-medium">Học sinh</router-link>
          <router-link to="/lich-hoc" class="block py-2 text-gray-700 hover:text-primary-700 font-medium">Lịch học</router-link>
          <router-link to="/tuyen-sinh" class="block py-2 text-gray-700 hover:text-primary-700 font-medium">Tuyển sinh</router-link>
          <router-link to="/lien-he" class="block py-2 text-gray-700 hover:text-primary-700 font-medium">Liên hệ</router-link>
        </div>
    </div>
  </nav>
</template>
<script>
   export default {
    name: 'App',
    data(){
      return {
        mobileMenuOpen: false
      }
    },
    methods: {
      toggleMobileMenu() {
        debugger
        console.log(1)
        this.mobileMenuOpen = !this.mobileMenuOpen;
      }
    }
   }
</script>