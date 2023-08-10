import { Component, OnInit } from '@angular/core';
import {TodoItem} from './todoItem';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public data:string = "";
  public todoData: TodoItem[] = [];
  public localStorageData :TodoItem[] = [];
  public selectedIndex: number | null = null;
  constructor(
  ) {}

  ngOnInit(): void {
    const storedValue = localStorage.getItem('key');
    //put data in the localStorage
    if (storedValue !== null) {
      this.localStorageData = JSON.parse(storedValue)
    }
    
  }
  public handleChange = (event: any) => {
    //input data
    this.data = event.target.value;
    const newItem: TodoItem = {
      isFinish: false,
      data: this.data
    };
    this.localStorageData.push (newItem);
    //put the changes in the localStorage
    localStorage.setItem("key", JSON.stringify(this.localStorageData));
    const storedValue = localStorage.getItem('key');
    if (storedValue !== null) {
      this.localStorageData = JSON.parse(storedValue)
    }
  }

  public labelClick = (index: number) => {
    //when the user press the event, the task finished
    this.localStorageData[index].isFinish = true;
  }
}
