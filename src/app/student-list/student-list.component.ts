import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
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
  //method for callin method delete if performed, popup should appear//
  deleteStudent(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteStudent(id).subscribe(data => {
        this.loadStudents()
      })
    }
} 
}
