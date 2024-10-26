# Matrix-Hasher.js

Matrix-Hasher.js is a JavaScript library that implements matrix-based hashing for secure password handling. The library provides an easy-to-use interface with three main functions and has no external dependencies.

## Installation

To install the package, you can use npm or yarn. Run the following command in your terminal:

### Using npm

```bash
npm install matrix-hasher.js
```

### Using yarn

```bash
yarn add matrix-hasher.js
```

## Features

- **Matrix-Based Hashing**: Utilizes matrix operations for secure password hashing.
- **TypeScript Friendly**: Use type-safe code and benefit from TypeScript's powerful static type checking..
- **No Dependencies**: Lightweight and easy to integrate into any project.
- **Simple API**: Intuitive functions for hashing and comparison.

## Usage

### Key Matrix Generation

To use the library, you need to generate a `keyMatrix`. It must be a square matrix and seeds are required for matrix creation. It's recommended to store `KEY_MATRIX_SEED` and `DIMENSION` environment variables to your .env file. You can include them in your project using the `dotenv` package.

1. **Install dotenv:**
   ```bash
   npm install dotenv
   ```
2. **Defining `seed` and `dimension` in `.env` file**

   ```
   KEY_MATRIX_SEED=123456789
   DIMENSION=3
   ```

3. **`keyMatrix` Generation**

   ```javascript
   require('dotenv').config();
   const { MatrixHasher } = require('matrix-hasher.js');

   const dimension = parseInt(process.env.DIMENSION, 10);
   const keyMatrix = MatrixHasher.genKeyMatrix(
     process.env.KEY_MATRIX_SEED,
     dimension
   );
   console.log(keyMatrix);
   ```

### Data Hashing

```javascript
require('dotenv').config();
const { MatrixHasher } = require('matrix-hasher.js');

const dimension = parseInt(process.env.DIMENSION, 10);
const hashedData = MatrixHasher.matrixHash('secret', keyMatrix, dimension);
console.log(hashedData);
```

### Hashed Data Comparing

```javascript
require('dotenv').config();
const { MatrixHasher } = require('matrix-hasher.js');

const dimension = parseInt(process.env.DIMENSION, 10);
const isMatch = MatrixHasher.compare(
  'secret',
  hashedData,
  keyMatrix,
  dimension
);
console.log(isMatch);
```
