<template>
  <div class="nav">{{name}}</div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String
      }
    }
  };
</script>

<style>
.nav {
  height: 50px;
  line-height: 50px;
  width: 100%;
  text-align: center;
  position: fixed;
  z-index: 100;
  top: 0;
  background: #000;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  overflow: hidden;
}
</style>