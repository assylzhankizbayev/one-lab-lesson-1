import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.scss']
})
export class CounterControlsComponent implements OnInit {
  // @Output() decrease = new EventEmitter<number>();
  // @Output() increase = new EventEmitter<number>();
  @Output() changeValue = new EventEmitter<number>();
  count = 1;

  constructor() { }

  ngOnInit(): void {
  }

  dec() {
    this.count--;
    this.changeValue.emit(this.count);
  }

  inc() {
    this.count++;
    this.changeValue.emit(this.count);
  }

}
