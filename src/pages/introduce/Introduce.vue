<template>
  <div>
    <introduce-header />
    <introduce-comment />
    <introduce-footer />
  </div>
</template>

<script>
import IntroduceHeader from '@/pages/introduce/components/Header'
import IntroduceComment from '@/pages/introduce/components/Comment'
import IntroduceFooter from '@/pages/introduce/components/Footer'
export default {
  name: 'Introduce',
  components: {
    IntroduceHeader,
    IntroduceComment,
    IntroduceFooter
  }
}
</script>
