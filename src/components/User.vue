<template>
    <div>
        <div class="card">
            <label class="avatar"></label>
            <label class="info">
                <span class="info-1">{{ user.name }}</span>
                <span class="info-2">{{ user.email }}</span>
            </label>
            <div class="content-1">
                <p>Tiểu sử: {{ user.bio }}</p>
            </div>
            <div class="content-2">
                <p>Số tiền hiện có: {{ user.balance }}</p>
            </div>
</div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const user = ref({
  name: 'John Doe',
  age: 30,
  email: 'johndoe@example.com',
  bio: 'Tôi là một nhà phát triển web',
  balance: '$100.00'
});

</script>
<style>
.card{
    width: 300px;
    height: 300px;
    border-radius: 44px;
    background: lightgray;
    background: linear-gradient(145deg, #ff6b6b, #d43636);
    box-shadow: 2px 3px 3px #ba2f2f,2px 3px 3px #ff4949 ;
}
.avatar{
    width: 100px;
    height: 70px;
    display: inline-block;
    background-color: rgba(255,255,255,0.9);
    margin: 0 15px 10px 15px;
    border-radius: 50%;
}
.info{
    display: inline-block;
    vertical-align: top;
    margin-top: 15px;
    width: 170px;
}
.info-1, .info-2{
    display: inline-block;
    height: 50px;
    width: 100%;
    border-radius: 6px;
    background: rgba(255,255,255,0.9);
}
.info-1{
    height: 30px;
    width: 75%;
    border-radius: 12px;
    margin-bottom:10px ;
    text-align: center;
}
.info-2{
    height: 30px;
    width: 100%;
    border-radius: 12px;
}
.content-1{
    width: 90%;
    border-radius: 12px;
    background: rgba(255,255,255,0.9);
    height: 40px;
    margin: 10px 0 5px 0;
}
.content-2{
    width: 60%;
    border-radius: 6px;
    background: rgba(255,255,255,0.9);
    height: 20px;
    margin: 10px 0 5px 20px;
}
</style>