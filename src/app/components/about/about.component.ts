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
      text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut sed expedita, ex, dolores natus eveniet id architecto veritatis',
      iconName:'../../../assets/teamwork.png'
    },{
      title:'Self Confident',
      text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut sed expedita, ex, dolores natus eveniet id architecto veritatis',
      iconName:'../../../assets/self-confident.png'
    },{
      title:'Presenting Skill',
      text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut sed expedita, ex, dolores natus eveniet id architecto veritatis',
      iconName:'../../../assets/teaching.png'
    })
  }

  ngOnInit(): void {}
}
