import { AfterViewInit, Component ,OnInit,ViewChild} from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  @ViewChild('paginator',{static:true}) paginator!: MatPaginator;
  ELEMENT_DATA = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
  displayedColumns: string[] =[];
  dataSource :any;
  constructor(private observer : BreakpointObserver){} 
  
  @ViewChild(MatSidenav)
  sidenav! :MatSidenav;

  
  ngAfterViewInit(): void {
    this.observer.observe(['(max-width:800px)']).subscribe((res)=>{
      if(res.matches){
        this.sidenav.mode="over";
        this.sidenav.close()
      }
      else{
        this.sidenav.mode="side";
        this.sidenav.open()
      }
    })
    this.dataSource.paginator = this.paginator;  
  }
  ngOnInit(): void {
    this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
    //this.dataSource = this.ELEMENT_DATA;
    this.dataSource=new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  }
  
 
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

