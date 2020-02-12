import { Module } from './Module';

export interface Filiere {
  idFiliere: string;
  typeFiliere: string;
  module: Module[];
  titre: string;
  departement: string;
  chefdefiliere: string;
}
