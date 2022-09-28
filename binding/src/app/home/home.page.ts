import { Component } from '@angular/core';

interface Person{
id:number,
name: string
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public name:string = "Juan";
  people:Person[]=[];
  id:number=0;
  constructor() {}


  addPerson(n:string){
    this.people.push({id:this.id++,name:n});
    this.name=""
  }


  removePerson(id:number){


    var index = this.people.findIndex(p=>p.id==id);

    if(index>=0){

      this.people.splice(index,1);

    }

  }

}
