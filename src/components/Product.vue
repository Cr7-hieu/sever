<template>
    <div>
        <h1>Danh sách sản phẩm</h1>
        <div class="search">
            <input class="search-item" type="text" v-model="searchQuery" placeholder="Tìm kiếm sản phẩm">
            
        </div>
        <div>
                <p v-if="isSearching">Đang tìm kiếm...</p>
                <p v-else class="sum-product">Tổng số lượng sản phẩm: {{ totalCount }}</p>
            </div>  
        <div class="product">
            <ul class="item">
                <li v-for="product in filteredProducts" :key="product.id" >
                    {{ product.name }} - {{ product.price }}đ <br>
                    <button @click="addToCart(product)" class="btn-buy">Chọn mua</button>
                </li>
            </ul>
                    
        </div > 
        <div class="cart">
            <h2>Giỏ hàng</h2>
            <ul class="item">
                <li v-for="item in cart" :key="item.id" >
                    {{ item.name }} - {{ item.price }}đ
                </li>
                <li  v-if="cart && cart.length === 0">Giỏ hàng trống</li>
            </ul>            
        </div>            
        <div class="buy">
            <p>Tổng giá tiền: {{ totalAmount }}đ</p>
            <button v-if="cart.length > 0" @click="checkout" class="is-buy">Thanh toán</button>
        </div>     
        
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import axios from 'axios'
const products = ref([
    { id: 1, name: "Áo phông", category: "Thời trang", price: 100000 },
    { id: 2, name: "Quần jeans", category: "Thời trang", price: 200000 },
    { id: 3, name: "Điện thoại di động", category: "Điện tử", price: 5000000 },
    { id: 4, name: "Máy tính xách tay", category: "Điện tử", price: 10000000 }
])
const searchQuery = ref('')
const isSearching = ref(false)

const filteredProducts = computed(() =>{
    isSearching.value = searchQuery.value !== ''
    return products.value.filter(product =>{
        return product.name.toLocaleUpperCase().includes(searchQuery.value.toLocaleUpperCase())
    })
})
const totalCount = computed(() =>{
    return filteredProducts.value.length
})
const cart = ref([])
const addToCart = (product) =>{
    cart.value.push(product)
}
const totalAmount = computed(() =>{
    return cart.value.reduce((total, item) => total + item.price,0)
})


const checkout = () => {
    const order = {
        products: cart.value,
        totalAmount: totalAmount.value
    }
    
    axios.post('/api/checkout', order)
        .then(response => {
            console.log('Đã thanh toán thành công:', response.data)

            // Xóa các sản phẩm đã thanh toán khỏi giỏ hàng
            cart.value = cart.value.filter(item => !order.products.includes(item))
        })
        .catch(error => {
            console.error('Lỗi khi thanh toán:', error)
            

        })
}


watch(()=>searchQuery,(newVal)=>{
    console.log('tìm kiếm:', newVal)
})

</script>
