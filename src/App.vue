<script setup>

</script>

<template>
  <div>
    <div class="d-flex flex-column flex-md-row align-items-center justify-content-between p-3 px-md-4 " >      
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
        <h3><a class="navbar-brand "><router-link to="/">Vue Mini Project</router-link></a></h3>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item ">
              <a class="nav-link  " aria-current="page" ><router-link :to="{name:'product.list'}">Product </router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link " aria-current="page" ><router-link :to="{name:'user.list'}">User</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link " aria-current="page" ><router-link :to="{name:'card.money'}">Money</router-link></a>
            </li>
            <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Order
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" ><router-link :to="{name:'money.order'}">Đơn hàng thanh toán</router-link></a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        </ul>
        </div>
        
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