<script setup>

</script>

<template>
  <div>
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
                        <li><a class="dropdown-item" ><router-link :to="{name:'time.run'}"  class="text-router">Ngày giao hàng</router-link></a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </li>                     
                </ul> 
                
                <form >
                    <button type="button" class="btn btn-outline-primary fw-bolder "><a class="text-decoration-none" >
                      <router-link :to="{name:'form.login'}" class="">
                        <font-awesome-icon class="icon" icon="right-to-bracket" />
                          Đăng nhập
                    </router-link> </a> 
                    </button>
                </form>
              </div>        
            </div>
      </nav>     
    <div class="container-fluid">
      <RouterView />
    </div>
  </header>
  <footer class="card-footer text-body-secondary footer">
    <div class="container-xl"> 
      <div class="row">
        <div class="col">
          <div>
            <p><a class="link-opacity-75-hover link-underline-light text-body-secondary" href="#">Tích điểm mua hàng</a></p>
            <p><a class="link-opacity-75-hover link-underline-light text-body-secondary" href="#">Lịch sử giao dịch</a></p>
            <p><a class="link-opacity-75-hover link-underline-light text-body-secondary" href="#">Chính sách bảo hành</a></p>
          </div>
          
        </div>
        <div class="col ">
          <p><a class="link-opacity-75-hover link-underline-light text-body-secondary" href="#">Giới thiệu công ty</a></p>
          <p><a class="link-opacity-75-hover link-underline-light text-body-secondary" href="#">Tuyển dụng</a> </p>
          <p><a class="link-opacity-75-hover link-underline-light text-body-secondary" href="#">Gửi góp ý, khiếu nại</a></p>
        </div>
        <div class="col">
          <p>Tổng đài hỗ trợ</p>
          <p>Gọi mua: <span class="footer-phone">xxxxxxxx</span></p>
          <p>Khiếu nại: <span class="footer-phone">xxxxxxxx</span></p>
        </div>
        <div class="col">
          <a class="link-opacity-75-hover link-underline-light" href="#">
            <div  class="d-flex justify-content-evenly">
              <p><font-awesome-icon icon="house" /> Gen Z</p>
              <p><font-awesome-icon icon="envelope" /> Email</p>
              <p><font-awesome-icon icon="tag" /> Style Gen Z</p>
            </div>
          </a>
          <p><a class="link-opacity-75-hover" href="#"></a></p>
          <p><a class="link-opacity-75-hover" href="#"></a></p>
        </div>
      </div>
      <div class="coppyright">
        <div class="text-center">
          <p>Công ty cổ phần Gen Z</p>
          <p>Công ty phân phối điện thoại di động lớn</p>
        </div>
      </div>
    </div>
  </footer>
</div>
  
</template>
<script >

</script>
