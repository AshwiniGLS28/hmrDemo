import { Component, NgModule, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hmrDemo';
  hasUpdate = false;



  constructor(private swUpdate: SwUpdate) {
   }

  ngOnInit(){
      // console.log("Before",this.swUpdate.isEnabled)
    //   if(this.swUpdate.isEnabled){
    //     this.swUpdate.available.subscribe(() =>{
    //       console.log("after",this.swUpdate.isEnabled)
    //       if(confirm("New version available. Load New Version?")) {
    //         window.location.reload();
    //     }
    //     });
    //   }
    
    if (this.swUpdate.isEnabled) {
      interval(60000).subscribe(() => this.swUpdate.checkForUpdate().then(() => {
        console.log("Done")
      }));
    }
    this.swUpdate.available.subscribe(() => {
      this.hasUpdate = true;
    });

    
           
  }

  reloadSite(): void {
    location.reload();
  }

}