import {Todo} from './model/todo';
import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    todos: Array<Todo> = [
        new Todo('learn Angular'),
        new Todo('learn HTML'),
        new Todo('learn JS'),
        new Todo('learn Typescript'),
        new Todo('learn CSS')];

    constructor() {

    }

    completed(): number {
        let compleated = this.todos.filter(todo => todo.completed === true);
        return compleated.length;
    }

    open() {
        return this.todos.length - this.completed();
    }

    addTodo(title: string, completed: boolean = false) {
        let todo = new Todo(title, completed);
        this.todos.push(todo);
    }

    removeTodo(e: Todo) {
        console.log(e)
        this.todos = this.todos.filter((todo) => {
            return todo.title !== e.title
        })
    }

    toggleTodo(e: Todo) {
        this.todos.forEach((todo) => {
            if (todo.title === e.title) todo.completed = !todo.completed
        })
    }
}
