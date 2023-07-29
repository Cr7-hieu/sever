<template>
  <div class="row justify-content-center">
    <div class="col-md-4">
      <form @submit.prevent="submitFrom" autocomplete="off">
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input class="form-control" :class="{'is-invalid': error.email}" type="text" v-model="form.email">
          <div class="invalid-feedback" v-if="error.email">{{ error.email }}</div>
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input class="form-control" :class="{'is-invalid': error.password}" type="password" v-model="form.password">
          <div class="invalid-feedback" v-if="error.password">{{ error.password }}</div>
        </div>
        <div class="mb-3">
          <button v-if="!checkLogin"
              class="btn btn-primary" type="submit" @click="submitFrom">Login</button>
          <div class="spinner-border" role="status" v-else>
            <span class="visually-hidden">Loading...</span>
          </div>
          <div>
            <p>Bạn chưa có tài khoản</p>
            <router-link :to="{name:'form.register'}">Đăng ký</router-link>
          </div>
        </div>
      </form>
    </div>
  </div>

</template>
<script setup>
import {reactive, ref} from 'vue'
import {useRouter} from 'vue-router';

const router = useRouter()

const form = reactive({
  email: '',
  password: '',
})
const checkLogin = ref(false)

function login() {
  checkLogin.value = true
  setTimeout(() => {
    router.push({name: 'home'})
  }, 2000)

}

const error = reactive({
  email: '',
  password: '',
})

function submitFrom() {
  error.email = "";
  error.password = "";
  if (!form.email) {
    error.email = 'Vui lòng nhập email';
  } else if (!checkMail(form.email)) {
    error.email = 'vui lòng nhập địa chỉ email hợp lệ';
  }
  if (!form.password) {
    error.password = 'Vui lòng nhập mật khẩu';
  } else if (!checkPassword(form.password)) {
    error.password = ' vui lòng nhập mật khẩu hợp lệ';
  }
  if (!error.email && !error.password) {
    login()
  }
}

function checkMail(email) {
  const regex = /^\S+@[a-zA-Z0-9-]+\.\S+$/g;

  return regex.test(email)
}

function checkPassword(password) {
  return password.length >= 8
}

</script>
