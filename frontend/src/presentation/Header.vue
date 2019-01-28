<template>
  <div class="header">
    <el-row :gutter="12">
      <el-col :span="4">
        <el-select placeholder="Sort by..." class="select" :value="selectedSortType" @input="setSortType">
          <el-option
            v-for="item in sortTypes"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            @change="sortBy(item.value)"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="20">
        <el-input
          placeholder="Type to search..."
          prefix-icon="el-icon-search"
          class="search"
          :value="searchQuery"
          @input="setSearchQuery">
        </el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import filmService from '../logic/film/filmService'
import { gettersTypes, mutationTypes } from '../logic/store'

export default {
  methods: {
    setSearchQuery (e) {
      this.$store.commit(mutationTypes.SET_SEARCH_QUERY, e)
    },
    setSortType (e) {
      this.$store.commit(mutationTypes.SET_SELECTED_SORT_TYPE, e)
    }
  },
  computed: {
    selectedSortType () {
      return this.$store.getters[gettersTypes.SELECTED_SORT_TYPE]
    },
    sortTypes () {
      return filmService.sortTypes
    },
    searchQuery () {
      return this.$store.getters[gettersTypes.SEARCH_QUERY]
    }
  }
}
</script>

<style scoped>
  .header {
    padding: 12px;
  }
  .select {
    width: 100%;
  }
</style>
