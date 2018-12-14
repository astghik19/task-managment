import store from './../../store';

export default (context, count) => {
    store.dispatch('changePageCount', count);
};