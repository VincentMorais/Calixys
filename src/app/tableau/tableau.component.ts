import { Component } from '@angular/core';

interface MyData {
  compte: string;
  date: Date;
  montant: number;
  devise: string;
  libelle1: string;
  libelle2: string;
  rapproche: boolean;
  pieceJointe: boolean;
}
@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent {
  myData: MyData[] = [
    { compte: 'DKR-23049', date: new Date('2022-12-01'), montant: 120.45, devise: 'EUR', libelle1: 'DEB_234', libelle2: '', rapproche: true, pieceJointe: true },
    { compte: 'KJD-21463', date: new Date('2022-12-01'), montant: 456.00, devise: 'USD', libelle1: 'TRK-002', libelle2: '', rapproche: false, pieceJointe: true },
    { compte: 'KJD-21463', date: new Date('2022-12-01'), montant: 239.89, devise: 'USD', libelle1: 'TRK-003', libelle2: '', rapproche: true, pieceJointe: false },
    { compte: 'KJD-21463', date: new Date('2022-12-01'), montant: 512.00, devise: 'USD', libelle1: 'TRK-004', libelle2: '', rapproche: true, pieceJointe: false },
    { compte: 'DKR-23049', date: new Date('2022-12-02'), montant: 123.00, devise: 'EUR', libelle1: 'DEB_235', libelle2: '', rapproche: true, pieceJointe: false },
    { compte: 'RTX-23093', date: new Date('2022-12-02'), montant: 345.00, devise: 'EUR', libelle1: 'CRE_346', libelle2: '', rapproche: true, pieceJointe: false },
    { compte: 'RTX-23093', date: new Date('2022-12-01'), montant: 216.90, devise: 'EUR', libelle1: 'CRE_347', libelle2: '', rapproche: false, pieceJointe: true },
    { compte: 'KJD-21463', date: new Date('2022-12-01'), montant: 34.94, devise: 'USD', libelle1: 'TRK-007', libelle2: '', rapproche: true, pieceJointe: false },
    { compte: 'RTX-23093', date: new Date('2022-12-02'), montant: 23.45, devise: 'EUR', libelle1: 'TRK-002', libelle2: '', rapproche: true, pieceJointe: false },
    { compte: 'DKR-23049', date: new Date('2022-12-03'), montant: 65.09, devise: 'EUR', libelle1: 'DEB_236', libelle2: '', rapproche: true, pieceJointe: false },
    { compte: 'RTX-23093', date: new Date('2022-12-01'), montant: 1245.12, devise: 'EUR', libelle1: 'CRE_348', libelle2: '', rapproche: true, pieceJointe: false },
    { compte: 'KJD-21463', date: new Date('2022-12-01'), montant: 123.00, devise: 'USD', libelle1: 'TRK-008', libelle2: '', rapproche: true, pieceJointe: false },
    { compte: 'KJD-21463', date: new Date('2022-12-01'), montant: 456.00, devise: 'USD', libelle1: 'TRK-009', libelle2: '', rapproche: true, pieceJointe: false },
    { compte: 'KJD-21463', date: new Date('2022-12-01'), montant: 789.00, devise: 'USD', libelle1: 'TRK-010', libelle2: '', rapproche: true, pieceJointe: false },
    { compte: 'KJD-21463', date: new Date('2022-12-01'), montant: 123.00, devise: 'USD', libelle1: 'TRK-011', libelle2: '', rapproche: true, pieceJointe: false },
    { compte: 'KJD-21463', date: new Date('2022-12-01'), montant: 456.00, devise: 'USD', libelle1: 'TRK-012', libelle2: '', rapproche: true, pieceJointe: false },
    
    
  ];
// Méthode pour modifier les valeurs d'une ligne
modifierLigne(index: number) {
  // On récupère la ligne à modifier
  const ligne = this.myData[index];

  // On affiche une boîte de dialogue pour saisir les nouvelles valeurs
  const nouveauCompte = prompt('Nouveau compte', ligne.compte) ?? '';


  // On met à jour les valeurs de la ligne
  ligne.compte = nouveauCompte;

}

}
