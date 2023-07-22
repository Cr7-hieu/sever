<script setup>

</script>

<template>
  <div>
    <div class="d-flex flex-column flex-md-row align-items-center justify-content-between p-3 px-md-4 " >      
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
        <h3><a class="navbar-brand "><router-link to="/">Vue Mini Project</router-link></a></h3>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item ">
              <a class="nav-link  " aria-current="page" ><router-link :to="{name:'product.list'}">Product </router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link " aria-current="page" ><router-link :to="{name:'user.list'}">User</router-link></a>
            </li>
        </ul>
      </div>    
      </nav>
      <a class="btn btn-outline-primary " ><router-link :to="{name:'form.login'}">Đăng nhập</router-link> </a>
    </div>
    <div class="container-fluid">
      <RouterView />
    </div>

  </div>

  
</template>
<style>

</style>