<script setup>

</script>

<template>
  <header class="header-section d-none d-xl-block ">    
      <nav class="navbar navbar-expand-lg bg-header ">
        <div class="container-fluid d-flex justify-content-between">                  
              <h3>
                <a class="navbar-brand ">
                <router-link to="/" ><img src="./assets/images/genz.png" alt=""></router-link>
                </a>
              </h3>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item ">
                      <a class="nav-link  " aria-current="page" ><router-link :to="{name:'product.list'}"  class="text-router">Product </router-link></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link " aria-current="page" ><router-link :to="{name:'user.list'}"  class="text-router">
                        <font-awesome-icon icon="user" class="this-icon" />  User</router-link></a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link " aria-current="page" ><router-link :to="{name:'card.money'}"  class="text-router">
                        <font-awesome-icon icon="money-check-dollar" class="this-icon" />  Money</router-link></a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <a href=""> <font-awesome-icon icon="fa-solid fa-cart-shopping" class="this-icon" /></a> 
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" ><router-link :to="{name:'order.great'}"  class="text-router">Đơn hàng thanh toán</router-link></a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </li>                    
                </ul> 
                
                <form >
                    <a  ><router-link :to="{name:'form.login'}"  class="text-router btn"><font-awesome-icon class="icon" icon="right-to-bracket" />
                      Đăng nhập</router-link> </a>
                </form>
              </div>        
            </div>
      </nav>
      
    <div class="container-fluid">
      <RouterView />
    </div>
  </header>
</template>
<script >

</script>
