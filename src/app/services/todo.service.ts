import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/itodo';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  description: string;
  todoId = 1;

  todoList: ITodo [] = [//{ id: 0, description: 'asdfasdf'}
];


  constructor(private modalService: NgbModal) {

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
    const modal = this.modalService.open(ConfirmationModalComponent);
    modal.componentInstance.modalInstance = modal;

    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }

  getTodos(): ITodo[] {
    return this.todoList;
  }
}
