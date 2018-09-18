var matrix = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]

function startProcess() {
    matrix[0][0] = Number(document.getElementById("ceroCero").value);
    matrix[0][1] = Number(document.getElementById("ceroUno").value);
    matrix[0][2] = Number(document.getElementById("ceroDos").value);
    matrix[0][3] = Number(document.getElementById("r1").value);
    matrix[1][0] = Number(document.getElementById("unoCero").value);
    matrix[1][1] = Number(document.getElementById("unoUno").value);
    matrix[1][2] = Number(document.getElementById("unoDos").value);
    matrix[1][3] = Number(document.getElementById("r2").value);
    matrix[2][2] = Number(document.getElementById("tresCero").value);
    matrix[2][0] = Number(document.getElementById("tresUno").value);
    matrix[2][1] = Number(document.getElementById("tresDos").value);
    matrix[2][3] = Number(document.getElementById("r3").value);
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
        if (cont > 1) {
            alert(`The matrix is incorrect because the sum of the row ${i} is more big than 1.`);
            flag = false;
        }
    });    
    if (flag) {
        console.log();

        console.log(matrix);
    } else {
        console.log("Some is empty");
    }

    


}