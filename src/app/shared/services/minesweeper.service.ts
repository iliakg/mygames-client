import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {v4 as uuid} from 'uuid'
import {Observable} from 'rxjs'

import {Battlestate, OpenedCells} from '../interfaces'

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

  newGame(data: FormData): Observable<Battlestate> {
    const gameID = 'game_id'
    data[gameID] = this.getOrCreateUuid()

    return this.http.post<Battlestate>('/api/minesweeper/reset_game', data)
  }

  openCell(col: number, row: number): Observable<OpenedCells> {
    return this.http.post<Battlestate>(
      '/api/minesweeper/open_cell',
      {game_id: this.getOrCreateUuid(), col, row}
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
