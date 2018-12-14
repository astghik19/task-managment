/* ============
 * Vuex Actions
 * ============
 *
 * All the actions that can be used
 * inside the store
 */

import * as types from './mutation-types';

// Tasks
export const getTasks = ({ commit }, tasks) => {
    commit(types.GET_TASKS, tasks);
};

export const updateTask = ({ commit }, task) => {
    commit(types.UPDATE_TASK, task);
};

export const createTask = ({ commit }, task) => {
    commit(types.CREATE_TASK, task);
};

export const deleteTask = ({ commit }, task) => {
    commit(types.DELETE_TASK, task);
};

export const changePageCount = ({ commit }, count) => {
    commit(types.CHANGE_PAGE_COUNT, count);
};
