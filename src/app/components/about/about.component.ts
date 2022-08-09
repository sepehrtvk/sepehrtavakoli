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
      title:'Development',
      text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut sed expedita, ex, dolores natus eveniet id architecto veritatis',
      iconName:'../../../assets/code.png'
    },{
      title:'Development',
      text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut sed expedita, ex, dolores natus eveniet id architecto veritatis',
      iconName:'../../../assets/coding.png'
    },{
      title:'Development',
      text:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut sed expedita, ex, dolores natus eveniet id architecto veritatis',
      iconName:'../../../assets/coding.png'
    })
  }

  ngOnInit(): void {}
}
