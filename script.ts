// Navbar sidebar
function showSideBar(): void {
    document.querySelector<HTMLElement>('.sidebar')!.style.display = 'flex';
}

function hideSideBar(): void {
    document.querySelector<HTMLElement>('.sidebar')!.style.display = 'none';
}

// Enums
enum Score {
    Poor,
    Fair,
    Average,
    Good,
    Excellent
}

enum Origin {
    Cuba,
    DominicanRepublic,
    Nicaragua,
    Honduras,
    Other
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

// Utility to get form input value
const getInputValue = (id: string): string =>
    (document.getElementById(id) as HTMLInputElement).value;

const getChecked = (id: string): boolean =>
    (document.getElementById(id) as HTMLInputElement).checked;

const resetForm = (): void => {
    ["name", "cigarName", "size", "time"].forEach(id => {
        (document.getElementById(id) as HTMLInputElement).value = "";
    });
    (document.getElementById("origin") as HTMLSelectElement).value = "0";
    (document.getElementById("score") as HTMLSelectElement).value = "0";
    (document.getElementById("again") as HTMLInputElement).checked = false;
};

document.getElementById("cigarButton")?.addEventListener("click", () => {
    const cigar: CigarScore = {
        name: getInputValue("name"),
        cigarName: getInputValue("cigarName"),
        origin: parseInt(getInputValue("origin")) as Origin,
        size: getInputValue("size"),
        time: getInputValue("time"),
        score: parseInt(getInputValue("score")) as Score,
        again: getChecked("again")
    };

    const values = [
        cigar.name,
        cigar.cigarName,
        Origin[cigar.origin],
        cigar.size,
        cigar.time,
        Score[cigar.score],
        cigar.again ? 'Yes' : 'No'
    ];

    const row = document.createElement("tr");

    values.forEach(value => {
        const td = document.createElement("td");
        td.textContent = value;
        row.appendChild(td);
    });

    document.getElementById("tBody")?.appendChild(row);
    resetForm();
});
