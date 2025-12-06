import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = []; // []
  //public todos: any[]; // undefined
  public title: String = 'Minhas Tarefas';
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });

    this.todos.push(new Todo(1, 'passear com o cachorro', false));
    this.todos.push(new Todo(2, 'ir ao supermercado', false));
    this.todos.push(new Todo(3, 'cortar o cabelo', true));
    // this.todos.push('passear com o cachorro');
    // this.todos.push('ir ao supermercado');
    // this.todos.push('cortar o cabelo');
    // this.todos.push(1996);
    // this.todos.push({message:'teste'});
    // this.todos.push(new Date());
  }

  // alteraTexto(){
  //   this.title = 'Teste';
  // }

  add() {
    // this.form.value => { title: 'Titulo'} - JSON
    const title = this.form.controls['title'].value;
    const id = this.todos.length + 1;
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  markAsDone(todo: Todo) {
    todo.done = true;
  }

  markAsUndone(todo: Todo) {
    todo.done = false;
  }
}
