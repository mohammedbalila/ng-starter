import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  constructor() {
    this.todos = [
      { isDone: false, task: 'Learn ngrx', name: 'NGRX' },
      { isDone: false, task: 'Write unit tests for your app', name: 'Testing' },
    ];
  }

  getTodos(): Observable<Todo[]> {
    return of(this.todos);
  }

  addTodo(todo: Todo): Observable<{}> {
    this.todos.push(todo);
    return of({ message: 'Todo was saved', error: null });
  }
}
