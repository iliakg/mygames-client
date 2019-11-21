import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule, Routes} from '@angular/router'
import {HttpClientModule} from '@angular/common/http'

import {AppComponent} from './app.component'
import {ApplicationLayoutComponent} from './layouts/application-layout/application-layout.component'
import {NotFoundComponent} from './not-found/not-found.component'
import {SharedModule} from './shared/shared.module'

const appRoutes: Routes = [
  {
    path: '', component: ApplicationLayoutComponent, children: [
      {
        path: 'minesweeper',
        loadChildren: () => import('./minesweeper/minesweeper.module').then(m => m.MinesweeperModule)
      },
      {path: 'not-found', component: NotFoundComponent}
    ]
  },
  {path: '**', redirectTo: 'not-found'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'}),
    BrowserModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    ApplicationLayoutComponent,
    NotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
