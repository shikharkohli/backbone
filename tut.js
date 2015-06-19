 $(document).ready(function() {

     var app = {};

     app.Todo = Backbone.Model.extend({
         defaults: {
             title: 'My task',
             completed: false
         }
     });

     app.TodoList = Backbone.Collection.extend({
         model: app.Todo,
         localStorage: new Store("backbone-todo")
     });


     app.TodoView = Backbone.View.extend({
         el: $("#default"),
         tagName: 'li',
         events: {
          "click li": 'triggerx'
         },
         triggerx: function(){alert("triggered");},
         template: _.template($("#item-template").html()),
         render: function() {
             this.$el.html(this.template(this.model.toJSON()));
         }

     })

     var todoList = new app.TodoList();

     var todo = new app.Todo();
     todo.set({
         title: 'My task'
     });

     var view = new app.TodoView({
         model: todo
     });
     view.render();
 });