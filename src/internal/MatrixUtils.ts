import { Matrix } from './Matrix';

export class MatrixUtils {
  static stringToMatrix(data: string, dimension: number): Matrix {
    let result = '';
    for (let i = 0; i < data.length; i++) {
      result += data.charCodeAt(i);
    }
    const arr = result.split('').map((num) => parseInt(num, 10));

    const matrix = new Matrix(dimension, dimension);
    let row = 0;
    let col = 0;

    arr.forEach((value) => {
      matrix.addValueToCell(row, col, value);
      col++;

      if (col >= matrix.getMatrix()[row].length) {
        col = 0;
        row++;
        if (row >= matrix.getMatrix().length) {
          row = 0;
        }
      }
    });

    return matrix;
  }
  static numberToMatrix(num: number, dimension: number): Matrix {
    const numString = num.toString();
    const arr = numString.split('').map((digit) => parseInt(digit, 10));

    const matrix = new Matrix(dimension, dimension);
    let row = 0;
    let col = 0;

    arr.forEach((value) => {
      matrix.addValueToCell(row, col, value);
      col++;

      if (col >= matrix.getMatrix()[row].length) {
        col = 0;
        row++;
        if (row >= matrix.getMatrix().length) {
          row = 0;
        }
      }
    });

    return matrix;
  }
  static matrixToString(matrix: Matrix): string {
    let result = '';
    const matrixData = matrix.getMatrix();
    for (let i = 0; i < matrixData.length; i++) {
      for (let j = 0; j < matrixData[i].length; j++) {
        const element = matrixData[i][j];
        result += element.toString();
      }
    }
    return result;
  }
  static multiplyMatrices(keyMatrix: Matrix, otherMatrix: Matrix): Matrix {
    const n = keyMatrix.getRows();
    const m = otherMatrix.getColumns();
    const result = new Matrix(n, m);

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        let sum = 0;
        for (let k = 0; k < otherMatrix.getRows(); k++) {
          sum += keyMatrix.getMatrix()[i][k] * otherMatrix.getMatrix()[k][j];
        }
        result.addValueToCell(i, j, sum);
      }
    }

    return result;
  }
}
