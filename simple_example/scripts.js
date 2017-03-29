/*var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date()
  }
});
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
});
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
});
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
});
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
});

Vue.component('todo-item', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});
var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { text: 'Vegetables' },
      { text: 'Cheese' },
      { text: 'Whatever else humans are supposed to eat' }
    ]
  }
});

var app8 = new Vue({
	  el: '#app-8',
	  data: {
	    selected: 'A',
	    options: [
	      { text: 'One', value: 'A' },
	      { text: 'Two', value: 'B' },
	      { text: 'Three', value: 'C' }
	    ]
	  }
	});

//register Component
Vue.component('my-component', {
  template: '<div>A custom component!</div>'
})
// create a root instance
new Vue({
  el: '#example'
})


new Vue({
  el: '#demo',
  data: {
    show: true
  }
})
*/
// AJAX
var v = new Vue({
    el:'#app',
    data:{
      appName:'Teams',
      items:[]
    },
    created: function() {
    	this.add();
    },
    methods:{
      add:function(){
        
          var self = this;
          $.getJSON('data.json').then(function(res){
            var newPeople = [];
            res.results.forEach(function(itm){
              newPeople.push(itm);
            });
            
            self.items = newPeople;
            
          },function(err){
            console.log('no data');
          })
        
      }
    }
    
  })

/*
var ItemsVue = new Vue({
    el: '#itemlist',
    data: {
        items: []
    },
    created: function() {
    	this.fetchData();
    },
    methods: { 
    	fetchData: function() {
    		this.$http.get('data/data.json', function (data) {
                console.log(data.results);
                this.items = data.results;
            });
    	}
    }
});*/

/*
var subreddit = Vue.component('ajax',{
	el: '#itemlist',
	props: ['name'],

	data: function () {
		return { posts: [] }
	},

	created: function(){
	    this.$http.get('data/data.json')
	    .then(function(resp){
	        this.posts=resp.results;
	    });
	}
});*/
