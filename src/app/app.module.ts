import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { AddStudentComponent } from './student-entry/src/app/student-entry/add-student/add-student.component';
import { ListStudentComponent } from './student-entry/src/app/student-entry/list-student/list-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    AddStudentComponent,
    ListStudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
