import Vue from 'vue';
import store from './../../store';

// When the request succeeds
const success = (data) => {
    store.dispatch('createTask', data.items);
};

// When the request fails
const failed = (context, error) => {
    context.error = error;
};

export default (context, data) => {
    return Vue.$http.post('/tasks/createTask', data).then((response) => {
            if (response.status === 200) {
                success(response.data);
            }
        })
        .catch((error) => {
            failed(context, error);
        });
};