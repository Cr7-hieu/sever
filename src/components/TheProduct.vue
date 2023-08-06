<template>
<div class="row justify-content-center ">
    <div class="box-pro">
        <div class="this-item">
            <div class="pox">
                <img src="../assets/images/iphone-13.png">
            </div>
        </div>
        <div class="this-title">
            <div class="mike">
                <h2>Iphone 13 <br><span>Gen Z</span></h2>
                <h3><sup>$</sup> {{ totalPrice }}<small>.000</small></h3>
            </div>            
            <div v-for="item in items" :key="item.value" >
                <input type="checkbox" :value="item" v-model="selectedItems" >
                {{ item.label }}
            </div>                          
            <button>
                <a href="">
                    <router-link to="/pay">
                        Buy
                    </router-link>
                </a>
            </button>
            
        </div>
    </div>

</div>
</template>
<script setup>
import { ref ,computed} from 'vue'

const items = ref([
  { label: '32Gb', value: '32', price: '10' },
  { label: '64Gb', value: '64', price: '20' },
  { label: '128Gb', value: '128', price: '30' }
])
const selectedItems = ref([])

const totalPrice = computed(() => {
  return selectedItems.value.reduce((total, item) => total + item.price,0)
})
</script>
<style>

</style>