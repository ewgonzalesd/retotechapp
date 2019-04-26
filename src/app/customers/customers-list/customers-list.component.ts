import {Component, OnInit, ViewChild} from '@angular/core';
import {CustomersService} from '../../controllers/services/customers.service';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {

  constructor(private customersService: CustomersService) { }

  displayedColumns:string[] = ['name','surname','age','birthdate'];
  dataSource = new MatTableDataSource();
  promedio: any;
  desstandar: any;
  edades : Array<number> = [];

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    console.log("init");
   this.getAllCustomers();
  }

  ngAfterViewInit(){
    this.dataSource.sort=this.sort;
  }

  getAllCustomers(){
    this.customersService.getCustomers().subscribe(
      res =>{

        console.log("res"+res);
        this.dataSource.data = res;
        res.forEach(value => this.edades.push(Number(value.age)));
        // @ts-ignore
        this.promedio = this.average(this.edades);
        this.desstandar = this.standardDeviation(this.edades);
      }
    );
  }


   standardDeviation(values:number[]):number{
    let avg = this.average(values);

     let squareDiffs = values.map(value => {
       let diff = value - avg;
       let sqrDiff = diff * diff;
      return sqrDiff;
    });

     let avgSquareDiff = this.average(squareDiffs);

     let stdDev = Math.sqrt(avgSquareDiff);
    return stdDev;
  }

   average(res:number[]):number {
    console.log("le"+res.length);
    let sum = (res.reduce((current, previus) => Number(current) +Number(previus))) ;
    let avg = sum / res.length;
    return avg;
  }


}
