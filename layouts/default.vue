<template>
  <div>
    <button @click="onClick">点击</button>
    <!-- <div v-if="message === 'qwer'">
      {{reversedMessage}} -->
      <nuxt/>
      <TabBar/>
    <!-- </div> -->
    <!-- <div v-else-if="message === 'asdf'">
      {{reversedMessage}}
      <RegisterFirstStep/>
    </div> -->
  </div>
  
</template>

<script>
import TabBar from '~/components/common/tabBar.vue'
import RegisterFirstStep from '~/pages/login/registerFirstStep.vue'

export default {
  components: {
    TabBar,
    RegisterFirstStep
  },
  data () {
    return {
      tag: 1,
      cc: null,
      message: 'asdf'
    }
  },
  mounted () {
  },
  computed: {
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message
    }
  },
  methods: {
    onClick: function () {
      if (this.message === 'asdf') {
        this.message = 'qwer'
      } else {
        this.message = 'asdf'
      }
    }
  }
}
</script>

<style>
</style>
