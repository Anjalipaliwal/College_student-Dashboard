import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentNotificationComponent } from './student-notification/student-notification.component';
import { AttendanceStatusComponent } from './attendance-status/attendance-status.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'student-create' },
  { path: 'student-create', component: StudentCreateComponent },
  { path: 'student-list', component: StudentListComponent },
{ path: 'student-edit/:id', component: StudentEditComponent } ,
{ path: 'student-notification', component: StudentNotificationComponent },
{ path: 'attendance-status', component: AttendanceStatusComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
