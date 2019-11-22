import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup} from '@angular/forms'
import {MinesweeperService} from '../shared/services/minesweeper.service'
import {logWarnings} from 'protractor/built/driverProviders'


@Component({
  selector: 'app-profile',
  templateUrl: './minesweeper.component.html'
})

export class MinesweeperComponent implements OnInit {
  loadGame = false
  loadedCels = {}
  form: FormGroup
  rows: number
  cols: number
  bombsCount: number

  constructor(private minesweeperService: MinesweeperService) {
  }

  ngOnInit() {
    this.minesweeperService.init(9, 9, 10).subscribe(battlestate => {
      this.loadGame = true

      this.rows = battlestate.opts.rows
      this.cols = battlestate.opts.cols
      this.bombsCount = battlestate.opts.bombs_count
      this.loadedCels = battlestate.opened_cells

      this.form = new FormGroup({
        rows: new FormControl(this.rows),
        cols: new FormControl(this.cols),
        bombs: new FormControl(this.bombsCount)
      })
    })
  }

  initClass(location) {
    const value = this.loadedCels[location]
    if (value >= 0 && value <= 8) {
      return `res_${value}`
    } else {
      return ''
    }
  }

  initValue(location) {
    const value = this.loadedCels[location]
    if (value > 0 && value <= 8) {
      return value
    } else {
      return ''
    }
  }

  cellClick(i, j) {
    this.minesweeperService.openCell(i, j).subscribe(battlestate => {
      // TODO check add battlestate.opened_cells pass to this.loadedCels
      Object.keys(battlestate.opened_cells).map((location, index) => {
        const value = battlestate.opened_cells[location]
        const element = document.getElementById(location)

        element.className = `res_${value}`

        if (value > 0 && value <= 8) {
          element.innerText = value
        }
      })
    })
  }

  onSubmit() {
    this.form.disable()

    this.minesweeperService.newGame(this.form.value).subscribe(
      battlestate => {
        this.loadGame = true

        this.rows = battlestate.opts.rows
        this.cols = battlestate.opts.cols
        this.bombsCount = battlestate.opts.bombs_count

        const cells = document.querySelectorAll('#minefield table tr td');

        [].forEach.call(cells, el => {
          el.className = ''
          el.innerText = ''
        })

        this.form.enable()
      },
      error => {
        console.log(error)

        this.form.enable()
      }
    )
  }
}
