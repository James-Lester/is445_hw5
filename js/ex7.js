window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    document.styleSheets[0].insertRule(".sum { color: red; font-weight: bold; }");

    ex7();
}

const ex7 = () => {
    let a = prompt("Enter an integer");
    let b = prompt("Enter another integer");

    if (isNaN(parseInt(a)) || isNaN(parseInt(b))) {
        const errElement = document.createElement("p");
        errElement.id = "error-text";

        const errSpan = document.createElement("span");
        errSpan.style.color = "red";
        errSpan.style.fontWeight = "bold";
        errSpan.innerText = "Error! ";
        errElement.appendChild(errSpan);

        const errText = document.createElement("span");
        errText.innerText = `You entered "${a}" and "${b}". `
        errElement.appendChild(errText);

        const tryAgain = document.createElement("a");
        tryAgain.href = "javascript:window.location.reload(true)";
        tryAgain.textContent = "Try again."
        errElement.appendChild(tryAgain);

        document.getElementById("content").appendChild(errElement);
        return;
    }

    let sum = `<p>${a} + ${b} = <span class="sum">${parseInt(a) + parseInt(b)}</span></p>`
    sum += `<p><a href="javascript:window.location.reload(true)">Try again.</a></p>`
    document.getElementById("content").innerHTML = sum;
}