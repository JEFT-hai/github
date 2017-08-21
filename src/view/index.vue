<template>
  <div>
    <my-nav :name="name"></my-nav>
    <div class="main">
        <router-view></router-view>
    </div>
    <div class="tab">
        <div class="tab-item" @click="title('github')" >
            <router-link :to="{path: 'github'}">
               <span class="icon icon-github"></span>
               <div>github</div>
            </router-link>
        </div>
        <div class="tab-item" @click="title('note')">
            <router-link :to="{path: 'note'}">
               <span class="icon icon-note"></span>
               <div>note</div>
            </router-link>
        </div>
        <div class="tab-item" @click="title('myself')">
            <router-link :to="{path: 'self'}">
               <span class="icon icon-self"></span>
               <div>myself</div>
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>
import nav from '../components/nav'
export default {
    data() {
      return {
        name: 'github'
      }
    },
    methods: {
      title(attr){
        this.name = attr;
      }
    },
    components: {
      myNav: nav
    }
}
</script>

<style>
.main {
  margin-top: 50px;
  margin-bottom: 60px;
}
.tab {
  display:flex;
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 60px;
  bottom: 0;
  background: #fff;
  border-top: 1px solid #ccc;
}
.tab-item {
  flex: 1;
  padding-top: 10px;
  text-align: center;
}
.router-link-active {
  color: #000;
}
</style>
