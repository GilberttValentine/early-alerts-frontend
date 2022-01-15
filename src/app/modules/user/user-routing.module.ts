import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './templates/form/form.component';
import { HomeComponent } from './templates/home/home.component';
import { ModuleComponent } from './templates/module/module.component';
import { ModulesComponent } from './templates/modules/modules.component';
import { RisksComponent } from './templates/risks/risks.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'modules', component: ModulesComponent },
      {
        path: 'modules/:code',
        children: [
          { path: '', component: ModuleComponent },
          { path: 'forms/:code', component: FormComponent }
        ]
      },
      { path: 'types-risks', component: RisksComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }