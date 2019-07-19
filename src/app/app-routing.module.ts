import { NotFoundComponent } from './components/not-found/not-found.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
   {path : '' , component : WelcomeComponent, pathMatch : 'full' },
   {path : 'list', component : ItemsListComponent},
   {path : '**', component : NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
