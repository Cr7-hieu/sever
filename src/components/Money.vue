<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-md-4">
                <h3>Quản lí tiền trong tài khoản</h3>
                <p>Số dư tài khoản: {{ soDu.soDutaikhoan }}$</p>
                <div>
                    <input type="number" v-model="sotien" placeholder="Nhập số tiền">
                    <button class="mb-3" @click="napTien(sotien)">Nạp tiền</button>
                </div>
            </div>
            
            </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const soDu = ref({
    soDutaikhoan:100000
})
const sotien = ref()
const napTien = (sotien)=>{
    soDu.value.soDutaikhoan += parseInt(sotien)
}
</script>
