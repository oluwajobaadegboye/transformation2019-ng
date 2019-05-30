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
      time: '8:00 PM'
    },
    {
      name: 'Take Off Point',
      venue: 'Main Hall',
      time: '8:40 PM'
    },
    {
      name: 'Conference All',
      venue: 'Main Hall',
      time: '10:00 PM'
    }
  ];
  data = [{
    color: '4c66a4',
    mono: 'F',
    date: 'Nov 4',
    name: 'Facebook',
    subj: 'Your weekly page update'
  }, {
    color: '287BBC',
    mono: 'L',
    date: 'Nov 1',
    name: 'LinkedIn',
    subj: 'Michael has endorsed you!'
  }, {
    color: '5185a8',
    mono: 'M',
    date: 'Oct 31',
    name: 'Mobiscroll',
    subj: 'October update'
  }, {
    color: '1a3665',
    mono: 'P',
    date: 'Oct 31',
    name: 'PayPal',
    subj: 'Stay fashionable in the cold with PayPal'
  }, {
    color: 'dd4b39',
    mono: 'G',
    date: 'Oct 28',
    name: 'Google+',
    subj: 'John Doe added you back on Google+'
  }, {
    color: '5185a8',
    mono: 'M',
    date: 'Oct 27',
    name: 'Mobiscroll',
    subj: 'Password reset information'
  }];
 

  remove(index) {
    this.data.splice(index, 1);
  }

  constructor() { }

  ngOnInit() {
  }

  public executeSelectedChange = (event) => {
    console.log(event);
  }

}
