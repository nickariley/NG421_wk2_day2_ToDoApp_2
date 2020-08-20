import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ITodo } from '../interfaces/itodo';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  todoList: ITodo[];
  todoDescription: string;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoList = this.todoService.getTodos();
    this.todoDescription = this.todoService.description;
  }

  createTodo() {
    this.todoService.addTodo(this.todoDescription);
    this.todoDescription = '';
  }

}
