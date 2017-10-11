import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  constructor(private route: ActivatedRoute, private routerService: Router) { }
year;
month;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.year = +params.get('year');
      this.month = +params.get('month');
      console.log(this.year, this.month);

    });
  }
ViewAll()
{
  this.routerService.navigate(['/']);
}
}
