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
import { ref, computed} from 'vue';
const orders = ref([
  { id: 1, name: 'Đơn hàng 1', total: 100 },
  { id: 2, name: 'Đơn hàng 2', total: 200 },
  { id: 3, name: 'Đơn hàng 3', total: 300 }
]);

</script>

