
const makeRedCircle = (ev) => {
    console.log(ev);

    const color = document.querySelector('#color').value;
    const size = document.querySelector('#size').value;
    const shape = document.querySelector('#shape').value;
    let svg;
    if (shape === "circle") {
        const radius = size / 2;
        svg= `
            <circle cx="${ev.offsetX}" cy="${ev.offsetY}" r="${radius}" stroke="black" stroke-width="3" fill="${color}" />
        `;
    } else {
        svg = `
            <rect x="${ev.offsetX - size/2 }" y="${ev.offsetY - size/2}" width="${size}" height="${size}" stroke="black" stroke-width="3" fill="${color}" />
        `;
    }
    document.querySelector('svg').insertAdjacentHTML("beforeend", svg);
};



document.querySelector('svg').onclick = makeRedCircle;
