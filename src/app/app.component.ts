import { Component } from '@angular/core';
import { Student } from 'Student';
import { Faculty } from 'Faculty';
import { StudentComponent } from './student/student.component';
import { FacultyComponent } from './faculty/faculty.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'management-university-system';

  student: Student[]=[{name:"", regno:"", phone:0}];

  // student: Student[] = [
  //   {name:"Siddharth", regno: "23MCA1069", phone:8825353912},
  //   {name:"Piyush", regno: "23MCA1104", phone:9759279757},
  //   {name:"Utkarsh", regno: "23MCA1090", phone:4526309404}];

    addStudent(name:string, regno: string, phone: string){
      let y = +phone
      this.student.push({name, regno, phone:y});
    }

    get students(){
      return this.student;
    }

    faculty: Faculty[]=[{name:"", regno:"", phone:0}];

    // faculty: Faculty[] = [
    //   {name:"Saleena", regno: "hkja73", phone:7625353912},
    //   {name:"Tulasi", regno: "23Mfjio04", phone:9742879757},
    //   {name:"Madhe", regno: "23MCA1090", phone:4526309404}];

      addFaculty(name:string, regno: string, phone: string){
        let z = +phone;
        this.faculty.push({name, regno, phone: z});
      }

      get faculties(){
        return this.faculty;
      }
}
