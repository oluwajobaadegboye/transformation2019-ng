import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/AuthenticationService';
import { User, LoggedUser, Schedule } from '../models/model';
import { ScheduleService } from '../services/ScheduleService';

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

  thurScheduleList: Schedule[] = [  
    {  
       "id":1,
       "day":"THU",
       "time":"4.00– 5:00 PM",
       "topic":"Arrival",
       "preacher":null,
       "venue":"Conference Venue"
    },
    {  
       "id":2,
       "day":"THU",
       "time":"5.00 – 5.30 PM",
       "topic":"Check in/tour of facility",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":3,
       "day":"THU",
       "time":"5.45 – 6.15 PM",
       "topic":"Welcome and Life in the Camp",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":4,
       "day":"THU",
       "time":"6.15 – 6.30 PM",
       "topic":"Worship",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":5,
       "day":"THU",
       "time":"6.30 – 7.30 PM",
       "topic":"Sermon 1: Embracing Heaven’s Transformation Agenda",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":6,
       "day":"THU",
       "time":"7.30 – 8.00 PM",
       "topic":"Enforcing Heaven’s Transformation Agenda",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":7,
       "day":"THU",
       "time":"8.00 PM",
       "topic":"Ice breaker/Dinner",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":8,
       "day":"THU",
       "time":"9.00 PM",
       "topic":"To your tent O Israel",
       "preacher":null,
       "venue":"Main Hall"
    }
 ];
  FriScheduleList: Schedule[] = [  
    {  
       "id":9,
       "day":"FRI",
       "time":"6.00 - 6.30 AM",
       "topic":"Morning Devotion",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":10,
       "day":"FRI",
       "time":"7.30 – 8.30 AM",
       "topic":"Breakfast",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":11,
       "day":"FRI",
       "time":"8.30 - 9.00 AM",
       "topic":"Open our eyes O Lord (Prayer)",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":12,
       "day":"FRI",
       "time":"9.00 – 9.30 AM",
       "topic":"Praise and worship",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":13,
       "day":"FRI",
       "time":"9.30 – 10.30 AM",
       "topic":"Sermon 2: Transformation: Changed from the Inside Out!",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":14,
       "day":"FRI",
       "time":"10.30 - 12.30 PM",
       "topic":"Interactive/Discussion Session: LGBTQ Culture Shift: What to know and How to respond NEWLINE Break-out Group Discussion (30 mins) NEWLINE Presentations (1hr) NEWLINE Summary (30 mins)",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":15,
       "day":"FRI",
       "time":"12.30 - 1.30 PM",
       "topic":"Lunch",
       "preacher":null,
       "venue":"Lunch Hall"
    },
    {  
       "id":16,
       "day":"FRI",
       "time":"01.30 - 3.30 PM",
       "topic":"Recreation",
       "preacher":null,
       "venue":"Lunch Hall"
    },
    {  
       "id":17,
       "day":"FRI",
       "time":"03.30 – 3.45 PM",
       "topic":"Transform us O Lord (Prayer)",
       "preacher":null,
       "venue":"Sport Complex"
    },
    {  
       "id":18,
       "day":"FRI",
       "time":"03.45 - 4.00 PM",
       "topic":"Worship",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":19,
       "day":"FRI",
       "time":"04.00 - 06.00 PM",
       "topic":"Rapid Fire Sessions",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":20,
       "day":"FRI",
       "time":"04.00 - 06.00 PM",
       "topic":"Rapid Fire Sessions NEWLINE Goal setting and Personal Organization (15mins) NEWLINE Scholarship applications (15mins) NEWLINE Success in college (15mins) NEWLINE Resume writing (15mins) NEWLINE Interviewing Skills and Tips (15mins) NEWLINE Creating a Business Plan/Generating business ideas/IT (15mins) NEWLINE Q&A (30mins)",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":21,
       "day":"FRI",
       "time":"6.30 – 7.30 PM",
       "topic":"Dinner",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":22,
       "day":"FRI",
       "time":"7.30 – 7.45 PM",
       "topic":"Worship",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":23,
       "day":"FRI",
       "time":"7.45 – 8.45 PM",
       "topic":"Sermon 3: Apologetics Corner: A Transformed Worldview",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":24,
       "day":"FRI",
       "time":"8.45 – 11.00 PM",
       "topic":"Evening Vigil - Commanding Transformation over Strategic Territory (Body, Mind, Career, Marriage etc.)",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":25,
       "day":"FRI",
       "time":"11.00 PM",
       "topic":"To your tent O Israel",
       "preacher":null,
       "venue":"Main Hall"
    }
 ];
  SatScheduleList: Schedule[] = [  
    {  
       "id":26,
       "day":"SAT",
       "time":"7.30 - 08.30 AM",
       "topic":"Morning Devotion",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":27,
       "day":"SAT",
       "time":"8.30 – 09.30 AM",
       "topic":"Breakfast",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":28,
       "day":"SAT",
       "time":"9.30 – 09.45 AM",
       "topic":"Praise and worship",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":29,
       "day":"SAT",
       "time":"9.45 – 10.45 AM",
       "topic":"Sermon 4: The Biblical Blueprint for a Transformational Marriage Experience",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":30,
       "day":"SAT",
       "time":"10.45 – 12.30 PM",
       "topic":"Battle Zone Breakout Session NEWLINE Brothers: Before you think of popping the question NEWLINE Sisters: Before you think of saying I do ",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":31,
       "day":"SAT",
       "time":"12.30 – 1.00 PM",
       "topic":"The Marriage Agenda: Tying it all together – Summary/Questions",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":32,
       "day":"SAT",
       "time":"01.00 – 2.00 PM",
       "topic":"Lunch",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":33,
       "day":"SAT",
       "time":"02.00 - 3.30 PM",
       "topic":"Recreation",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":34,
       "day":"SAT",
       "time":"03.30 – 3.45 PM",
       "topic":"Purify my heart (Prayer)",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":35,
       "day":"SAT",
       "time":"03.45 - 4.00 PM",
       "topic":"Worship",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":36,
       "day":"SAT",
       "time":"4.00 – 5.00 PM",
       "topic":"Sermon 5: Transplanted Hearts, Transformed Nature!",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":37,
       "day":"SAT",
       "time":"5.15 – 6.30 PM",
       "topic":"General Q & A",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":38,
       "day":"SAT",
       "time":"6.30 – 7.30 PM",
       "topic":"Dinner",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":39,
       "day":"SAT",
       "time":"7.30 – 9.00 PM",
       "topic":"Testimony & Worship Night",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":40,
       "day":"SAT",
       "time":"9.00 – 9.30 PM",
       "topic":"Prayer/power ministration",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":41,
       "day":"SAT",
       "time":"9.30 PM",
       "topic":"To your tent O Israel",
       "preacher":null,
       "venue":"Main Hall"
    }
 ];
  SunScheduleList: Schedule[] = [  
    {  
       "id":42,
       "day":"SUN",
       "time":"6.00 - 06.30 AM",
       "topic":"Morning Devotion",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":43,
       "day":"SUN",
       "time":"7.30 - 08.00 AM",
       "topic":"Lord Prepare Me (Prayers)",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":44,
       "day":"SUN",
       "time":"8.00 – 08.30 AM",
       "topic":"Praise and worship",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":45,
       "day":"SUN",
       "time":"08.30 – 09.30 AM",
       "topic":"Sermon 6: Igniting the Holy Spirit’s Transforming Fire",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":46,
       "day":"SUN",
       "time":"9.30 – 09.45 AM",
       "topic":"Worship/Choir",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":47,
       "day":"SUN",
       "time":"9.45 – 10.00 AM",
       "topic":"Appreciations",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":48,
       "day":"SUN",
       "time":"10.00 – 11.00 AM",
       "topic":"Sermon 7: The Transformers: Dynamic, Dangerous and Decisive!",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":49,
       "day":"SUN",
       "time":"1.00 – 11.15 AM",
       "topic":"Closing prayers/Adjourn",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":50,
       "day":"SUN",
       "time":"11.15 – 11.40 AM",
       "topic":"Transformed Pictures",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":51,
       "day":"SUN",
       "time":"11.45 – 12.30 PM",
       "topic":"BRUNCH",
       "preacher":null,
       "venue":"Main Hall"
    },
    {  
       "id":52,
       "day":"SUN",
       "time":"12.30 PM",
       "topic":"Departure",
       "preacher":null,
       "venue":"Main Hall"
    }
 ];
  currentUser: LoggedUser;
  userName = '';

  constructor(private authService: AuthenticationService,
    private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
    this.userName = this.currentUser ? this.currentUser.name.toUpperCase() : '';

    // this.scheduleService.getAll()
    //   .subscribe(
    //     data => {
    //       console.log('Sch ',data[4].schedules)
    //       this.thurScheduleList = data[3].schedules;
    //       this.FriScheduleList = data[4].schedules;
    //       this.SatScheduleList = data[5].schedules;
    //       this.SunScheduleList = data[6].schedules;
    //     },
    //     error => {
    //       console.log('Cannot retrieve schedule from the backend');
    //     });
  }

  public executeSelectedChange = (event) => {
    console.log(event);
  }

}
