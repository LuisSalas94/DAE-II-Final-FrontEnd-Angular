import { Component, OnInit } from '@angular/core';
import { Register } from '../register';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-list',
  templateUrl: './register-list.component.html',
})
export class RegisterListComponent implements OnInit {
  registers: Register[] = [];

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getRegisters();
  }

  private getRegisters() {
    this.registerService.getRegisterList().subscribe((data) => {
      this.registers = data;
    });
  }

  updateRegister(id: number) {
    this.router.navigate(['update-register', id]);
  }

  deleteRegister(id: number) {
    this.registerService.deleteRegister(id).subscribe(
      () => {
        this.getRegisters();
      },
      (error) => {
        console.log('Error deleting register: ', error);
      }
    );
  }
}
