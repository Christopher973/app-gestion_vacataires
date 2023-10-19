import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacatairesComponent } from './pages/vacataires/vacataires.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  { path : '', component: VacatairesComponent },
  { path: 'vacataires', component:VacatairesComponent },
  // { path: 'les-cours', component:LesCoursComponent },
  { path: '404', component:NotFoundComponent },
  { path: 'test', component:TestComponent},
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
