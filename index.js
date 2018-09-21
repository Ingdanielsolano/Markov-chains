



var matrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];


function addColumns() {
    var container = document.getElementById("container");
    var titles = document.getElementById("titles");
    var input1 = document.createElement("input");    
    var input2 = document.createElement("input");    
    var input3 = document.createElement("input");    
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    input1.type = "text";
    input1.name = "member";
    input2.type = "text";
    input2.name = "member";
    input3.type = "text";
    input3.name = "member";
    td1.appendChild(input1);
    td2.appendChild(input2);
    td3.appendChild(input3);
    container.appendChild(td1);
    container.appendChild(td2);
    container.appendChild(td3);
    var th = document.createElement("th");
    th.scope="col";
    titles.appendChild(th);
}








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
        //this.powerMatrix(matrix, 1);
    } else {
        //console.log("Some is empty");
    }

}

function powerMatrix(original, power) {
    var dontChangePls = matrix.concat();
    var result = matrix.concat();
    result[0][0] = 12312312;
    // for (let i = 0; i < original.length; i++) {
    //     for (let j = 0; j < original[i].length; j++) {
    //         let sum = 0;
    //         let sss = "";

    //         for (let h = 0; h < original.length; h++) {

    //             sum += original[i][h] * original[h][j];
    //             sss += `${original[i][h]}*${original[h][j]} + `;
    //         }
    //         result[i][j] = sum;
    //         sss += " = " + sum;
    //         console.log("sss");
    //         console.log(sss);
    //     }
    // }
    console.log(matrix);
    console.log(dontChangePls);
    console.log(result);

    // this.showMatrix(original);
    // this.showMatrix(dontChangePls);
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
        returnedMatrix[ind][ind] = Number((returnedMatrix[ind][ind] - 1).toFixed(1));
        returnedMatrix[ind].push(0);
    }
    let change = [1, 1, 1, 1]
    let aux = returnedMatrix[0]
    returnedMatrix[0] = change;
    returnedMatrix[returnedMatrix.length - 1] = aux;
    callback(returnedMatrix);
}


function showMatrix(mat) {
    console.log("-------------------------------");
    for (let i = 0; i < mat.length; i++) {
        let row = ""
        for (let j = 0; j < mat[i].length; j++) {
            row = row + " " + mat[i][j].toFixed(4);
        }
        console.log(i + ":" + row);
    }
    console.log("---------------------------------\n\n\n");

}

function gauss(A, callback) {

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
                    let principal = A[j][i];
                    //console.log("R"+Number(i+1)+" * " + A[j][0] + " - R" + Number(j+1));
                    for (let k = 0; k < A[j].length; k++) {
                        let thing = principal * A[i][k];
                        let result = A[j][k] - thing;
                        // console.log("R" + Number(j + 1) + "=\n");

                        // console.log(pivote + "*" + A[j][k] + " = " + thing + " - " + A[j][0] + " = " + result);
                        //console.log(A[j][k]+"*"+pivote+" - R"+j);

                        //console.log(A[j][k]);
                        //console.log(A[j][k] * pivote);


                        A[j][k] = result;
                        //console.log(A[j][k]);
                        //console.log(A[j][k] * pivote);

                    }
                }

                //this.showMatrix(A);
            }
            //this.showMatrix(A);
            //console.log(A[j]);
        }
    }
    //this.showMatrix(A);
    for (let index = 0; index < A.length; index++) {
        console.log(A[index][A[index].length - 1]);
    }
}