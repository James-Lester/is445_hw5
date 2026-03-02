window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    ex2();
    ex3();
    ex4();
}

const ex2 = () => {
    const nodes = document.querySelectorAll('[class="400level"]');
    nodes.forEach((n) => console.log(n.textContent));
}

const ex3 = () => {
    const nodes = document.querySelectorAll("p");
    nodes.forEach((n) => {
        n.style.setProperty("background-color", "yellow");
        n.style.setProperty("font-weight", "bold")
    })
}

const ex4 = () => {
    const links = document.getElementById("links");
    const children = links.children;
    const newElement = document.createElement("li");
    newElement.innerHTML = `<a href="https://www.csulb.edu/college-of-business">College of Business</a>`

    links.appendChild(newElement);
    links.insertBefore(children[2], children[1]);
}