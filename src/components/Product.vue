<template>
    <div>
        <h1>Danh sách sản phẩm</h1>
        <ul>
            <li v-for="product in fiteredProducts" :key="product.id">
                {{ product.name }}
            </li>
        </ul>
        <p>Số lượng sản phẩm:{{ soLuong }}</p>
        <input type="text" v-model="timKiem" placeholder="Tìm kiếm sản phẩm">
    </div>
</template>
<script setup>
import {computed, ref, watch } from 'vue'
const products = ref([
{ id: 1, name: "Áo phông", category: "Thời trang" },
{ id: 2, name: "Quần jeans", category: "Thời trang" },
{ id: 3, name: "Điện thoại di động", category: "Điện tử" },
{ id: 4, name: "Máy tính xách tay", category: "Điện tử" }
])
const timKiem = ref('')
const fiteredProducts = computed(() =>{
    return products.value.filter(product =>{
        return product.name.toLocaleLowerCase().includes(timKiem.value.toLocaleLowerCase())
    })
})
const soLuong = computed(()=>{
    return fiteredProducts.value.length
})
watch(timKiem,(newVal)=>{
    console.log('tìm kiếm:', newVal)
})
</script>
