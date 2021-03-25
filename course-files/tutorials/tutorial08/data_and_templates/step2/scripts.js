let restaurants;
let reviews;

const createMenu = () => {
    const menu = document.querySelector('#menu');
    menu.innerHTML = "";
    for (const id in restaurants) {
        const restaurant = restaurants[id];
        menu.innerHTML += `
            <a href="#" id="${id}">
                ${restaurant.name}
            </a>
        `;
    }
};

const displayRestaurant = (ev) => {
    const restaurantID = ev.currentTarget.id;
    const restaurant = restaurants[restaurantID];
    const restaurantReviews = reviews[restaurantID];
    const section1 = document.querySelector('#section-1');
    const section2 = document.querySelector('#section-2');
    const section3 = document.querySelector('#section-3');
    section1.innerHTML = `
        <h2>Section 1</h2>
        <section 
            class="bg-image" 
            style="background-image:url('${restaurant.image_url}');">
        </section>`;

    section2.innerHTML = `
        <h2>${restaurant.name}</h2>
        <table>
            <tr>
                <td>Address:</td>
                <td>${restaurant.display_address}</td>
            </tr>
            <tr>
                <td>Rating:</td>
                <td>${restaurant.rating}</td>
            </tr>
            <tr>
                <td>Price:</td>
                <td>${restaurant.price}</td>
            </tr>
        </table>
    `;
    reviewsHTML = "";
    for (const review of restaurantReviews) {
        reviewsHTML += `
            <div>
                <h4>${review.rating}</h4>
                <p>
                <strong>${review.user}</strong> 
                said "${review.comments}"</p>
            </div>
        `;
    }
    if (restaurantReviews.length === 0) {
        reviewsHTML = '<p>No reviews found</p>';
    }
    section3.innerHTML = `<h2>Reviews</h2>` + reviewsHTML;
};

const attachClickEvents = () => {
    const menu = document.querySelector('#menu');
    const links = menu.querySelectorAll('a');
    for (const link of links) {
        link.onclick = displayRestaurant;
    }
};

fetch('restaurants.json')
    .then(response => response.json())
    .then(data => {
        restaurants = data; // setting global variable
    })
    .then(() => {
        return fetch('reviews.json');
    })
    .then(response => response.json())
    .then(data => {
        reviews = data; // setting global variable
    })
    .then(createMenu)
    .then(attachClickEvents)
    .then(() => {
        document.querySelector('#menu a').click();
    });