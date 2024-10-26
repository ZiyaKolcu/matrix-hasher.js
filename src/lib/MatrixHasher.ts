import { Matrix } from '../internal/Matrix';
import { MatrixUtils } from '../internal/MatrixUtils';

export class MatrixHasher {
  static matrixHash(data: string, keyMatrix: Matrix): string {
    const dataMatrix = MatrixUtils.stringToMatrix(data);
    const hashedMatrix = MatrixUtils.multiplyMatrices(keyMatrix, dataMatrix);
    return MatrixUtils.matrixToString(hashedMatrix);
  }

  static compare(
    enteredData: string,
    hashedData: string,
    keyMatrix: Matrix
  ): boolean {
    const hashedEnteredData = this.matrixHash(enteredData, keyMatrix);
    if (hashedEnteredData === hashedData) {
      return true;
    }
    return false;
  }

  static genKeyMatrix(seed: number): Matrix {
    const keyMatrix = MatrixUtils.numberToMatrix(seed);
    return keyMatrix;
  }
}
