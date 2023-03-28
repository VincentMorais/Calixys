import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableauComponent } from './tableau/tableau.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

const routes: Routes = [
  { path: 'formulaire', component: FormulaireComponent },
  


  { path: 'tableau', pathMatch: 'full', component: TableauComponent },
  {path: '', redirectTo: 'formulaire', pathMatch: 'full' },
  { path: '**', redirectTo: 'tableau' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
