import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-item',
  templateUrl: './skills-item.component.html',
  styleUrls: ['./skills-item.component.css']
})
export class SkillsItemComponent implements OnInit {
  @Input() skill?: string;
  @Input() skillPercent?: number;
  constructor() { }

  ngOnInit(): void {
  }

}
