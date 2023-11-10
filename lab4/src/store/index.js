import { createStore } from 'vuex'

function checkUn(un, filter){
  for(const key in filter){
    if(filter[key] && filter[key] !== un[key])
      return false
  }
  return true
}
export default createStore({
  state: {
    universities: [
      {
        id: 1,
        name: "Київський національний університет імені Тараса Шевченка",
        address: "м. Київ, вул. Володимирська, 60",
        facultiesCount: 15,
        accreditationLevel: "IV",
        rating: 1
      },
      {
        id: 2,
        name: "Львівський національний університет імені Івана Франка",
        address: "м. Львів, вул. Університетська, 1",
        facultiesCount: 12,
        accreditationLevel: "IV",
        rating: 2
      },
      {
        id: 3,
        name: "Харківський національний університет імені В. Н. Каразіна",
        address: "м. Харків, пл. Свободи, 4",
        facultiesCount: 14,
        accreditationLevel: "IV",
        rating: 3
      },
      {
        id: 4,
        name: "Одеський національний університет імені І. І. Мечникова",
        address: "м. Одеса, вул. Дворянська, 2",
        facultiesCount: 11,
        accreditationLevel: "IV",
        rating: 3
      },
      {
        id: 5,
        name: "Національний технічний університет України «Київський політехнічний інститут»",
        address: "м. Київ, просп. Перемоги, 37",
        facultiesCount: 18,
        accreditationLevel: "IV",
        rating: 4
      },
      {
        id: 6,
        name: "Національний університет «Львівська політехніка»",
        address: "м. Львів, вул. Степана Бандери, 12",
        facultiesCount: 13,
        accreditationLevel: "IV",
        rating: 4
      },
      {
        id: 7,
        name: "Національний авіаційний університет",
        address: "м. Київ, вул. Космонавта Комарова, 1",
        facultiesCount: 9,
        accreditationLevel: "IV",
        rating: 5
      },
      {
        id: 8,
        name: "Таврійський національний університет імені В. І. Вернадського",
        address: "м. Сімферополь, просп. Вернадського, 4",
        facultiesCount: 10,
        accreditationLevel: "IV",
        rating: 6
      }
    ],
    filterObj: {},
  },
  getters: {
    getUn: ({universities, filterObj}) => universities.filter((un) => checkUn(un, filterObj)),
    getUnById: (state) => {
      return (unId) => state.universities.find((un) => un.id == unId)
    },
  },
  mutations: {
    removeUn(state, unId){
      state.universities = state.universities.filter((un) => un.id !== unId)
    },
    addUn(state, un){
      state.universities.push(un)
    },
    updateUn(state, un){
      const unIndex = state.universities.findIndex((uni) => uni.id == un.id);
      state.universities[unIndex] = un;
    },
    updateFilter(state, filter){
      state.filterObj = filter
    }
  },
  actions: {
    deleteUn({commit}, idToRemove){
      commit('removeUn', idToRemove)
    },
    onAddUn({commit}, unObj){
      commit('addUn', {
        id: new Date().getTime(),
        ...unObj
      })
    },
    onUpdateUn({commit}, un){
      commit('updateUn', un)
    },
    onUpdateFilter({commit}, filter){
      commit('updateFilter', filter)
    }
  },
  modules: {
  }
})
