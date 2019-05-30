import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  thursdayEventList = [
    {
      name: 'Opening Prayer',
      venue: 'Main Hall',
      time: '8:00PM',
      color: '4c66a4',
      mono: 'O',
    },
    {
      name: 'Take Off Point',
      venue: 'Main Hall',
      time: '8:40PM',
      color: '5185a8',
      mono: 'T',
    },
    {
      name: 'Conference All',
      venue: 'Main Hall',
      time: '10:00PM',
      color: '287BBC',
      mono: 'C',
    }
  ];


  constructor() { }

  ngOnInit() {
  }

  public executeSelectedChange = (event) => {
    console.log(event);
  }

}
