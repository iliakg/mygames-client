import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {v4 as uuid} from 'uuid'
import {Observable} from 'rxjs'

import {Battlestate} from '../interfaces'

@Injectable({
  providedIn: 'root'
})

export class MinesweeperService {
  constructor(private http: HttpClient) {
  }

  init(rows: number, cols: number, bombs: number): Observable<Battlestate> {
    return this.http.post<Battlestate>(
      '/api/minesweeper',
      {game_id: this.getOrCreateUuid(), rows, cols, bombs}
    )
  }

  getOrCreateUuid() {
    let minesweeperUuid = localStorage.getItem('minesweeper_uuid')
    if (!minesweeperUuid) {
      minesweeperUuid = uuid()
      localStorage.setItem('minesweeper_uuid', minesweeperUuid)
    }

    return minesweeperUuid
  }
}
