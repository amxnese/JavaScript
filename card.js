let Title = "Amine" , pargrapgh = "I Hate JavaScript" , date = "06/04";

let card = `
    <div class="card">
        <h3>Hello ${Title}</h3>
        <p>${pargrapgh}</p>
        <span>${date}</span>
    </div>
`;

document.write(card.repeat(4))