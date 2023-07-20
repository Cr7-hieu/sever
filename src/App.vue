<script setup>

</script>

<template>
 <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
    <h5 class="my-0 mr-md-auto font-weight-normal"><router-link to="/">Vue Mini Project</router-link> </h5>
    <nav class="my-2 my-md-0 mr-md-3">
      <a class="p-2 text-dark" href="#"><router-link to="/product">Product </router-link></a>
        
      <a class="p-2 text-dark" href="#"><router-link to="/user">User</router-link>  </a>
    </nav>
    <a class="btn btn-outline-primary" ><router-link to="/login">Đăng nhập</router-link> </a>
  </div>

  <RouterView />
</template>
