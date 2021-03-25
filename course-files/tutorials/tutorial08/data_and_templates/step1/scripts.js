let restaurants;
let reviews;

const displayRestaurant = (ev) => {
    const restaurantID = ev.currentTarget.id;
    const restaurant = restaurants[restaurantID];
    const restaurantReviews = reviews[restaurantID];
    const article = document.querySelector('article');
    const section3 = document.querySelector('#section-3');
    article.innerHTML = `
        <section id="section-1">
            <h2>Section 1</h2>
            <section 
                class="bg-image" 
                style="background-image:url('${restaurant.image_url}');">
            </section>
        </section>
        <section id="section-2">
            <h2>${restaurant.name}</h2>
            <section>
                <p>${restaurant.display_address}</p>
                <p>Rating: ${restaurant.rating}</p>
                <p>Price: ${restaurant.price}</p>
            </section>
        </section>
    `;

    if (restaurantReviews.length === 0) {
        section3.reviewsHTML = `
            <h2>Reviews</h2><p>No reviews found</p>
        `;
    } else {
        reviewsHTML = "";
        for (const review of restaurantReviews) {
            reviewsHTML += `
                <p>${review.comments}</p>
                <p>${review.user}</p>
                <p>${review.rating}</p>
            `;
        }
        section3.innerHTML = `<h2>Reviews</h2>` + reviewsHTML;
    }
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
    .then(attachClickEvents)
    .then(() => {
        document.querySelector('#menu a').click();
    });