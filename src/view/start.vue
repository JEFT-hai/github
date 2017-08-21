<template>
    <div class="start">
      <div  class="userinfo">
        <img class="userinfo-avatar" src="../assets/avator.png" />
        <div class="userinfo-nickname"><span class="icon-github"></span>徐海超</div>
      </div>
      <router-link to="/index">
        <div class="enter">
          <div>进入</div>
        </div>
      </router-link>
   </div>
</template>

<script>
  export default {
      mounted() {
        setTimeout(()=>{
            this.$router.push({path: '/index'})
        },3000)
      }
  };
</script>

<style scoped>
.start {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
	width: 100%;
	background:#b3d5db;
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 100px;
  height: 100px;
  margin: 80px;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #444;
  font-size: 18px;
  font-weight: 
}
a {
	text-decoration: none;
}
.icon-github {
	padding-right: 20px;
	color: #000;
}
.enter {
  margin: 150px auto 0 ;
  width: 100px;
  height: 40px;
  border: 1px solid #405f80;
  border-radius: 5px;
  text-align: center;
  font-size: 12px;
  line-height: 40px;
  font-weight: bold;
  color: #405f80;
}
</style>

