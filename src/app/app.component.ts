import { Component } from '@angular/core';
import { Todo } from './todo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Unit_8_Angular_Todo_Lab';

  todoList : Todo[] = [
    {task:"This assignment", completed:false},
    {task:"Procrastinating", completed:true},
    {task:"Walk dog", completed:false},
    {task:"Dishes", completed:false},
    {task:"Check mail", completed:true}

  ];
  newTask : Todo = {task:"", completed:false};

  completeTask(index : number) : void {
    this.todoList[index].completed = true;
  }

  addTask() : void {
    if (this.newTask.task.trim() != "")
      this.todoList.push(this.newTask);
    this.newTask = {task:"", completed:false};
  }
  deleteTask(index : number) : void {
    this.todoList.splice(index, 1);
  }
}


