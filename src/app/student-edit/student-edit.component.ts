import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router ,Params} from '@angular/router';
@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
//declaring array object for student class of json module and id for navigating//
  id = this.actRoute.snapshot.params['id'];
  studentData: any = {};
  constructor(public restApi: RestApiService,
    public actRoute: ActivatedRoute,
public router: Router) { }
 //invoking method declard in same component for updating student details using id params in restapi //
  ngOnInit() {
    this.restApi.getStudent(this.id).subscribe((data: {}) => {
      this.studentData = data;
  }) 

}
//invoking method declard in common  service  for updating details  and navigate to list component after update success//
updateStudent() {
  if(window.confirm('Are you sure, you want to update?')){
    this.restApi.updateStudent(this.id, this.studentData).subscribe(data => {
      this.router.navigate(['/student-list'])
    })
}
}
}
