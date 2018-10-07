<template>
  <div>
    <introduce-header />
    <introduce-comment @showBox='show' />
    <introduce-footer :pv='pv' />
    <model-box @closeBox='close' v-show="showModelBox"/>
  </div>
</template>

<script>
import axios from 'axios'
import IntroduceHeader from '@/components/Header'
import ModelBox from '@/components/ModelBox'
import IntroduceComment from '@/pages/introduce/components/Comment'
import IntroduceFooter from '@/pages/introduce/components/Footer'
export default {
  name: 'Introduce',
  components: {
    IntroduceHeader,
    IntroduceComment,
    IntroduceFooter,
    ModelBox
  },
  data() {
    return {
      pv: 0,
      showModelBox: false
    }
  },
  methods: {
    updatePv() {
      let that = this
      axios.post('/updatePV')
        .then(function(response) {
          that.pv = response.data.pv
        })
        .catch(function(err) {
          console.log(err)
        })
    },
    close() {
      this.showModelBox = false
    },
    show() {
      this.showModelBox = true
    },
  },
  mounted() {
    this.updatePv()
  }
}
</script>
