import { createStore } from 'vuex';

export default createStore({
    state() {
        return {
            orders: [
                { id: 1, name: 'Đơn hàng 1', total: 100 },
                { id: 2, name: 'Đơn hàng 2', total: 200 },
                { id: 3, name: 'Đơn hàng 3', total: 300 }
            ]
        }
    },
    mutations: {
        addOrder(state, order) {
            state.orders.push(order);
        }
    }
});

