import * as math from 'mathjs'



var matrix = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]

function startProcess() {



    
    matrix[0][0] = Number(document.getElementById("ceroCero").value);
    matrix[0][1] = Number(document.getElementById("ceroUno").value);
    

    console.log(Number(document.getElementById("ceroCero").value));

    console.log(Number(document.getElementById("ceroUno").value));

    console.log(Number(document.getElementById("ceroDos").value));

    console.log(Number(document.getElementById("r1").value));

    console.log(Number(document.getElementById("unoCero").value));

    console.log(Number(document.getElementById("unoUno").value));

    console.log(Number(document.getElementById("unoDos").value));

    console.log(Number(document.getElementById("r2").value));

    console.log(Number(document.getElementById("dosCero").value));

    console.log(Number(document.getElementById("dosUno").value));

    console.log(Number(document.getElementById("dosDos").value));

    console.log(Number(document.getElementById("r3").value));
    

    let flag = true;

    matrix.forEach((value, i) => {
        let cont = 0;
        value.forEach((val, j) => {
            if (j < value.length - 1) {
                cont += val;
            }
            if (val === "" && flag) {
                console.log("Omg");
                console.log(val);
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
        console.log();
        console.log(matrix);
        this.getTransposed();
    } else {
        console.log("Some is empty");
    }

}

function getTransposed() {
    let returnedMatrix = matrix;
    console.log(matrix);


    matrix.forEach((value, i) => {
        value.forEach((val, j) => {
            // console.log(`[${i}][${j}]\n`+val);
            // console.log(`[${i}][${j}]\n`+returnedMatrix[i][j]);
            if (j < value.length - 1) {
                returnedMatrix[i][j] = matrix[j][i];
                console.log(`Changing${i},${j} by ${j},${i}`);
            }
        })
    })


    console.log(returnedMatrix);

    console.log("called");

}