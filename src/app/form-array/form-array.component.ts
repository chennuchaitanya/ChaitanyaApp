import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent {
  form= new FormGroup({
    topics: new FormArray([])
   } );

   addTopic(topic: HTMLInputElement){
      (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
      topic.value = '';
   }

   remove(topic: FormControl){
     const index = (this.form.get('topics') as FormArray).controls.indexOf(topic);
     (this.form.get('topics') as FormArray).removeAt(index);
   }
}
