<template>
  <div id="loading-container">
    <div id="loading">
      <img src="./loading.gif" alt="loading">
    </div>
  </div>
</template>
<script>
export default {
  name: "loading"
};
</script>
<style>
#loading-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  background: #ccc;
  z-index: 10000;
}

#loading {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 40px;
  height: 40px;
  margin: -150px 0 0 -150px;
  z-index: 100001;
}
</style>