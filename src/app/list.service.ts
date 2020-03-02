import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
public currentList;

 //for now using demo list for frontend
public allLists=[{
"listName":"jayesh",
"listId":1,
"listItems":[{
	"serialNumber":1,
	"taskName":"Get atta",
	"done":false,
	"other":null
 	},
 	{"serialNumber":2,
	"taskName":"Get dudh",
	"done":false,
	"other":null
	}],
"dateCreated":"2019 october"	
 },
 {
"listName":"sudesh",
"listId":2,
"listItems":[{
	"serialNumber":1,
	"taskName":"Get dahi",
	"done":false,
	"other":null
 	},
 	{"serialNumber":2,
	"taskName":"Get chawal",
	"done":false,
	"other":null
	}],
	"dateCreated":"2019 october"	
 },
 {
"listName":"sudesh",
"listId":3,
"listItems":[{
	"serialNumber":1,
	"taskName":"Get dahi",
	"done":false,
	"other":null
 	},
 	{"serialNumber":2,
	"taskName":"Get chawal",
	"done":false,
	"other":null
	}],
	"dateCreated":"2019 october"	
 },
 {
"listName":"sudesh",
"listId":4,
"listItems":[{
	"serialNumber":1,
	"taskName":"Get dahi",
	"done":false,
	"other":null
 	},
 	{"serialNumber":2,
	"taskName":"Get chawal",
	"done":false,
	"other":null
	}],
	"dateCreated":"2019 october"	
 }
 ];


  constructor() { }

public getAllLists():any{
return this.allLists;
}

public getListInformation(currentListId):any{
  for (let list of this.allLists){
    if(list.listId==currentListId){
      this.currentList=list;

    }

  }
console.log(this.currentList)
return this.currentList;
}



}
