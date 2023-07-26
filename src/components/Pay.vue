<template>
    <div>
        <div class="grid text-center">
            <h2>Đặt hàng</h2>
            <form @submit.prevent="guiYeuCauDatHang">
                <label for="soDienthoai">Số điện thoại:</label><br>
                <input type="tel" id="soDienthoai" v-model="thongTinDatHang.soDienthoai" required><br>
                <label for="soLuong">Số lượng:</label><br>
                <input type="number" id="soLuong" v-model="thongTinDatHang.soLuong" required><br>
                <label for="diaChiGiaoHang">Địa chỉ giao hàng:</label><br>
                <textarea id="diaChiGiaoHang" v-model="thongTinDatHang.diaChiGiaoHang" required></textarea><br>
                <button type="submit">Đặt hàng</button>
            </form>
        </div>
    </div>
</template>
<script setup>
import {ref} from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const thongTinDatHang = ref({
    soDienthoai:'',
    soLuong:0,
    diaChiGiaoHang:''
})

const guiYeuCauDatHang = () => {
    // Add new order to store
    const newOrder = {
        id: Date.now(),
        name: `Đơn hàng ${Date.now()}`,
        total: thongTinDatHang.value.soLuong * 100
    };
    store.commit('addOrder', newOrder);
    //reset biến thông tin đặt hàng
    thongTinDatHang.value = {
        soDienthoai: '',
        soLuong: 0,
        diaChiGiaoHang: ''
    };
    console.log('Thông tin đặt hàng:', thongTinDatHang.value);
}