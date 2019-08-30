import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { EmployeeService } from 'src/app/shared/employee.service';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(
    public service: EmployeeService,
    private firestore: AngularFirestore,
    private toaster: ToastrService,
    public translateService: TranslateService
    ) { }

  ngOnInit() {
    this.resetForm();
  }

  // rest form after using
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      id: null,
      fullName: '',
      position: '',
      empCode: '',
      mobile: ''
    }
  }

  // on submit form 
  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null)
      this.firestore.collection('employees').add(data);
    else
    this.firestore.doc('employees/' + form.value.id).update(data);
      this.resetForm(form);
    this.toaster.success('Submitted successfully','EMP Form');
  }
}
