import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { RegisterService } from '../register.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-register',
  templateUrl: './update-register.component.html',
})
export class UpdateRegisterComponent implements OnInit {
  register: Register = {
    id: 0,
    studentName: '',
    studentCourse: '',
    dateCreated: '',
  };

  id: number = 0;

  constructor(
    private registerService: RegisterService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.registerService.getRegisterById(this.id).subscribe(
      (data) => {
        this.register = data;
      },
      (error) => console.log(error)
    );
  }

  goToRegisterList() {
    this.router.navigate(['/registers']);
  }

  onSubmit() {
    this.registerService
      .updateRegister(this.id, this.register)
      .subscribe(() => this.goToRegisterList());
  }
}
