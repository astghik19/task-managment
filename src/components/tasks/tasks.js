import taskService from './../../services/task';
import store from './../../store/index';

export default {
    name: 'Tasks',
    data() {
        return {
            activeAddModal: false,
            activeEditModal: false,
            activeDeleteModal: false,
            per_page: 5,
            current_page: 1,
            selectedItem: {},
            value: null,
            word: null
        }
    },
    computed: {
        tasks: function () {
            return this.$store.state.tasks.list;
        },
        last_page: function () {
            return this.$store.state.tasks.last_page;
            //return store.getters.last_page;
        },
        listView: function () {
            var word = this.word;
            var current_page = this.current_page;
            var per_page = this.per_page;
            var paginateResult = {};
            if(word) {
                var searchResult =  this.tasks.filter(function (item) {
                    return  item.TaskID.toString().indexOf(word) > -1 || item.TaskTag.toLowerCase().indexOf(word) > -1;
                });
                taskService.changePageCount(this, searchResult.length);
                if(this.current_page > this.last_page ) {
                    this.current_page = 1;
                }
                paginateResult = this.paginate(searchResult, this.current_page, per_page);
                return paginateResult;
            }else {
                paginateResult = this.paginate(this.tasks, this.current_page, per_page);
                if(paginateResult && paginateResult.length == 0 && this.current_page > 1) {
                    this.current_page = this.current_page - 1;
                    paginateResult = this.paginate(this.tasks, this.current_page, per_page);
                }
                taskService.changePageCount(this, this.tasks.length);
                return paginateResult;
            }

        }
    },
    methods: {
        addModal() {
            this.value = null;
            this.activeAddModal = true;
        },
        onAddNewTask(value) {
            if(value) {
                taskService.addTask(this, {TaskTag: value});
            }
        },
        onUpdateTask (value) {
            if(value) {
                taskService.updateTask(this, this.selectedItem, value);
            }
        },
        editModal(task) {
            this.selectedItem = task;
            this.value = task.TaskTag;
            this.activeEditModal = true;
        },
        deleteConfirmModal(task) {
            this.selectedItem = task;
            this.activeDeleteModal = true;
        },
        onConfirmDelete () {
            taskService.deleteTask(this, this.selectedItem);
        },
        changePage (n) {
            this.current_page = n;
        },
        inlineUpdate(e, task) {
            if(e.target.value) {
                taskService.updateTask(this, task, e.target.value);
            }
        },
        paginate(tasks, current_page, per_page) {
            return tasks.filter(function (item, index) {
                if(index >= (current_page-1) * per_page && index < (current_page * per_page)) {
                    return true;
                }
            });
        }
    }
}