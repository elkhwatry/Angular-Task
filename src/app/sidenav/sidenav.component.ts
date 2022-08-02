import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Input() sideNavStatus: boolean= false;
  list =[
    {
      number:'1',
      name:'home',
      icon:'bx bx-home-alt-2'
    },
    {
      number:'2',
      name:'About Us',
      icon:'bx bx-error-alt'
    },
    {
      number:'3',
      name:'Contact Us',
      icon:'bx bx-message-rounded'
    },
    {
      number:'4',
      name:'Help',
      icon:'bx bx-help-circle'
    },
    {
      number:'5',
      name:'Logout',
      icon:'bx bx-log-out-circle'
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
