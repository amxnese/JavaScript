let Title = "Amine" , pargrapgh = "Roses Are Red Violets Are Blue" , date = "06/04";

let card = `
    <div class="card">
        <h3>Hello ${Title}</h3>
        <p>${pargrapgh}</p>
        <span>${date}</span>
    </div>
`;

document.write(card.repeat(2))