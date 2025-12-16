function generateTable() {
    let number = Number(document.getElementById("num").value);
    let result = document.getElementById("result");

    if (isNaN(number)) {
        result.innerText = "Please enter a valid number";
        return;
    }

    let output = "";

    for (let i = 1; i <= 10; i++) {
        output += `${number} x ${i} = ${number * i}\n`;
    }

    result.innerText = output;
}
