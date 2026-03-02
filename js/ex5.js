window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    document.styleSheets[0].insertRule("td { text-align: center; }");
    ex5(12, 4, "lightblue", "output");
}

const ex5 = (tableLength, highlightNth, backgroundColor, targetId) => {
    const table = document.createElement("table");
    const className = `table-${tableLength}-${highlightNth}-${backgroundColor}`;
    table.classList.add(className);

    const rule = `.${className} tr:nth-child(${parseFloat(highlightNth)}n) { background-color: ${backgroundColor}; }`;
    // Will look like this: .table-12-4-lightblue tr:nth-child(4n) { background-color: lightblue; }
    console.log(rule);
    document.styleSheets[0].insertRule(rule);

    for (let i = 0; i < tableLength; i++) {
        let child = document.createElement("tr");
        child.innerHTML = `<td>${i + 1}</td>`;

        table.appendChild(child);
    }

    document.getElementById(targetId).appendChild(table);
}