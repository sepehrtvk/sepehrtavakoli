import { Component, OnInit } from '@angular/core';

interface AboutMe {
  field: string;
  fieldValue: string;
}

interface BigSkill {
  title: string;
  text: string;
  iconName: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  aboutMe: AboutMe[] = [];
  bigSkills: BigSkill[] = [];


  constructor() {
    this.aboutMe.push(
      {
        field: 'Name',
        fieldValue: 'Sepehr Tavakoli',
      },
      {
        field: 'Birthday',
        fieldValue: '80/03/13',
      },
      {
        field: 'Job',
        fieldValue: 'Developer',
      },
      {
        field: 'Email',
        fieldValue: 'Sepehrtvk2001@gmail.com',
      },
      {
        field: 'Phone',
        fieldValue: '+989359262884',
      },
      {
        field: 'Location',
        fieldValue: 'Tehran, Iran',
      }
    );

    this.bigSkills.push({
      title:'Team Work',
      text:'I love team work and contribute with other people in my team.',
      iconName:'../../../assets/teamwork.png'
    },{
      title:'Self Confident',
      text:'Every line of code that I write, has to work properly! this is my passion.',
      iconName:'../../../assets/self-confident.png'
    },{
      title:'Presenting Skill',
      text:'Iam good at presenting and teaching to others what i know.',
      iconName:'../../../assets/teaching.png'
    })
  }

  ngOnInit(): void {}
}
