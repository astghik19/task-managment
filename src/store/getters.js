/* ============
 * Vuex Getters
 * ============
 *
 * All the getters that can be used
 * inside the store
 */

export const tasks = (state) => state.tasks;
export const last_page = (state) => state.tasks.last_page;
//export const last_page = (state) => {
//    if(state.tasks.list && state.tasks.list.length) {
//        var count = state.tasks.list.length;
//        return  Math.ceil(parseFloat(count / 5));
//    }
//};