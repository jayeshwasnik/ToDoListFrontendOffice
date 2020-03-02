import { Component, OnInit } from '@angular/core';

import{ListService} from './../../list.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

public allLists;

  constructor(public listService: ListService) { }

  ngOnInit() {
    // this.allLists = this.listService.getAllLists().subscribe(
    //   data => {
    //     console.log(data);
    //     this.allLists = data["data"];
    //   },
    //   error => {
    //     console.log("error");
    //     console.log(error.errorMessage);
    //   }
    // );
    // console.log(this.allLists);

    this.allLists=this.listService.getAllLists();
    console.log(this.allLists)
  }

  }


