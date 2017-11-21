import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {Todo} from "../model/todo";

@Component({
    selector: 'todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {


    todos: Array<Todo> = [
        new Todo('Learn HTML'),
        new Todo('Learn CSS'),
        new Todo('Learn JS'),
        new Todo('Learn Typescript'),
        new Todo('Learn Angular')];

    constructor() {

    }


    ngOnInit() {

    }

    completed(): number {
        return this.todos.filter(todo=>todo.completed===true).length
    }

    open() {
        return this.todos.filter(todo=>todo.completed===false).length;
    }

    addTodo(title: string, completed: boolean = false) {
        let todo:Todo = new Todo(title);
        this. todos.push(todo);

    }

    removeTodo(e: Todo) {
        this.todos = this.todos.filter(todo=>todo.title!==e.title);
    }

    toggleTodo(e: Todo) {
      this.todos.forEach(todo=>{if (e.title===todo.title) todo.completed= !todo.completed})
    }

}
