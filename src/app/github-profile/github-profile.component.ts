import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import 'rxjs/add/Observable/combineLatest';
import {Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private routerService: Router) { }

  ngOnInit() {
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .subscribe(combined => {

    });


    this.route.paramMap.subscribe(paramMap => {
      const id = +paramMap.get('id');
      const username = paramMap.get('username');
      console.log(id);
      console.log(username);
    });

  }

  submit(){
    this.routerService.navigate(['/followers'], {
      queryParams: {page: 1, order: 'newest'}
    });
  }

}
