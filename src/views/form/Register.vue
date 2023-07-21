<template>
    <div>
        <h3>Đăng ký</h3>
        <form @submit.prevent="guiYeucau" v-if="showRegister">
            <div class="mb-3">
                <div class="col-auto">
                    <label for="email" class="col-form-label">Email</label>
                </div>
                <div class="col-auto">
                    <input type="email" id="email" class="form-control" aria-labelledby="email" placeholder="name@example.com"
                    v-model="thongTin.email"
                    >
                </div>
            </div>

            <div class="mb-3">
                <div class="col-auto">
                    <label for="inputPassword6" class="col-form-label">Password</label>
                </div>
                <div class="col-auto">
                    <input type="password" id="inputPassword6" class="form-control" aria-labelledby="passwordHelpInline"
                    v-model="thongTin.password"
                    >
                </div>
            </div>
            
            <div class="mb-3">
                <div class="col-auto">
                    <label for="number" class="col-form-label">Số điện thoại</label>
                </div>
                <div class="col-auto">
                    <input type="tel" id="tel" class="form-control" aria-labelledby="tel" v-model="thongTin.sdt" placeholder="98+">
                </div>
            </div>
            <button type="submit" class="btn btn-primary"  v-if="!formRegister">Đăng ký </button>
            
        </form>
    </div>
</template>
<script setup>
import {ref} from 'vue'
const thongTin = ref({
    email:'',
    password:'',
    sdt:''
})
const guiYeucau = () =>{
console.log('Thông tin đăng ký:',thongTin.value)
alert('Yêu cầu đăng ký của bạn đã hoàn thành')
thongTin.value = {
    email:'',
    password:'',
    sdt:''
}
}
const showRegister = ref(true)
const formRegister = ref(true)
function register(){
    formRegister.value = !formRegister.value
}

</script>