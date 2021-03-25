let diningHalls;
let foodOptions;

const displayDiningHall = (ev) => {
    const hallID = ev.currentTarget.id;
    const diningHall = diningHalls[hallID];
    const article = document.querySelector('article');
    article.innerHTML = `
        <section id="section-1">
            <h2>Section 1</h2>
            <section 
                class="bg-image" 
                style="background-image:url('${diningHall.image_url}');">
            </section>
        </section>
        <section id="section-2">
            <h2>${diningHall.name}</h2>
            <section>
                <p>${diningHall.display_address}</p>
                <p>Time Open: ${diningHall.time_open}</p>
            </section>
        </section>
    `;
    displayFoodOptions(hallID);
};

const displayFoodOptions = (hallID) => {
    const section3 = document.querySelector('#section-3');
    let html = "<h2>Stations</h2>";
    for (const station of foodOptions) {
        if (station.locations.indexOf(hallID) > -1) {
            html += `
                <h3>${station.name}</h3>
            `;
            html += '<table>'
            for (const item of station.items) {
                html += `
                    <tr>
                        <td style="width: 120px;">${item}</td>
                        <td style="width: 100px;">
                            <select>
                                <option value="sm">Small</option>
                                <option value="md">Medium</option>
                                <option value="lg">Large</option>
                            </select>
                        <td>
                            <button data-item="${item}">Add to Cart</button>
                        </td>
                    </tr>
                `;
            }
            html += '</table>'
        }
    }
    section3.innerHTML = html;
}

const attachClickEvents = () => {
    const menu = document.querySelector('#menu');
    const links = menu.querySelectorAll('a');
    for (const link of links) {
        link.onclick = displayDiningHall; // this is what modifies the template
    }
};


// We are fetching data from two local files and storing them to
// local variables that we can later access.
fetch('diningHalls.json')
    .then(response => response.json())
    .then(data => {
        diningHalls = data; // setting global variable
    })
    .then(data => {
        return fetch('foodOptions.json');
    })
    .then(response => response.json())
    .then(data => {
        foodOptions = data; // setting global variable
    })
    //also, we are attaching click events to each link:
    .then(attachClickEvents)
    .then(() => {
        document.querySelector('#menu a').click();
    });