import { Component } from '@angular/core';
import { Register } from '../register';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-register',
  templateUrl: './create-register.component.html',
})
export class CreateRegisterComponent {
  register: Register = {
    id: 0,
    studentName: '',
    studentCourse: '',
    dateCreated: '',
  };

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}

  saveRegister() {
    this.registerService.createRegister(this.register).subscribe(
      (data) => {
        console.log(data);
        this.goToRegisterList();
      },
      (error) => console.log(error)
    );
  }

  goToRegisterList() {
    this.router.navigate(['/registers']);
  }

  onSubmit() {
    this.saveRegister();
  }
}
