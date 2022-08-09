import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ido-item',
  templateUrl: './ido-item.component.html',
  styleUrls: ['./ido-item.component.css']
})
export class IdoItemComponent implements OnInit {
  @Input() title?: string
  @Input() content?: string
  @Input() icon?: string

  constructor() { }

  ngOnInit(): void {
  }

}
