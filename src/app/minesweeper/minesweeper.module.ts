import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {SharedModule} from '../shared/shared.module'
import {MinesweeperComponent} from './minesweeper.component'

const profilesRoutes: Routes = [
  {path: '', component: MinesweeperComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(profilesRoutes),
    SharedModule
  ],
  declarations: [
    MinesweeperComponent
  ],
  exports: [
    RouterModule
  ]
})

export class MinesweeperModule {
}
