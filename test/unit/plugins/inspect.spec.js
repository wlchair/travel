import Vue from 'vue'
import Vuex from '../../../src/js/lib/vuex'
import Inspect from '../../../src/js/plugins/inspect'
import todo from '../../../src/js/store/todo'
Vue.use(Vuex)

describe('inspect > ', () => {
    let store,
        initData = {
            todo: {
                todos: [],
                readOnly: false,
                bar: 'complete'
            }
        },
        completeItem = {
            value: 'one',
            type: 'complete'
        };
    beforeAll(() => {
        store = new Vuex.Store({
            plugins: [Inspect],
            modules:{
                todo
            }
        })
    });
    afterEach(() => {
        store.replaceState(initData)
    });
    it('not locked state, frozen actions', (done) => {
        (async function() {
            await store.dispatch('todo/modifyActions')
            done()
            expect(store.state.todo.readOnly).toEqual(true);
            
        }())
    });
    it('locked state, frozen actions', (done) => {
        (async function() {
            await store.dispatch('todo/modifyActions')
            await store.dispatch('todo/modifyActions')
            done()
            expect(store.state.todo.readOnly).toEqual(false)
            
        }())
    });
    it('locked state, not frozen actions', (done) => {
        (async function() {
            await store.dispatch('todo/modifyActions')
            await store.dispatch('todo/newTodo', completeItem)
            done()
            expect(store.state.todo.todos.length).toEqual(0)
            
        }())
    });

});