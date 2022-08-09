import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-skill',
  templateUrl: './big-skill.component.html',
  styleUrls: ['./big-skill.component.css'],
})
export class BigSkillComponent implements OnInit {
  @Input() iconName?: string;
  @Input() text?: string;
  @Input() title?: string;

  constructor() {}

  ngOnInit(): void {}
}
