import Vue from 'vue';
import store from './../../store';

// When the request succeeds
const success = (data) => {
    store.dispatch('updateTask', data.items);
};

// When the request fails
const failed = (context, error) => {
    context.error = error;
};

export default (context, data, value) => {
    return Vue.$http.post('/tasks/editTask/' + data.TaskID, {TaskTag: value}).then((response) => {
            if (response.status === 200) {
                success(response.data);
            }
        })
        .catch((error) => {
            failed(context, error);
        });
};