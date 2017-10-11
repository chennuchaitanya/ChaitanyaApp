import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers: any[];
  private url= 'https://api.github.com/users/mosh-hamedani/followers';
  constructor(private http: Http, private route: ActivatedRoute) { }

  ngOnInit()
  {
    this.route.queryParamMap.subscribe(params => {
      const page = +params.get('page');
      const order = params.get('order');
      console.log(page, order);
    });
    this.http.get(this.url)
    .subscribe(followers => {
        this.followers = followers.json();
    });

  }
}
