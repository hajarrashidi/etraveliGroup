import Vue from 'vue'
import Vuex from 'vuex'
import api from './apiService'
import filmFactory from './film/filmFactory'
import filmService from './film/filmService'

export const actionTypes = {
  FETCH_FILMS: 'fetchFilms'
}
export const mutationTypes = {
  SET_FILMS: 'setFilms',
  SET_SELECTED_FILM_ID: 'setSelectedFilmId',
  SET_SELECTED_SORT_TYPE: 'setSelectedSortType',
  SET_SEARCH_QUERY: 'setSearchQuery'
}

export const gettersTypes = {
  SELECTED_FILM_INFO: 'selectedFilmInfo',
  SELECTED_SORT_TYPE: 'selectedSortType',
  FILMS: 'films',
  SEARCH_QUERY: 'searchQuery'
}

Vue.use(Vuex)

// This project is small and don't need state, mutation, actions, getttes to be divide into sperate files.
export default new Vuex.Store({
  state: {
    films: [],
    selectedFilmId: null,
    selectedSortType: null,
    searchQuery: null
  },
  mutations: {
    [mutationTypes.SET_FILMS] (state, payload) {
      state.films = payload
    },
    [mutationTypes.SET_SELECTED_FILM_ID] (state, id) {
      state.selectedFilmId = id
    },
    [mutationTypes.SET_SEARCH_QUERY] (state, query) {
      state.searchQuery = query
    },
    [mutationTypes.SET_SELECTED_SORT_TYPE] (state, type) {
      state.selectedSortType = type
    }
  },
  actions: {
    async [actionTypes.FETCH_FILMS] ({ state, commit }) {
      let films = await api.fetchResource(filmService.endpoint, filmFactory.createFilm)
      commit(mutationTypes.SET_FILMS, films)
    }
  },
  getters: {
    [gettersTypes.SELECTED_FILM_INFO] (state) {
      if (state.selectedFilmId != null) {
        return state.films.find(x => x.id === state.selectedFilmId)
      }
    },
    [gettersTypes.SELECTED_SORT_TYPE] (state) {
      return state.selectedSortType
    },
    [gettersTypes.FILMS] (state) {
      let films = {}
      films = state.films.filter(film => {
        if (state.searchQuery != null) {
          return film.title.toLowerCase().includes(state.searchQuery.toLowerCase())
        } else {
          return state.films
        }
      })

      if (state.selectedSortType != null) {
        let type = state.selectedSortType
        films.sort((a, b) => (a[type] > b[type]) ? -1 : ((b[type] > a[type]) ? 1 : 0))
      }

      return films
    },
    [gettersTypes.SEARCH_QUERY] (state) {
      return state.searchQuery
    }
  }
})
