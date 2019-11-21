export interface Battlestate {
  status: string
  opts: {cols: number, rows: number, bombs_count: number}
  opened_cells: {}
}
