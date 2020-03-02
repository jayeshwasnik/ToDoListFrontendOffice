import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
	 public currentList;
  constructor(private _route:ActivatedRoute,private router:Router,public listService:ListService) { }

  ngOnInit() {
  

let myListId=this._route.snapshot.paramMap.get('listId');
    console.log(myListId);
    this.currentList=this.listService.getListInformation(myListId);


}
}
