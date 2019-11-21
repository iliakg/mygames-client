import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup} from '@angular/forms'
import {MinesweeperService} from '../shared/services/minesweeper.service'


@Component({
  selector: 'app-profile',
  templateUrl: './minesweeper.component.html'
})

export class MinesweeperComponent implements OnInit {
  loadGame = false
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

      this.form = new FormGroup({
        rows: new FormControl(this.rows),
        cols: new FormControl(this.cols),
        bombs: new FormControl(this.bombsCount)
      })
    })
  }

  onSubmit() {
    this.form.disable()

    // this.minesweeperService.resetGame(this.form.value).subscribe(
    //   () => {
    //     console.log("render table")
    //   },
    //   error => {
    //     console.log(error)
    //
    //     this.form.enable()
    //   }
    // )
  }
}
