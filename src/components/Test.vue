<template>
  <div>
    TEST
    <p>computed msg: {{currentCount}}</p>
    <button @click="increase"></button>
    <input type="text" v-model="inputCounter">
  </div>
</template>

<script>
  import Vue from 'vue';
  import { mapGetters, mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({
        currentCount: state => state.counter.counter
      }),
      ...mapGetters('counter', {
        count: 'currentCount'
      }),
      inputCounter: {
        get () {
          return this.currentCount;
        },
        set (value) {
          this.$store.dispatch('counter/setCounter', value);
        }
      }
    },
    methods: {
      increase () {
        this.$store.dispatch('counter/increase')
      }
    }
  }
</script>

<style scoped>

</style>
