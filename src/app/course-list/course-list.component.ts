import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
 form= new FormGroup(
   { topics: new FormArray([])}
 );
  AddTopic(topic)
  {
    (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
    topic.value = '';
  }

 removeTopic(topic)
 {
   const index = (this.form.get('topics') as FormArray).controls.indexOf(topic);
   (this.form.get('topics') as FormArray).removeAt(index);
 }
}
