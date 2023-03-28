import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { TableauComponent } from './tableau/tableau.component';

const routes: Routes = [
  {
    path: 'formulaire',
    component: FormulaireComponent,
    data: {
      animation: 'FormulairePage'
    }
  },
  {
    path: 'tableau',
    component: TableauComponent,
    data: {
      animation: 'TableauPage'
    }
  },
  // Autres définitions de routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }