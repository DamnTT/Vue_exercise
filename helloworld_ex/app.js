var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})


//继续在console输入 app3.seen = false，你会发现之前显示的消息消失了。
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})


//在console輸入app4.todos.push({text:'新項目'})
//去新稱項目
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: '學習 JavaScript' },
      { text: '學習 Vue' },
      { text: '整個年度' }
    ]
  }
})
//注意在 reverseMessage 方法中，我們更新了應用的狀態，但沒有觸碰 DOM——所有的 DOM 操作都由 Vue 來處理，你編寫的代碼只需要關注邏輯層面即可。
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})
Vue.component('todo-item', {
  props:['todo'],
  template: '<li> {{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})