import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './templates/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { ModulesComponent } from './templates/modules/modules.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RisksComponent } from './templates/risks/risks.component';
import { CardModuleComponent } from './templates/modules/components/card-module/card-module.component';
import { ModalFormAddModuleComponent } from './templates/modules/components/modal-form-add-module/modal-form-add-module.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModuleComponent } from './templates/module/module.component';
import { FormsModuleComponent } from './templates/module/components/forms-module/forms-module.component';
import { CardFormModuleComponent } from './templates/module/components/card-form-module/card-form-module.component';
import { CardFiltersModuleComponent } from './templates/modules/components/card-filters-module/card-filters-module.component';
import { CardFiltersFormsComponent } from './templates/module/components/card-filters-forms/card-filters-forms.component';
import { FormComponent } from './templates/form/form.component';
import { ModalCreateFormComponent } from './templates/module/components/modal-create-form/modal-create-form.component';


@NgModule({
  declarations: [
    UserComponent,
    HomeComponent,
    NavComponent,
    ModulesComponent,
    SidebarComponent,
    RisksComponent,
    CardModuleComponent,
    CardFiltersModuleComponent,
    ModalFormAddModuleComponent,
    ModuleComponent,
    FormsModuleComponent,
    CardFormModuleComponent,
    CardFiltersFormsComponent,
    FormComponent,
    ModalCreateFormComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ],
  bootstrap: [UserComponent]
})
export class UserModule { }
