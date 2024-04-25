let inputs = document.querySelectorAll("input");
let rows = document.querySelectorAll(".row");
//console.log(rows[0])
function isLetter(value) {
    return /^[a-zA-z]$/.test(value);
}
function isAllYellow(eachRow) {
    let count = 0;
    for(let i = 0; i < 5; i++)if (eachRow.children[i].style.backgroundColor == "yellow") count += 1;
    if (count == 5) return true;
    else return false;
}
function makeRowGreen(rows) {
    rows.forEach((eachRow)=>{
        if (isAllYellow(eachRow)) eachRow.style.backgroundColor = "green";
    });
}
function checkTheWord(event) {
    if (event.target.name == event.key) {
        event.target.style.backgroundColor = "yellow";
        makeRowGreen(rows);
    } else event.target.style.backgroundColor = "gray";
}
function applyFunctionality(eachInput) {
    eachInput.addEventListener("keydown", (event)=>{
        if (!isLetter(event.key)) event.preventDefault();
        else checkTheWord(event);
    });
}
inputs.forEach((eachInput)=>{
    applyFunctionality(eachInput);
});

//# sourceMappingURL=index.fd0fef98.js.map
