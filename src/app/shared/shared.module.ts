import {NgModule} from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'

import {FormErrorsComponent} from './components/form-errors/form-errors.component'
import {LoaderComponent} from './components/loader/loader.component'
import {HeaderComponent} from './components/header/header.component'

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ],
  declarations: [
    FormErrorsComponent,
    LoaderComponent,
    HeaderComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HeaderComponent,
    FormErrorsComponent,
    LoaderComponent
  ]
})

export class SharedModule {
}
