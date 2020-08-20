import { Component, OnInit } from '@angular/core';
import { ITodo} from '../interfaces/itodo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  todoList: ITodo[] = [];

  ngOnInit() {
    this.todoList = this.todoService.getTodos();
  }

}
