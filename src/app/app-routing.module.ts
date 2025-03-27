import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductSectionComponent } from './product-section/product-section.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: '', component: ProductSectionComponent },
  { path: 'login', component: LoginComponent },
  {path:'', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
