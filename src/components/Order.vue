<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-md-4">
                <h3>Danh sách đơn hàng</h3>
                <ul>
                    <li v-for="order in orders" :key="order.id">
                        {{order.name }} - {{ order.total }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref , computed} from 'vue';
const orders = computed(() => this.$store.state.orders);
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
    this.$store.commit('addOrder', newOrder);
    //reset biến thông tin đặt hàng
    thongTinDatHang.value = {
        soDienthoai: '',
        soLuong: 0,
        diaChiGiaoHang: ''
    };
    console.log('Thông tin đặt hàng:', thongTinDatHang.value);
}
</script>

