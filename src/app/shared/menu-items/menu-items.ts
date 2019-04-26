import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
    {state: 'starter', name: 'Lista de Clientes', type: 'link', icon: 'inbox', tipo:'/' },
    {state: 'create', type: 'link', name: 'Creación de Cliente', icon: 'settings', tipo: '/customers'},
];

@Injectable()

export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }

}
