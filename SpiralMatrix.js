/**
*矩阵螺旋排序
*[1,2,3]
*[4,5,6] --> [1,2,3,4,5,6,7,4,5]
*[7,8,9]
*一层一层的拨开这个矩阵，如果只有一行或一列就直接输出，否则输出外层一圈然后矩阵变成里面的部分
**/
function sprialMatrix(matrix) {
    var res = [];
    //矩阵为空的情况一定要考虑到
    if (matrix == null || matrix.length < 1) {
        return res;
    }
    var sx = 0, sy = 0;
    //m,n是子矩阵的大小m*n
    var m = matrix.length;
    var n = matrix[0].length;
    while (m > 0 && n > 0) {
        if (m === 1) {
            for (var i = 0; i < n; i++) {
                res.push(matrix[sx][sy++]);
            }
            break;
        }
        if (n === 1) {
            for (var j = 0; j < m; j++) {
                res.push(matrix[sx++][sy]);
            }
            break;
        }
        for (var i = 0; i < m -1; i++) {
            res.push(matrix[sx][sy++]);
        }
        for (var j = 0; j < n - 1; j++) {
            res.push(matrix[sx++][sy]);
        }
        for (var i = 0; i < m -1; i++) {
            res.push(matrix[sx][sy--]);
        }
        for (var i = 0; i < n - 1; i++) {
            res.push(matrix[sx--][sy]);
        }
        sx++;
        sy++;
        m-=2;
        n-=2;
    }
    return res;
}