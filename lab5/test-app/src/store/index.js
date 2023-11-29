import { createStore } from 'vuex'

export default createStore({
  state: {
    clients: [
      {
        id: 1,
        name: 'Іван',
        email: 'ivan@expl.com',
        tel: '0000000000',
        pass: '56'
      },
      {
        id: 2,
        name: 'Вася',
        email: 'vasya@expl.com',
        tel: '111111111',
        pass: '46'
      },
    ],

    client: {
      name: null,
      email: null,
      tel: null,
      pass: null
    },

    lessons: [
      { id: 1, name: 'Українська мова' },
      { id: 2, name: 'Математика' },
      { id: 3, name: 'Географія' },
      { id: 4, name: 'Історія' },
      { id: 5, name: 'Хімія' },
      { id: 6, name: 'Фізика' },
    ],

    teachers: [
      { id: 1, name: 'Іван Федорович' },
      { id: 2, name: 'Іван Іванович' },
      { id: 3, name: 'Анастасія Євгеніївна' },
      { id: 4, name: 'Мирослава Михайлівна' },
      { id: 5, name: 'Олеся Мирославівна' },
      { id: 6, name: 'Ольга Леонідівна' },
    ],

    selectedTeachers: {},
  },
  getters: {
    getClients: (state) => state.clients,
    getClient: (state) => state.client,
    getLessons: (state) => state.lessons,
    getTeachers: (state) => state.teachers,
    getLessonById: (state) => (lessonId) => {
      return state.lessons.find((lesson) => lesson.id === parseInt(lessonId));
    },
    getSelectedTeachers: (state) => state.selectedTeachers,
  },
  mutations: {
    addClient(state, cl){
      state.clients.push(cl)
    },
    signAddClient(state, cl){
      state.client.name = cl.name
      state.client.email = cl.email
      state.client.tel = cl.tel
      state.client.pass = cl.pass
    },
    deleteClient(state) {
      state.client.name = null
      state.client.email = null
      state.client.tel = null
      state.client.pass = null
    },
  },
  actions: {
    onAddClient({commit}, clObj){
      commit('addClient', {
        id: new Date().getTime(),
        ...clObj
      })
    },
    onAddSignClient({commit}, clObj){
      commit('signAddClient', {
        ...clObj
      })
    },
    onDeleteClient({commit}) {
      commit('deleteClient', {})
    },
  },
  modules: {
  }
})
