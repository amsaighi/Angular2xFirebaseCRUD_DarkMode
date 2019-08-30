import { Component, OnInit, Renderer2 } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  list: Employee[];
  constructor(
    private service: EmployeeService,
    private firestore: AngularFirestore,
    private toastr : ToastrService,
    public translateService: TranslateService
    ) { }

  ngOnInit() {
    this.service.getEmployees().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Employee;
      })
    });
  }

  // Edit Employee 
  onEdit(emp: Employee) {
    this.service.formData = Object.assign({}, emp);
  }

  // Delete Employee 
  onDelete(id:string){
    if (confirm("Are you sure to delete it ?")) {
      this.firestore.doc('employees/' + id).delete();
      this.toastr.warning('Deleted success','EMP Form Deleted');

    }
  } 
  
}
