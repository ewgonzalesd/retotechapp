import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable(
  {
    providedIn: 'root'
  }
)

export class CustomersService {

   private customersCollection: AngularFirestoreCollection<any>;
   customers: Observable<any[]>;

  constructor(private readonly afs: AngularFirestore) {
    this.getDataFire(afs);

  }

  myForm = new FormGroup(
    {name: new FormControl(''),
    surname: new FormControl(''),
    age: new FormControl(''),
      birthdate: new FormControl('')}
  );

  getCustomers(){
    this.getDataFire(this.afs);
    return this.customers;
  }


  createCustomers(customers:any){
      return this.customersCollection.add(customers);
  }

  getDataFire(afs: AngularFirestore){
    this.customersCollection =  afs.collection<any>('customers');
    this.customers = this.customersCollection.snapshotChanges()
      .pipe(
        map(
          actions => actions.map(value =>{

            const data = value.payload.doc.data() as any;
            const id = value.payload.doc.id;
            return {id, ...data};
          })
        )
      );
  }
}
