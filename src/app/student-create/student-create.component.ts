import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";
@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  //giving input  for creating details using paras in json to padd values to list component//
  @Input() studentDetails = { name: '', email: '', phone: 0 }
  constructor(public restApi: RestApiService, 
    public router: Router) { }

  ngOnInit() {
  }
  //invoking method for addign student details in common service and navigate to list component after add succes//
  addStudent(dataEmployee) {
    this.restApi.createStudent(this.studentDetails).subscribe((data: {}) => {
      this.router.navigate(['/student-list'])
    })
}

}
