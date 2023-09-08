import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarGastosComponent } from './Components/listar-gastos/listar-gastos.component';

const routes: Routes = [
    {
        path:"",
        component:ListarGastosComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
