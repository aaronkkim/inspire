(function () {
	// new up the TodoService that has already been configured for your use
	// There are two methods getTodos returns and array
	// saveTodos accepts an array and stores it to your local storage
	var ts = new TodoService
	var vm = new Vue({
		el: '#todo',
		data: {
			toDos: [],
			toDo: '',
			
		},
		methods: {
			submitToDo() {
				this.toDos.push(this.toDo)
				this.toDo = ''
				this.saveToDos()
			},
			removeToDo(index) {
				this.toDos.splice(index, 1)
				
				this.saveToDos()
			},
		
			saveToDos(){
				ts.saveTodos(this.todos)

			}
		}




	})



} ())
