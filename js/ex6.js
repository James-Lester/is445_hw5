window.addEventListener("DOMContentLoaded", domLoaded);

const words = [{
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished"
}, {
    term: "Tautology",
    definition: "logical argument constructed in such a way that it is logically irrefutable"
}, {
    term: "Oxymoron",
    definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];


function domLoaded() {
    document.styleSheets[0].insertRule("dt { font-weight: bold; }");
    ex6();
}

const ex6 = () => {
    const dl = document.createElement("dl");

    words.forEach((w) => {
        let dt = document.createElement("dt");
        dt.innerText = w.term;
        dl.appendChild(dt);

        let dd = document.createElement("dd");
        dd.innerText = w.definition;
        dl.appendChild(dd);
    })

    document.getElementById("content").appendChild(dl)
}