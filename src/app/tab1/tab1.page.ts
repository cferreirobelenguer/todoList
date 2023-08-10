import { Component } from '@angular/core';
import {TodoItem} from './todoItem';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public data:string = "";
  public todoData: TodoItem[] = [];
  public selectedIndex: number | null = null;
  constructor(
  ) {}
  public handleChange = (event: any) => {
    this.data = event.target.value;
    const newItem: TodoItem = {
      isFinish: false,
      data: this.data
    };
    this.todoData.push (newItem);
  }

  public labelClick = (index: number) => {
    this.todoData[index].isFinish = true;
  }
}
