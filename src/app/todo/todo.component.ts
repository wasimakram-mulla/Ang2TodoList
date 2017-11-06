import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  taskNm: string;
  tasks: Task[] = new Array();
  completedTasks: Task[] = new Array();
  taskRemovedFlag: boolean;
  taskAddFlag: boolean;
  constructor() {
    //console.log('test');
  }

  ngOnInit() {
    //console.log('To Do Component Initialized');
  }

  addTask() {
    let vm = this;
    var tmpObj = {
      title: this.taskNm,
      completed: false
    };
    this.taskAddFlag = true;
    setTimeout(function(){
      vm.taskAddFlag = false;
    },3000);
    this.tasks.unshift(tmpObj);
    this.taskNm = null;
    //console.log(this.taskNm);
  }

  closeTask(index){
    let vm = this;
    this.tasks.splice(index,1);
    this.taskRemovedFlag = true;
    setTimeout(function(){
      vm.taskRemovedFlag = false;
    },3000);
  }

  changeTaskStatus(task, index){
    console.log("Test")
    task.completed = !task.completed;
    if(task.completed == false){
      this.tasks.push(this.completedTasks.splice(index, 1)[0]);
    }else{
      this.completedTasks.push(this.tasks.splice(index, 1)[0]);
    }
  }
}

interface Task {
  title: string,
  completed: boolean
}