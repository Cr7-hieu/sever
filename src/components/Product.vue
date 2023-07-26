<template>
  <div class="grid text-center">
    <div>
      <ul>
        <li v-for="product in filteredProducts" :key="product.id">
          {{ product.name }}
          <button @click="addToCart(product)">Thêm vào giỏ hàng</button>
        </li>
      </ul>
      <div>
        <h2>Giỏ hàng</h2>
        <ul>
          <li v-for="item in cartItems" :key="item.id">
            {{ item.product.name }} - {{ item.quantity }}
          </li>
        </ul>
        <div>
          <button v-if="!check" @click="checkout">Thanh toán</button>
          <div v-else class="loader">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, watch } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
// Danh sách sản phẩm
const products = ref([
  { id: 1, name: "Sản phẩm A", price: 10 },
  { id: 2, name: "Sản phẩm B", price: 20 },
  { id: 3, name: "Sản phẩm C", price: 30 },
]);
// Giỏ hàng
const cartItems = ref([]);
// Từ khóa tìm kiếm
const searchKeyword = ref("");
// Thêm sản phẩm vào giỏ hàng
const addToCart = (product) => {
    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
    const existingItem = cartItems.value.find(
    (item) => item.product.id === product.id
    );
    if (existingItem) {
    // Nếu sản phẩm đã tồn tại, tăng số lượng lên 1
    existingItem.quantity++;
    } else {
    // Nếu sản phẩm chưa tồn tại, thêm mới vào giỏ hàng
    cartItems.value.push({ product, quantity: 1 });
    }
};
// Tính tổng số lượng sản phẩm trong giỏ hàng
const totalQuantity = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.quantity, 0);
});

// Lọc và tìm kiếm sản phẩm dựa trên từ khóa
const filteredProducts = computed(() => {
    return products.value.filter((product) =>
    product.name.toLowerCase().includes(searchKeyword.value.toLowerCase())
    );
});

// Theo dõi sự thay đổi của từ khóa tìm kiếm
watch(searchKeyword, () => {
    console.log("Từ khóa tìm kiếm đã thay đổi:", searchKeyword.value);
});
const check = ref(false);

// Xử lý thanh toán
const checkout = () => {
    // Xử lý logic thanh toán ở đây
    check.value = true;
    setTimeout(() => {
    router.push({ name: "card.pay" });
    }, 2000);
    // Xóa các sản phẩm trong giỏ hàng sau khi thanh toán
    cartItems.value = [];
};
</script>