<template>
    <div class="">
        <div  class="is-date">
            <h2>Lịch giao hàng</h2>
            <div class="this-transfer">
                <button @click="nextMonth">&lt;</button>
                <h3>{{ currentMonth }}</h3>
                <button @click="nextMonth">&gt;</button>
            </div>
            <table>
                <thead>
                    <tr v-for="day in daysOfweek" :key="day">{{ day }}</tr>
                </thead>
                <tbody>
                    <tr v-for="week in calendar" :key="week">
                        <td v-for="date in week" :key="date">
                            <div :class="{ selected: isDateSelected(date),
                                today: isToday(date) }" @click="selectDate(date)">
                                <span>{{ date.getDate() }}</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h3>Ngày đã chọn</h3>
            <p>{{ selectedDate }}</p>
            <div>
                <h1>Ngày giao hàng:{{ delivaryDate }}</h1>
                <button @click="updateDeliveryDate">Cập nhật ngày giao hàng</button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed, ref } from 'vue';
const today = new Date();
const selectedDate = ref(null);
const deliveryDate = computed(() => {
    return selectedDate.value
        ? selectedDate.value.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        })
        : '';
});
const currentMonth = ref(
    today.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
);
const daysOfweek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const calendar = computed(() => {
    return buildCalendar(today.getFullYear(), today.getMonth());
});
function buildCalendar(year, month) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - startDate.getDate());
    const endDate = new Date(lastDay);
    endDate.setDate(endDate.getDate() + (6 - endDate.getDate()));
    const calendar = [];
    while (startDate <= endDate) {
        const week = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(startDate);
            week.push(date);
            startDate.setDate(startDate.getDate() + 1);
        }
        calendar.push(week);
    }
    return calendar;
}
function nextMonth() {
    const currentMonthDate = new Date(currentMonth.value);
    currentMonthDate.setMonth(currentMonthDate.getMonth() + 1);
    currentMonth.value = currentMonthDate.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
    });
}

function selectDate(date) {
    selectedDate.value = date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });
}

function isDateSelected(date) {
    return (
        selectedDate.value &&
        date.toDateString() === new Date(selectedDate.value).toDateString()
    );
}

function isToday(date) {
    return date.toDateString() === today.toDateString();
}

function updateDeliveryDate() {
    if (selectedDate.value) {
        selectedDate.value = new Date(selectedDate.value).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });
        deliveryDate.value = selectedDate.value;
    }
}
</script>