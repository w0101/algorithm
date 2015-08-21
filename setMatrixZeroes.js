/**
*对于一个矩阵，如果某个元素为0，就把它所在的行和列置0
*这里有一个坑，看起来直接遍历矩阵就行了，其实如果找到某个元素直接把元素所在行列都置0的话后面再遍历到被置零的元素会把其他行也置0
*因此每次遍历到一个0不能立即把它所在行列都置0，要先标记一下，这里用到的技巧如下：
*1.先遍历矩阵的第一行和第一列。确定他们是否需要被置0（以后用第一行第一列标记）
*2，从第二行第二列开始遍历数组，找到是0 的位置（i,j）,在【i,0】和[0,j]的位置标记
*3.把标记为0 的行和列置0
*4,第一行第一列按需置0
**/
function setMatrxZero(matrix) {
    //set first row and column zero or not
    for(var i=0; i<matrix.length; i++){
        if(matrix[i][0] === 0){
            var firstColumnZero = true;
            break;
        }
    }

    for(var i=0; i<matrix[0].length; i++){
        if(matrix[0][i] == 0){
            var firstRowZero = true;
            break;
        }
    }

    //mark zeros on first row and column
    for(var i=1; i<matrix.length; i++){
        for(var j=1; j<matrix[0].length; j++){
            if(matrix[i][j] == 0){
               matrix[i][0] = 0;
               matrix[0][j] = 0;
            }
        }
    }

    //use mark to set elements
    for(var i=1; i<matrix.length; i++){
        for(var j=1; j<matrix[0].length; j++){
            if(matrix[i][0] == 0 || matrix[0][j] == 0){
               matrix[i][j] = 0;
            }
        }
    }

    //set first column and row
    if(firstColumnZero){
        for(var i=0; i<matrix.length; i++)
            matrix[i][0] = 0;
    }

    if(firstRowZero){
        for(var i=0; i<matrix[0].length; i++)
            matrix[0][i] = 0;
    }

}