import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  num = 1;
  name = 'assylzhan';
  @ViewChild('userName') userNameRef: ElementRef | undefined;
  values = {
    name: null
  }

  ngOnInit() {
    setTimeout(() => {
      if (this.userNameRef != undefined) {
        this.userNameRef.nativeElement.textContent = this.values?.name;
      }
    }, 2000);
  }

  getVal(val: number) {
    this.num = val;
  }
}
