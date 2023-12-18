import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterListComponent } from './register-list/register-list.component';
import { CreateRegisterComponent } from './create-register/create-register.component';
import { UpdateRegisterComponent } from './update-register/update-register.component';

const routes: Routes = [
  {
    path: 'registers',
    component: RegisterListComponent,
  },
  {
    path: 'create-register',
    component: CreateRegisterComponent,
  },
  {
    path: 'update-register/:id',
    component: UpdateRegisterComponent,
  },
  {
    path: '',
    redirectTo: 'registers',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
