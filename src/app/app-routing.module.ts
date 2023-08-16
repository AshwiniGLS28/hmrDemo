import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash : true})],
  exports: [RouterModule],
  providers: [ActivatedRoute],
})
export class AppRoutingModule { }
