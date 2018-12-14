import Vue from 'vue';
import store from './../../store';

// When the request succeeds
const success = (data, context, task) => {
    store.dispatch('deleteTask', task);
};

// When the request fails
const failed = (context, error) => {
    context.error = error;
};

export default (context, data) => {
    return Vue.$http.delete('/tasks/deleteTask/' + data.TaskID).then((response) => {
            if (response.status === 200) {
                success(response.data, context, data);
            }
        })
        .catch((error) => {
            failed(context, error);
        });
};