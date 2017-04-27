import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {Observable, Subscription} from "rxjs";
import {Observer} from "rxjs/Observer";
import {setTimeout} from "timers";
import {SubscribeOnObservable} from "rxjs/observable/SubscribeOnObservable";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  numberObservableSubscription:Subscription;
  customObservable:Subscription;

  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit() {
    const myNumbers=Observable.interval(1000);

   this.numberObservableSubscription= myNumbers.subscribe(
      (number:number)=>{
        console.log(number);
      }
    );

    const myObs=Observable.create( (observer:Observer<string>) =>{
      setTimeout(()=>{
        observer.next("working1");
      },2000);
      setTimeout(()=>{
        observer.next("working2");
      },4000);
      setTimeout(()=>{
        observer.error("does not work");
      },5000);

      setTimeout(()=>{
        observer.complete();
      },7000);

      setTimeout(()=>{
        observer.next("never arives");
      },9000);
      });
    this.customObservable=myObs.subscribe(
      (data:string)=> {
        console.log(data);
      },
      (error:string)=>{
        console.log(error);
      },
      ()=>{
        console.log("completed");
      }
    );
  }
  ngOnDestroy(): void {
    this.numberObservableSubscription.unsubscribe();
    this.customObservable.unsubscribe();
  }
  onLoadServers(id:number){
    //COMPLEX calculation
    this.router.navigate(['/servers',id,'edit'],{queryParams:{allowEdit:'1'},fragment:'loading'});
  }

  onLogin(){
    this.authService.login();
  }

  onLogout(){
    this.authService.logout();
  }
}
