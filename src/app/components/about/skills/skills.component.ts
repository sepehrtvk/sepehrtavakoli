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
        skill:'Python',
        skillPercent:80
      },{
        skill:'Java',
        skillPercent:50
      },{
        skill:'Python',
        skillPercent:90
      },{
        skill:'Python',
        skillPercent:90
      },{
        skill:'Python',
        skillPercent:90
      }
    )
  }

  ngOnInit(): void {
  }
}
