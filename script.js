//Navbar sidebar
var _a;
function showSideBar() {
    var sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.style.display = 'flex';
    }
}
function hideSideBar() {
    var sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.style.display = 'none';
    }
}
//Score
var Score;
(function (Score) {
    Score[Score["Poor"] = 0] = "Poor";
    Score[Score["Fair"] = 1] = "Fair";
    Score[Score["Average"] = 2] = "Average";
    Score[Score["Good"] = 3] = "Good";
    Score[Score["Excellent"] = 4] = "Excellent";
})(Score || (Score = {}));
var Origin;
(function (Origin) {
    Origin[Origin["Cuba"] = 0] = "Cuba";
    Origin[Origin["DominicanRepublic"] = 1] = "DominicanRepublic";
    Origin[Origin["Nicaragua"] = 2] = "Nicaragua";
    Origin[Origin["Honduras"] = 3] = "Honduras";
    Origin[Origin["Other"] = 4] = "Other";
})(Origin || (Origin = {}));
(_a = document.getElementById("cigarButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var _a;
    var n = document.getElementById("name").value;
    var c = document.getElementById("cigarName").value;
    var o = parseInt(document.getElementById("origin").value);
    var s = document.getElementById("size").value;
    var t = document.getElementById("time").value;
    var so = parseInt(document.getElementById("score").value);
    var a = document.getElementById("again").checked;
    var cigar = {
        name: n,
        cigarName: c,
        origin: o,
        size: s,
        time: t,
        score: so,
        again: a
    };
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");
    var td7 = document.createElement("td");
    td1.appendChild(document.createTextNode(cigar.name));
    td2.appendChild(document.createTextNode(cigar.cigarName));
    td3.appendChild(document.createTextNode(Origin[cigar.origin]));
    td4.appendChild(document.createTextNode(cigar.size));
    td5.appendChild(document.createTextNode(cigar.time));
    td6.appendChild(document.createTextNode(Score[cigar.score]));
    td7.appendChild(document.createTextNode(cigar.again ? 'Yes' : 'No'));
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    (_a = document.getElementById("tBody")) === null || _a === void 0 ? void 0 : _a.appendChild(tr);
    document.getElementById("name").value = "";
    document.getElementById("cigarName").value = "";
    document.getElementById("origin").value = "0";
    document.getElementById("size").value = "";
    document.getElementById("time").value = "";
    document.getElementById("score").value = "0";
    document.getElementById("again").checked = false;
});
