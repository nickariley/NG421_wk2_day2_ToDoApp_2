import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/itodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  description: string;
  todoId = 1;

  todoList: ITodo [] = [//{ id: 0, description: 'asdfasdf'}
];


  constructor() {

   }

  addTodo(description: string): void {
    this.todoList.push({
      id: this.todoId,
      description
    });
    this.description = '';
    this.todoId++;
  }
  deleteTodo(todo: ITodo) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }

  getTodos(): ITodo[] {
    return this.todoList;
  }
}
