let _a;
// Navbar sidebar
function showSideBar() {
    document.querySelector('.sidebar').style.display = 'flex';
}
function hideSideBar() {
    document.querySelector('.sidebar').style.display = 'none';
}
// Enums
let Score;
(function (Score) {
    Score[Score["Poor"] = 0] = "Poor";
    Score[Score["Fair"] = 1] = "Fair";
    Score[Score["Average"] = 2] = "Average";
    Score[Score["Good"] = 3] = "Good";
    Score[Score["Excellent"] = 4] = "Excellent";
})(Score || (Score = {}));
let Origin;
(function (Origin) {
    Origin[Origin["Cuba"] = 0] = "Cuba";
    Origin[Origin["DominicanRepublic"] = 1] = "DominicanRepublic";
    Origin[Origin["Nicaragua"] = 2] = "Nicaragua";
    Origin[Origin["Honduras"] = 3] = "Honduras";
    Origin[Origin["Other"] = 4] = "Other";
})(Origin || (Origin = {}));
// Utility to get form input value
let getInputValue = function (id) {
    return document.getElementById(id).value;
};
let getChecked = function (id) {
    return document.getElementById(id).checked;
};
let resetForm = function () {
    ["name", "cigarName", "size", "time"].forEach(function (id) {
        document.getElementById(id).value = "";
    });
    document.getElementById("origin").value = "0";
    document.getElementById("score").value = "0";
    document.getElementById("again").checked = false;
};
(_a = document.getElementById("cigarButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    let _a;
    let cigar = {
        name: getInputValue("name"),
        cigarName: getInputValue("cigarName"),
        origin: parseInt(getInputValue("origin")),
        size: getInputValue("size"),
        time: getInputValue("time"),
        score: parseInt(getInputValue("score")),
        again: getChecked("again")
    };
    let values = [
        cigar.name,
        cigar.cigarName,
        Origin[cigar.origin],
        cigar.size,
        cigar.time,
        Score[cigar.score],
        cigar.again ? 'Yes' : 'No'
    ];
    let row = document.createElement("tr");
    values.forEach(function (value) {
        let td = document.createElement("td");
        td.textContent = value;
        row.appendChild(td);
    });
    (_a = document.getElementById("tBody")) === null || _a === void 0 ? void 0 : _a.appendChild(row);
    resetForm();
});
