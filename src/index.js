
module.exports = function solveSudoku(matrix) {
  if (isSolved(matrix))
    return matrix
}

function isSolved(matrix) {
  let b
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (matrix[i][j]) continue
        for (let k = 1; k <= 9; k++) {
                    if (insert(matrix, i, j, k)) {
                        matrix[i][j] = k
                        b = isSolved(matrix)
                        if (b) return true
                        matrix[i][j] = 0
                    }
        }
        return false;
      }
    }
    return true;
  }

function insert(matrix, i, j, k) {
  for (let a = 0; a < 9; a++) {
    if ((a !== i && matrix[a][j] === k) || (a !== j && matrix[i][a] === k)) 
      return false
  }
  let y = Math.floor((i / 3)) * 3
  let x = Math.floor((j / 3)) * 3
  for (let a = 0; a < 3; a++) {
    for (let b = 0; b < 3; b++) {
      if (a !== i && b !== j && matrix[y + a][x + b] === k) {
        return false
      }
    }
  }
return true
}
