<template>
    <div class="row justify-content-center">
        <div class="col-md-4">
            <h3>Đăng ký</h3>
        <form @submit.prevent="guiYeucau">
            <div class="mb-3">               
                    <label for="email" class="form-label">Email</label>                               
                    <input type="email" id="email" class="form-control" aria-labelledby="email" placeholder="name@example.com"  v-model="thongTin.email" >                                                
            </div>
            <div class="mb-3">                
                    <label for="inputPassword6" class="form-label">Password</label>                              
                    <input type="password" id="inputPassword6" class="form-control" v-model="thongTin.password" >                                                     
            </div>            
            <div class="mb-3">                
                    <label for="number" class="form-label">Số điện thoại</label>               
                    <input type="tel" id="tel" class="form-control"  v-model="thongTin.sdt" placeholder="98+">                
            </div>
            <div>
                <button type="submit" class="btn btn-primary"  v-if="!check" @click="formRegister">Đăng ký </button> 
                <div class="spinner-border" role="status" v-else>
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>                      
        </form>
        </div>
        
    </div>
</template>
<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router';

const router = useRouter()
const thongTin = ref({
    email:'',
    password:'',
    sdt:''
})
const guiYeucau = () =>{
console.log('Thông tin đăng ký:',thongTin.value)
alert('Yêu cầu đăng ký của bạn đã hoàn thành')
 check.value = true
  setTimeout(() => {
    router.push({name: 'form.login'})
  }, 2000)
thongTin.value = {
    email:'',
    password:'',
    sdt:''
}
}

const check = ref(false)

</script>