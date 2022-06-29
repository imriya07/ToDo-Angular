import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  display:string = "ccc"
  isDisabled:boolean = true;
  todo:string =""
  todoArr:any[] = [];
  isUpdate:boolean = false;
  idxGlobal:number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }
  add(){
    if(this.todo){
    this.todoArr.push(this.todo);
    this.todo="";
    }
    console.log(this.todoArr);

  }
  editTodo(idx:any){
    this.idxGlobal = idx;
    this.todo = this.todoArr[idx];
    this.isUpdate = true;
  }

  updateTodo(){
    this.todoArr[this.idxGlobal] = this.todo;
    this.todo = "";
    this.isUpdate = false;

  }

  upTodo(idx:any){
    let temp = this.todoArr[idx]
    this.todoArr[idx] = this.todoArr[idx-1]
    this.todoArr[idx-1] = temp;

  }

  downTodo(idx:any){
    let temp = this.todoArr[idx]
    this.todoArr[idx] = this.todoArr[idx+1]
    this.todoArr[idx+1] = temp;
  }

  delete(idx:any){
    this.todoArr.splice(idx,1);
  }
  

}
