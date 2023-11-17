import { Component, Input } from '@angular/core';
import { Faculty } from 'Faculty';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent {
  @Input() faculty!: Faculty[];

  get faculties(){
    return this.faculty;
  }
}
