import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: []
})
export class ModalComponent implements OnInit {
  @Input() modal:boolean
  constructor() { }

  ngOnInit() {
    console.log(this.modal)
  }

}
