import axios from 'axios';
import { simulateQuery } from '@/tools';

export default {
    state: {
        users: [],
        filterUsers: []
    },

    mutations: {
        SET_USERS(state, data) {
            state.users = data;
        },

        FILTERED_USERS(state, data) {
            state.filterUsers = data;
        }
    },

    actions: {
        async FETCH_USERS({commit}) {
            await axios.get('https://randomuser.me/api/?results=10')
            .then(({ data }) => {
                commit('SET_USERS', data.results);
            })
            .catch((e) => {
                throw new Error(e)
            });
        },

        DELETE_CARD({commit, state}, id) {
            try {
                simulateQuery(() => {
                    const users = JSON.parse(JSON.stringify(state.users));
                    users.splice(id, 1);
                    commit('SET_USERS', users);
                });
            } catch (e) {
                throw new Error(e)
            }
        },

        CHANGE_CARD({commit, state}, [object, id]) {
            try {
                simulateQuery(() => {
                    const users = JSON.parse(JSON.stringify(state.users));
                    users[id] = object;
                    commit('SET_USERS', users);
                })
            } catch (e) {
                throw new Error(e)
            }
        },

        CREATE_NEW_USER({commit, state}, data) {
            try {
                simulateQuery(() => {
                    const users = JSON.parse(JSON.stringify(state.users));
                    users.unshift(data);
                    commit('SET_USERS', users);
                });
            } catch (e) {
                throw new Error(e)
            }
        },

        SEARCH_BY_NAME({commit, state}, result) {
            try {
                simulateQuery(() => {
                    const users = JSON.parse(JSON.stringify(state.users));
                    const filteredUsers = users.filter((el) => ~el.name.first.toLowerCase().indexOf(result.toLowerCase()));
                    commit('FILTERED_USERS', filteredUsers);
                });
            } catch (e) {
                throw new Error(e);
            }
        }
    },
}
