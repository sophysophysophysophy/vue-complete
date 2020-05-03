<template>
  <div>
      <list-item></list-item>
  </div>
</template>

<script>
// 하이오더 컴포넌트에서 사용할 컴포넌트... : ListView
import ListItem from '../components/ListItem'

export default {
    components: {
        ListItem,
    },
    create() {
        console.log('listview!!');
        
    }


}
</script>

<style>

</style>