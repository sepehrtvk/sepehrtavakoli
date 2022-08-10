import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface ProjectData {
  title?: string;
  date?: string;
  description?: string;
  technologies?: string;
  photo?: string;
}

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.css']
})
export class ProjectDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ProjectData) { }

  ngOnInit(): void {
  }

}
