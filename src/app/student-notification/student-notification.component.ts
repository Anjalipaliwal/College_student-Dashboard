import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
@Component({
  selector: 'app-student-notification',
  templateUrl: './student-notification.component.html',
  styleUrls: ['./student-notification.component.css']
})
export class StudentNotificationComponent implements OnInit {
  //declaring array object for json class of notifications//
Notification:any=[];
  constructor(public restApi: RestApiService) { }
//invoking method declard in same component for fetching notifications //
  ngOnInit() {
    this.loadNotifications()
  }
  //invoking method declard in common  service  for fetching notifications //
  loadNotifications() {
    return this.restApi.getNotifications().subscribe((data: {}) => {
      this.Notification = data;
    })
  }
 
}
