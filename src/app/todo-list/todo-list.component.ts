import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { TodoService } from './todo.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todos: Todo[];
  todosDataSource = new MatTableDataSource<Todo>();
  displayedColumns: string[] = ['id', 'name', 'task', 'completed'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  // tslint:disable-next-line
  _getTodos: Subscription;
  constructor() { }

  ngOnInit() {
    this.todosDataSource.data = this.todos;
    this.todosDataSource.paginator = this.paginator;
  }

}
