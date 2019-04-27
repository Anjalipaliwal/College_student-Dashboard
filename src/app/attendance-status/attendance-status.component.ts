import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
@Component({
  selector: 'app-attendance-status',
  templateUrl: './attendance-status.component.html',
  styleUrls: ['./attendance-status.component.css']
})
export class AttendanceStatusComponent implements OnInit {
   //declaring array object for json class of students//
  Students: any = [];
  constructor(public restApi: RestApiService) { }
//invoking method declard in same component for fetching students //
  ngOnInit() {
    this.loadStudents()
  }
  //invoking method declard in common  service  for fetching notifications //
  loadStudents() {
    return this.restApi.getStudents().subscribe((data: {}) => {
      this.Students = data;
    })
  }
}
