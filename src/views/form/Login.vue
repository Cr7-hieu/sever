<template>
  <div class="row justify-content-center">
    <div class="box">
      <span class="borderline"></span>
      <form @submit.prevent="submitFrom" autocomplete="off">
        <h2>Sign in</h2>
        <div class="inputbox">
          <input
            type="text"
            required="required"
            :class="{ 'is-invalid': error.email }"
            v-model="form.email"
          />
          <span class="form-label">User name</span>
          <div class="invalid-feedback" v-if="error.email">
            {{ error.email }}
          </div>
          <i></i>
        </div>
        <div class="inputbox">
          <input
            type="password"
            required="required"
            class="form-control"
            :class="{ 'is-invalid': error.password }"
            v-model="form.password"
          />
          <div class="invalid-feedback" v-if="error.password">
            {{ error.password }}
          </div>
          <span class="form-label">Password</span>
          <i></i>
        </div>
        <div class="link">
          <a href="#">Bạn chưa có tài khoản</a>
          <a href="#"
            ><router-link :to="{ name: 'form.register' }"
              >Đăng ký</router-link
            ></a
          >
        </div>       
          <button
            v-if="!checkLogin"
            class="btn "
            type="submit"
            @click="submitFrom"
          >
            Login
          </button>
          <div class="spinner-border" role="status" v-else>
            <span class="visually-hidden">Loading...</span>
          </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const form = reactive({
  email: "",
  password: "",
});
const checkLogin = ref(false);

function login() {
  checkLogin.value = true;
  setTimeout(() => {
    router.push({ name: "home" });
  }, 2000);
}

const error = reactive({
  email: "",
  password: "",
});

function submitFrom() {
  error.email = "";
  error.password = "";
  if (!form.email) {
    error.email = "Vui lòng nhập email";
  } else if (!checkMail(form.email)) {
    error.email = "vui lòng nhập địa chỉ email hợp lệ";
  }
  if (!form.password) {
    error.password = "Vui lòng nhập mật khẩu";
  } else if (!checkPassword(form.password)) {
    error.password = " vui lòng nhập mật khẩu hợp lệ";
  }
  if (!error.email && !error.password) {
    login();
  }
}

function checkMail(email) {
  const regex = /^\S+@[a-zA-Z0-9-]+\.\S+$/g;

  return regex.test(email);
}

function checkPassword(password) {
  return password.length >= 8;
}
</script>
