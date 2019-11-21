import {NgModule} from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'

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
    LoaderComponent,
    HeaderComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HeaderComponent,
    LoaderComponent
  ]
})

export class SharedModule {
}
