import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-item',
  templateUrl: './about-item.component.html',
  styleUrls: ['./about-item.component.css'],
})
export class AboutItemComponent implements OnInit {
  @Input() field?: string;
  @Input() fieldValue?: string;

  constructor() {}

  ngOnInit(): void {}
}
