//Navbar sidebar

function showSideBar(): void {
    const sidebar: HTMLElement | null = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.style.display = 'flex';
    }
}

function hideSideBar(): void {
    const sidebar: HTMLElement | null = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.style.display = 'none';
    }
}

//Score

enum Score {
    Poor = 0,
    Fair = 1,
    Average = 2,
    Good = 3,
    Excellent = 4
}

enum Origin {
    Cuba = 0,
    DominicanRepublic = 1,
    Nicaragua = 2,
    Honduras = 3,
    Other = 4
}

interface CigarScore {
    name: string;
    cigarName: string;
    origin: Origin;
    size: string;
    time: string;
    score: Score;
    again: boolean;
}

document.getElementById("cigarButton")?.addEventListener("click", function () {
    var n = (document.getElementById("name") as HTMLInputElement).value;
    var c = (document.getElementById("cigarName") as HTMLInputElement).value;
    var o = parseInt((document.getElementById("origin") as HTMLSelectElement).value);
    var s = (document.getElementById("size") as HTMLInputElement).value;
    var t = (document.getElementById("time") as HTMLInputElement).value;
    var so = parseInt((document.getElementById("score") as HTMLSelectElement).value);
    var a = (document.getElementById("again") as HTMLInputElement).checked;

    var cigar: CigarScore = {
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

    document.getElementById("tBody")?.appendChild(tr);
    
    (document.getElementById("name") as HTMLInputElement).value = "";
    (document.getElementById("cigarName") as HTMLInputElement).value = "";
    (document.getElementById("origin") as HTMLSelectElement).value = "0";
    (document.getElementById("size") as HTMLInputElement).value = "";
    (document.getElementById("time") as HTMLInputElement).value = "";
    (document.getElementById("score") as HTMLSelectElement).value = "0";
    (document.getElementById("again") as HTMLInputElement).checked = false;
});
