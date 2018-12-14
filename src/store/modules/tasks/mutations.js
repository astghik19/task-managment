import {
    GET_TASKS,
    UPDATE_TASK,
    CREATE_TASK,
    DELETE_TASK,
    CHANGE_PAGE_COUNT,
} from './../../mutation-types';

export default {
    [GET_TASKS](state, tasks) {
        state.list = tasks;
        var count = state.list.length;
        state.last_page = Math.ceil(parseFloat(count / 5));
    },
    [UPDATE_TASK](state, task) {
        var foundIndex = state.list.findIndex(x => x.TaskID == task.TaskID);
        state.list[foundIndex].TaskTag = task.TaskTag;
    },
    [CREATE_TASK](state, task) {
        state.list.push(task);
        var count = state.list.length;
        state.last_page = Math.ceil(parseFloat(count / 5));
    },
    [DELETE_TASK](state, task) {
        state.list.splice(state.list.indexOf(task), 1);
        var count = state.list.length;
        state.last_page = Math.ceil(parseFloat(count / 5));
    },
    [CHANGE_PAGE_COUNT](state, count) {
        state.last_page = Math.ceil(parseFloat(count / 5));
    },
};
