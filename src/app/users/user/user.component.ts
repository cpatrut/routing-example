import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {CustomServiceService} from "../custom-service.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnDestroy {

  user: {id: number, name: string, activated ?: boolean,};

  constructor(private route:ActivatedRoute,private customService:CustomServiceService) {

  }

  ngOnInit() {
    this.user={
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name']
    };
    this.route.params
      .subscribe(
        (params:Params) => {
          this.user.id=params['id'];
          this.user.name=params['name'];
        },
        // function (params:Params){customService
        //   this.user.id=params['id'];
        //   this.user.name=params['name'];
        // }
      )

    this.customService.userActivated.subscribe(
      (id:number)=>{
        if(id==1){
          this.user.activated=true;
        }else{
          this.user.activated=false;
        }
    }
    )
  }

  onActivate(){
    this.customService.userActivated.next(this.user.id);
  }
  ngOnDestroy(): void {
    this.customService.userActivated.unsubscribe();
  }
}
