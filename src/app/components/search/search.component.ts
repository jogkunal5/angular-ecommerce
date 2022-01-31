import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  doSearch(value: string) {
    // Route the data to our "search" route. It will be handled by ProductListComponent
    // Calling {path:'search/:keyword', component:ProductListComponent}
    this.router.navigateByUrl(`/search/${encodeURIComponent(value)}`);

  }

}
