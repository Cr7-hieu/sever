<template>
    <div class="row justify-content-center">
        <div class="body">
            <span class="border-line"></span>
            <div class="col-md-4">
            
            <form @submit.prevent="guiYeucau">
                <h2>Đăng ký</h2>
                <div class="mb-3 box-input">
                    <label class="form-label">Email</label>                 
                    <input
                        type="email"
                        id="email"
                        class="form-control"
                        aria-labelledby="email"
                        placeholder="name@example.com"
                        v-model="thongTin.email"
                    />
                    
                    <i></i>
                </div>
                <div class="mb-3 box-input">
                    <label class="form-label">Password</label>                    
                    <input
                        type="password"
                        id="inputPassword6"
                        class="form-control"
                        v-model="thongTin.password"
                    />
                    
                    <i></i>
                </div>
                <div class="mb-3 box-input">
                    <span class="form-label">Số điện thoại</span>                    
                    <input
                        type="tel"
                        id="tel"
                        class="form-control"
                        v-model="thongTin.sdt"
                        placeholder="98+"
                    />
                    
                    <i></i>
                </div>
                <div>
                    <button
                        type="submit"
                        class="btn "
                        v-if="!check"
                        @click="formRegister"
                    >
                        Đăng ký
                    </button>
                <div class="spinner-border" role="status" v-else>
                    <span class="visually-hidden">Loading...</span>
                </div>
                </div>
            </form>
        </div>
        </div>
        
    </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const thongTin = ref({
  email: "",
  password: "",
  sdt: "",
});
const guiYeucau = () => {
  console.log("Thông tin đăng ký:", thongTin.value);
  alert("Yêu cầu đăng ký của bạn đã hoàn thành");
  check.value = true;
  setTimeout(() => {
    router.push({ name: "form.login" });
  }, 2000);
  thongTin.value = {
    email: "",
    password: "",
    sdt: "",
  };
};

const check = ref(false);
</script>