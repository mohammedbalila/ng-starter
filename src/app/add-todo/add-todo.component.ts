import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo-list/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  todo: Todo = { isDone: false, task: '', name: '' };
  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit() {
  }

  save() {
    this.todoService.addTodo(this.todo).subscribe((response) => {
      this.router.navigate(['/']);
    });
  }

}
