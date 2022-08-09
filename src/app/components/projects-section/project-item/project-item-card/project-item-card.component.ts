import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-project-item-card',
  templateUrl: './project-item-card.component.html',
  styleUrls: ['./project-item-card.component.css']
})
export class ProjectItemCardComponent implements OnInit {
  @Input() title?: string
  @Input() content?: string
  @Input() photo?: string
  @Input() icon?: string

  constructor() { }

  ngOnInit(): void {
  }

}
