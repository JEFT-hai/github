<template>
  <div>
      <div class="list-title">{{listName}}</div>
      <div class="list-item border-1px" v-for="item in list">
        <div class="cover clearfix">
          <img :src="item.src" :alt="item.title" />
        </div>
        <div class="info">
          <h2>{{item.title}}</h2>
          <div class="summary">简介：{{item.summary}}</div>
          <div class="button-wrapper">
            <a v-if="item.href" :href="item.href" class="button">demo</a>
            <a v-else="item.href" :href="item.link" class="button">code</a>
            <a v-if="item.note" :href="item.note" class="button">note</a>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    props: {
      list: {
        type: Array
      },
      listName: String
    }
  };
</script>

<style scoped>
a {
	display: block;
}
.list-title {
	height: 40px;
	line-height: 40px;
	font-size: 20px;
	border-left: 5px solid #127834;
	padding-left: 20px;
}
.list-item {
    padding: 15px;
    overflow: hidden;
}

.cover {
    float: left;
	width: 110px;
	height: 150px;
	overflow: hidden;
}
.cover img{
	width: 100%;
	height: 100%;
	border-radius: 1px;
}
.info {
	margin-left: 125px;
}
.info h2{
    padding: 15px 0;
	font-size: 24px;
	font-weight: normal;
}
.info .summary {
	color: #333;
}

.border-1px {
	position: relative;
}
.border-1px:after {
    border-top: 1px solid #bfbfbf;
    content: ' ';
    display: block;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    -webkit-transform-origin: left top;
}
@media (-webkit-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5){
    .border-1px:after {
      -webkit-transform: scaleY(.7);
      transform: scaleY(.7);
    }
}
  
@media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2) {
    .border-1px:after{
      -webkit-transform: scaleY(.5);
      transform: scaleY(.5);
    }
}
.button-wrapper {
    margin-top: 35px;
	color: #127878;
}
.button-wrapper a {
    display: inline-block;
	overflow: hidden;
}
.button {
	text-align: center;
	margin-left: 15px;
	padding: 5px 6px;
	border: 1px solid #129934;
	border-radius: 5px;
	background: #129934;
	color: #fff;
}
</style>
