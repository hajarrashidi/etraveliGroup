<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <el-row :gutter="12">
        <FilmList></FilmList>
        <FilmInfo></FilmInfo>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import Header from './Header'
import FilmList from './FilmList'
import FilmInfo from './FilmInfo'
import { actionTypes } from '../logic/store'

export default {

  name: 'app',
  components: {
    Header,
    FilmList,
    FilmInfo
  },
  created () {
    this.$store.dispatch(actionTypes.FETCH_FILMS)
  }
}
</script>

<style>
  * {
    font-family: 'Open Sans', sans-serif;
  }
</style>
