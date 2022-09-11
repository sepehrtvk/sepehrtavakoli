import { Component, OnInit } from '@angular/core';

interface Skill {
  skill: string
  skillPercent: number
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})


export class SkillsComponent implements OnInit {
  mySkills:Skill[] = [];
  constructor() {
    this.mySkills.push(
      {
        skill:'Angular Js',
        skillPercent:80
      },{
        skill:'React Js',
        skillPercent:90
      },{
        skill:'Python',
        skillPercent:60
      },{
        skill:'HTML-CSS',
        skillPercent:90
      },{
        skill:'Typescript',
        skillPercent:50
      }
    )
  }

  ngOnInit(): void {
  }
}
