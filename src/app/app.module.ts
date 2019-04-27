import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentNotificationComponent } from './student-notification/student-notification.component';
import { AttendanceStatusComponent } from './attendance-status/attendance-status.component';



@NgModule({
  declarations: [
   AppComponent,
   StudentCreateComponent,
   StudentListComponent,
   StudentEditComponent,
   StudentNotificationComponent,
   AttendanceStatusComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
 
})
export class AppModule { }