console.log("skrypty załadowane!")

const owce = [
    {
        name: "Janusz",
        color: "white",
        age: 7,
    },
    {
        name: "Milka",
        color: "black",
        age: 5,
    },
    {
        name: "Marek",
        color: "white",
        age: 3,
    },
    {
        name: "Kunegunda",
        color: "white",
        age: 10,
    },
    {
        name: "Marian",
        color: "black",
        age: 6,
    },
    {
        name: "Radzio",
        color: "black",
        age: 8,
    },
];
const partiaOwiec = owce.map( owca => `
<div class="owca">
    <h3>${owca.name}</h3>
    <h3>${owca.color}</h3>
    <h3>${owca.age}</h3>
    </div>
`);

const tekstDoWstawienia = partiaOwiec.join("");

const miejsceNaTekst = document.querySelector("#miejsceNaOwce");

miejsceNaTekst.innerHTML = tekstDoWstawienia;
