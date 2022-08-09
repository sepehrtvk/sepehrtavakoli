import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-set',
  templateUrl: './icon-set.component.html',
  styleUrls: ['./icon-set.component.css']
})
export class IconSetComponent implements OnInit {
  @Input() align ?: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

}
