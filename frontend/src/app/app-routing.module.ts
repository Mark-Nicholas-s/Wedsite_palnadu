import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FGLformComponent } from './fglform/fglform.component';
import { HomeComponent } from './home/home.component';
import { StudentRollNumberComponent } from './student-roll-number/student-roll-number.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path: 'Students',component:StudentRollNumberComponent},
  {path: 'fglform',component:FGLformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
