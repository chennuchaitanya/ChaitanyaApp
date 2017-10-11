import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {
categoryNames= [
  {id: 1, Name: 'Art'},
  {id: 2, Name: 'development'},
  {id: 3, Name: 'studies'}
];

create(f)
{
  console.log(f);
}
  constructor() { }

  ngOnInit() {
  }

}
