import Vue from 'vue';
import store from './../../store';

// When the request succeeds
const success = (data) => {
    store.dispatch('getTasks', data.items);
};

// When the request fails
const failed = (context, error) => {
    context.error = error;
};

export default (context) => {
    return Vue.$http.get('/tasks/getAllTasks?paginat=0').then((response) => {
            if (response.status === 200) {
                success(response.data);
            }
        })
        .catch((error) => {
            failed(context, error);
        });
};