<template>
  <div class="modelBoxWrapper">
    <div class="modelBox">
      <div style="position:absolute; top:-92px; right: 2px;cursor: pointer;" @click="$emit('closeBox')">X</div>
      <div>
        提交成功
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModelBox',
}
</script>

<style scoped>
.modelBoxWrapper {
  z-index: 99;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2a28278a;
}
.modelBox {
  position: relative;
  line-height: 200px;
  text-align: center;
  background-color: #a9bfd5;
  width: 300px;
  height: 200px;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
</style>


