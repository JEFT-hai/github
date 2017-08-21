<template>
  <div>
    <slide-show class="clearfix" :slides="slides" :inv="inv"></slide-show>
    <list :list="list.vue" :listName="Vue"></list>
    <list :list="list.react" :listName="React"></list>
    <list :list="list.node" :listName="Node"></list>
    <list :list="list.others" :listName="others"></list>
  </div>
</template>

<script>
  import slideShow from '../../components/slideShow';
  import list from '../../components/list'
  export default {
     data() {
       return {
           inv: 3000,
           Vue: 'Vue',
           React: 'React',
           Node: 'Node',
           others: 'others',
           slides: [
             {
               src: require('../../assets/response.jpg'),
               title: 'response',
               href: 'detail/analysis'
             },
             {
               src: require('../../assets/react.jpg'),
               title: 'react-gallery',
               href: 'detail/count'
             },
             {
               src: require('../../assets/douban.jpg'),
               title: 'vue2.0-douban',
               href: 'detail/forecast'
             }
            ],
            list: {
              vue: [
                {
                  title: 'eleApp',
                  response: 'Mobile',
                  src: require('../../assets/elemo.jpg'),
                  href: '',
                  link: 'https://github.com/JEFT-hai/vue-eleApp',
                  note: '',
                  summary: '模仿饿了么app'
                },
                {
                  title: 'digital-seller',
                  response: 'PC',
                  src: require('../../assets/digital.jpg'),
                  href: '',
                  link: 'https://github.com/JEFT-hai/vue-digital-seller',
                  note: 'https://github.com/JEFT-hai/vue-digital-seller/blob/master/README.md',
                  summary: '一个数字产品平台'
                },
                {
                  title: 'douban',
                  response: 'PC',
                  src: require('../../assets/douban.jpg'),
                  href: 'https://jeft-hai.github.io/vue2.0-douban/#/',
                  note: 'https://github.com/JEFT-hai/vue2.0-douban/blob/master/README.md',
                  summary: '正在上映的豆瓣电影'
                },
                {
                  title: 'github',
                  response: 'Mobile',
                  src: require('../../assets/github.jpg'),
                  href: 'https://jeft-hai.github.io/vue-github/#/',
                  note: '',
                  summary: '管理个人的github项目'
                },
                {
                  title: 'book city',
                  response: 'PC',
                  src: require('../../assets/reactNews.jpg'),
                  href: '',
                  note: '',
                  summary: '模仿起点书城'
                }
              ],
              react: [
                {
                  title: 'react-gallery',
                  response: 'PC',
                  src: require('../../assets/react.jpg'),
                  href: '',
                  note: 'https://github.com/JEFT-hai/react-gallery/blob/master/README.md',
                  summary: '应用react打造自己的画廊 '
                },
                {
                  title: 'react-news',
                  response: 'PC/Mobile',
                  src: require('../../assets/reactNews.jpg'),
                  href: '',
                  note: 'https://github.com/JEFT-hai/react-news/blob/master/README.md',
                  summary: '打造react新闻列表页'
                }
              ],
              node: [
                {
                  title: 'imooc-movie',
                  response: 'PC',
                  src: require('../../assets/react.jpg'),
                  href: '',
                  note: '',
                  summary: '用node打造电影网站 '
                },
                {
                  title: 'book city',
                  response: 'PC',
                  src: require('../../assets/reactNews.jpg'),
                  href: '',
                  note: '',
                  summary: '模仿起点书城'
                },
                {
                  title: 'wechat',
                  response: 'Mobile',
                  src: require('../../assets/react.jpg'),
                  href: '',
                  note: '',
                  summary: '用node开发微信公众号 '
                },
              ],
              others : [
                {
                  title: 'todo-list',
                  response: 'PC',
                  src: require('../../assets/react.jpg'),
                  href: '',
                  note: '',
                  summary: '用node打造自己的电影网站 '
                },
                {
                  title: 'weixin',
                  response: 'PC',
                  src: require('../../assets/react.jpg'),
                  href: '',
                  note: '',
                  summary: '微信接口开发小程序 '
                }
              ]
            }
        }
     },
     components: {
       slideShow,
       list
     }
  };
</script>

<style >

</style>