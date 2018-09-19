



var matrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

function startProcess() {

    matrix[0][0] = Number(document.getElementById("ceroCero").value);
    matrix[0][1] = Number(document.getElementById("ceroUno").value);
    matrix[0][2] = Number(document.getElementById("ceroDos").value);
    matrix[1][0] = Number(document.getElementById("unoCero").value);
    matrix[1][1] = Number(document.getElementById("unoUno").value);
    matrix[1][2] = Number(document.getElementById("unoDos").value);
    matrix[2][0] = Number(document.getElementById("dosCero").value);
    matrix[2][1] = Number(document.getElementById("dosUno").value);
    matrix[2][2] = Number(document.getElementById("dosDos").value);
    //this.showMatrix(matrix);
    let flag = true;

    matrix.forEach((value, i) => {
        let cont = 0;
        value.forEach((val, j) => {
            if (j < value.length - 1) {
                cont += val;
            }
            if (val === "" && flag) {
                //console.log("Omg");
                //console.log(val);
                alert(`The item [${i},${j}] is empty`);
                flag = false;
            }
        })
        // if (cont > 1) {
        //     alert(`The matrix is incorrect because the sum of the row ${i} is more big than 1.`);
        //     flag = false;
        // }
    });
    if (flag) {
        ////console.log(matrix);
        this.getTransposed(matrix, returned => {
            this.adjustMatrix(returned, ready => {
                this.showMatrix(ready);
                console.log("\n\n\n\n\n");

                this.gauss(ready);
            });
        });
    } else {
        //console.log("Some is empty");
    }

}

function getTransposed(matrixTemp, callback) {
    let returnedMatrix = [];
    //this.showMatrix(matrix)
    for (let i = 0; i < matrixTemp.length; i++) {
        let row = ""
        let row2 = []
        for (let j = 0; j < matrixTemp[i].length; j++) {
            row2.push(matrixTemp[j][i]);
            //returnedMatrix[i][j]=matrixTemp[j][i]
            row = row + " " + matrixTemp[j][i]
        }
        returnedMatrix.push(row2)
        //console.log(row2);
        //console.log(i + ":" + row);
    }
    //console.log("returnedMatrix");
    //console.log(returnedMatrix);

    //this.showMatrix(returnedMatrix);
    callback(returnedMatrix);

}

function adjustMatrix(matrixTemp, callback) {
    let returnedMatrix = matrixTemp;
    for (let ind = 0; ind < returnedMatrix.length; ind++) {
        returnedMatrix[ind][ind] = (returnedMatrix[ind][ind] - 1).toFixed(1);
        returnedMatrix[ind].push(0);
    }
    let change = [1, 1, 1, 1]
    let aux = returnedMatrix[0]
    returnedMatrix[0] = change;
    returnedMatrix[returnedMatrix.length - 1] = aux;
    callback(returnedMatrix);
}


function showMatrix(mat) {
    for (let i = 0; i < mat.length; i++) {
        let row = ""
        for (let j = 0; j < mat[i].length; j++) {
            row = row + " " + mat[i][j]
        }
        console.log(i + ":" + row);
    }
}

function gauss(A) {

    let gaussResult;
    let row;
    let pivote = A[0][0];

    for (let i = 0; i < A.length; i++) {
        pivote = A[i][i];
        // console.log("Pivote");
        // console.log(A[i][i]);

        if (pivote != 1) {
            for (let ind = 0; ind < A[i].length; ind++) {
                A[i][ind] /= pivote;
            }
        }
        for (let j = 0; j < A.length; j++) {
            if (j != i) {
                //console.log(j + " " + i);
                if (A[j][i] != 0) {
                    //console.log("R"+Number(i+1)+" * " + A[j][0] + " - R" + Number(j+1));
                    for (let k = 0; k < A[j].length; k++) {
                        let thing = A[j][0] * pivote;
                        let result = A[j][k] - thing;
                        
                        //console.log(A[j][0]+"*"+pivote+" = "+thing+" - "+A[j][0]+" = "+result);
                        //console.log(A[j][k]+"*"+pivote+" - R"+j);

                        //console.log(A[j][k]);
                        //console.log(A[j][k] * pivote);


                        A[j][k] = thing;
                        //console.log(A[j][k]);
                        //console.log(A[j][k] * pivote);

                    }
                    //console.log(A[j]);
                }
                //this.showMatrix(A);
            }
        }
    }
    this.showMatrix(A);
    for (let index = 0; index < A.length; index++) {
        console.log(A[index][A[index].length-1]);            
    }

}