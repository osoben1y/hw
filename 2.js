"use strict";
function matrixReshape(mat, r, c) {
    const m = mat.length;
    const n = mat[0].length;
    if (m * n !== r * c) {
        return mat;
    }
    const result = Array.from({ length: r }, () => new Array(c));
    let flatIndex = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const row = Math.floor(flatIndex / c);
            const col = flatIndex % c;
            result[row][col] = mat[i][j];
            flatIndex++;
        }
    }
    return result;
}
console.log(matrixReshape([
    [1, 2],
    [3, 4],
], 1, 4));
console.log(matrixReshape([
    [1, 2],
    [3, 4],
], 2, 4));
