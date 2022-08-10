import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  ProjectData,
  ProjectDialogComponent,
} from '../../project-dialog/project-dialog.component';

@Component({
  selector: 'app-project-item-card',
  templateUrl: './project-item-card.component.html',
  styleUrls: ['./project-item-card.component.css'],
})
export class ProjectItemCardComponent implements OnInit {
  @Input() title?: string;
  @Input() content?: string;
  @Input() photo?: string;
  @Input() photoDialog?: string;
  @Input() icon?: string;

  //dialog
  @Input() date?: string;
  @Input() description?: string;
  @Input() technologies?: string;

  projectData: ProjectData = {};
  
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    this.projectData = {
      title: this.title,
      date: this.date,
      description: this.description,
      technologies: this.technologies,
      photo: this.photoDialog
    };
    this.dialog.open(ProjectDialogComponent, {
      data: this.projectData,
    });
  }
}
