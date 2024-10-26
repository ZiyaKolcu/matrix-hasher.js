export class Matrix {
  private rows: number;
  private columns: number;
  private matrix: number[][];

  constructor(rows: number, columns: number) {
    this.rows = rows;
    this.columns = columns;
    this.matrix = this.createZeroMatrix(rows, columns);
  }

  private createZeroMatrix(rows: number, columns: number): number[][] {
    const matrix: number[][] = [];
    for (let i = 0; i < rows; i++) {
      matrix[i] = new Array(columns).fill(0);
    }
    return matrix;
  }

  public addValueToCell(row: number, col: number, value: number): void {
    if (row >= 0 && row < this.rows && col >= 0 && col < this.columns) {
      this.matrix[row][col] += value;
    }
  }
  public getMatrix(): number[][] {
    return this.matrix;
  }

  public printMatrix(): void {
    console.log(this.matrix);
  }

  public getRows(): number {
    return this.rows;
  }

  public getColumns(): number {
    return this.columns;
  }
}
