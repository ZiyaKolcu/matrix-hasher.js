import { Matrix } from '../internal/Matrix';
import { MatrixUtils } from '../internal/MatrixUtils';

export class MatrixHasher {
  static matrixHash(
    data: string,
    keyMatrix: Matrix,
    dimension: number = 3
  ): string {
    const dataMatrix = MatrixUtils.stringToMatrix(data, dimension);
    const hashedMatrix = MatrixUtils.multiplyMatrices(keyMatrix, dataMatrix);
    return MatrixUtils.matrixToString(hashedMatrix);
  }

  static compare(
    enteredData: string,
    hashedData: string,
    keyMatrix: Matrix,
    dimension: number = 3
  ): boolean {
    const hashedEnteredData = this.matrixHash(
      enteredData,
      keyMatrix,
      dimension
    );
    if (hashedEnteredData === hashedData) {
      return true;
    }
    return false;
  }

  static genKeyMatrix(seed: number, dimension: number = 3): Matrix {
    const keyMatrix = MatrixUtils.numberToMatrix(seed, dimension);
    return keyMatrix;
  }
}
