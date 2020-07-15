function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
;

// scroll
$(document).ready(function () {
    $('.logo').click(() => {
        $('html, body').animate(
            {
                scrollTop: $('body').offset().top
            })
    });
});

$(document).ready(function () {
    $('.block-intro__arrow').click(() => {
        $('html, body').animate(
            {
                scrollTop: $('#properties').offset().top
            })
    });
});

$(document).ready(function () {
    $('.js-tab-trigger').click(function () {
        const id = $(this).attr('data-tab'),
            content = $('.js-tab-content[data-tab="' + id + '"]');
        $('.js-tab-content').hide();
        content.fadeIn().css({ 'display': 'flex' });


        $('.js-tab-trigger.active').removeClass('active');
        $(this).addClass('active');

        $('.js-tab-content.active').removeClass('active');
        content.addClass('active');

    });
});

$(document).ready(function () {
    $('.js-menu-toggler').click(function () {
        $(this).toggleClass('toggler--open');
        console.log($(this));

        $('.js-menu').fadeToggle();
        $('.block-nav__header').toggleClass('toggled')

    });
});
$(document).ready(function () {
    document.querySelectorAll('.nav__nav-item').forEach(item => {
        item.addEventListener('click', event => {

            const tab = (event.target.getAttribute('data-tab'));
            event.target.classList.add('active');
            if (tab === 'products' || tab === 'faqs') {
                $('html, body').animate({
                    scrollTop: $(`#${tab}`).offset().top - 100
                }, 1000)
            } else {
                $('html, body').animate({
                    scrollTop: $(`#${tab}`).offset().top
                }, 1000)
            }

        });
    });
});



//slider product

const products = [{
    id: 1,
    rating: 5,
    description: 'CBD 500 mg Orange Flavor Tincture',
    image: 'img/slider-products/bottle.png',
    price: 49.99,
}, {
    id: 2,
    rating: 5,
    description: 'Black ICE CBD Muscle Rub 200 mg',
    image: 'img/slider-products/tin-box.png',
    price: 49.99,
}, {
    id: 3,
    rating: 5,
    description: 'CBD+Curcumin Coffee 750 mg',
    image: 'img/slider-products/package.png',
    price: 79.99,
}, {
    id: 4,
    rating: 5,
    description: 'CBD Infused drink 15 mg Active CBD',
    image: 'img/slider-products/infused-drink.png',
    price: 29.99,
}, {
    id: 5,
    rating: 5,
    description: 'Premium CBD Mint Oildrops 300 mg',
    image: 'img/slider-products/mint-oil.png',
    price: 89.99,
}, {
    id: 6,
    rating: 5,
    description: 'Cheerful Buddha CBD Coffee 100 g',
    image: 'img/slider-products/coffee.png',
    price: 59.99,
}]

const blockSlider = $('.slider-products');

class Product {
    constructor(data) {
        this.id = data.id;
        this.rating = data.rating;
        this.description = data.description;
        this.image = data.image;
        this.price = data.price;
    }

    print() {
        let result = `<div class="slider-products__item">`;
        result += `<div class="block-main">`;
        result += `<div class="block-main__rating">`;
        for (let i = 0; i < this.rating; i++) {
            result += `<svg class="star"><use xlink:href="#star"></use></svg>`
        }
        result += `</div>`;
        result += `<div class="block-main__description">${this.description}</div>`;
        result += `<div class="block-main__image"><img src="${this.image}" alt="CBD"></div>`;
        result += `</div>`;
        result += `<div class="block-purchase">`;
        result += `<div class="block-purchase__price">&#36;${this.price} USD</div>`;
        result += `<button class="block-purchase__btn" onclick="addProduct(${this.id})"><span class="text">Shop</span><svg class="line"><use xlink:href="#line"></use></svg><i class="fas fa-shopping-cart"></i></button>`;
        result += `</div>`;
        result += `</div>`;

        blockSlider.append(result);
    }
}


class ProductsList {
    constructor(data) {
        this.data = data;
    }

    print() {
        this.data.forEach(element => {
            const product = new Product(element);
            product.print();
        })
    }
}

productList = new ProductsList(products);
productList.print();

$(document).ready(function () {
    $('.slider-products').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3500,
        dots: false,
        nextArrow: '<svg class="btn-arrow btn-arrow-right"><use xlink:href="#arrow"></use></svg>',
        prevArrow: '<svg class="btn-arrow btn-arrow-left"><use xlink:href="#arrow"></use></svg>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    // arrows: true,
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 768,
                settings: {
                    // arrows: true,
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 680,
                settings: {
                    // arrows: true,
                    slidesToShow: 1,
                }
            }
        ]
    });
});


//slider every day


const testimonials = [{
    rating: 5,
    description: 'I have tried another product after using this one successfully, <br> and I am Back for good! The flavour, the lightness of the oil and <br> the health benefits I have gotten with this oil are amazing!',
    author: 'Mark J.',
    image: 'img/slider-testimonials/couple.jpg'
}, {
    rating: 5,
    description: 'I have tried another product after using this one successfully, <br> and I am Back for good! The flavour, the lightness of the oil and <br> the health benefits I have gotten with this oil are amazing!',
    author: 'Mark J.',
    image: 'img/slider-testimonials/fields.jpg'
}, {
    rating: 5,
    description: 'I have tried another product after using this one successfully, <br> and I am Back for good! The flavour, the lightness of the oil and <br> the health benefits I have gotten with this oil are amazing!',
    author: 'Mark J.',
    image: 'img/slider-testimonials/man-walking-dog.jpg'
}, {
    rating: 5,
    description: 'I have tried another product after using this one successfully, <br> and I am Back for good! The flavour, the lightness of the oil and <br> the health benefits I have gotten with this oil are amazing!',
    author: 'Mark J.',
    image: 'img/slider-testimonials/village.jpg'
}]

const feedbackSlider = $('.feedback');


class Testimonial {
    constructor(data) {
        this.rating = data.rating;
        this.description = data.description;
        this.author = data.author;
        this.image = data.image;
    }

    print() {
        let result = `<div class="feedback__item">`;

        result += `<div class="img-slides">`;
        result += `<div class="img-slides__slide"><img src="${this.image}" alt=""></div>`;
        result += `</div>`;

        result += `<div class="testimonial">`;
        result += `<div class="testimonial__rating">`;
        for (let i = 0; i < this.rating; i++) {
            result += `<svg class="star"><use xlink:href="#star"></use></svg>`
        }
        result += `</div>`;
        result += `<div class="testimonial__description">${this.description}</div>`;
        result += `<div class="testimonial__author"><svg class="line"><use xlink:href="#line"></use></svg>${this.author}</div>`;
        result += `</div>`;


        result += `</div>`;



        feedbackSlider.append(result);
    }
}


class TestimonialsList {
    constructor(data) {
        this.data = data;
    }

    print() {
        this.data.forEach(element => {
            const testimonial = new Testimonial(element);
            testimonial.print();
        })
    }
}

testimonialList = new TestimonialsList(testimonials);
testimonialList.print();


$(document).ready(function () {
    $('.feedback').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        autoplaySpeed: 3500,
        fade: true,
        nextArrow: '<svg class="btn-arrow btn-arrow-right testimonials"><use xlink:href="#arrow"></use></svg>',
        prevArrow: '<svg class="btn-arrow btn-arrow-left testimonials"><use xlink:href="#arrow"></use></svg>',
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    arrows: true,
                    slidesToShow: 1,

                }
            }, {
                breakpoint: 1035,
                settings: {
                    arrows: false,
                    slidesToShow: 1,

                }
            }
        ]
    });
});



//frequently asked questions

$(document).ready(function () {
    $('.block-question').click(function () {
        $('.block-question__minus').css({ 'display': 'none' });
        $('.block-question__plus').css({ 'display': 'block' });
        if ($(this).hasClass('active')) {
            $('.block-question').removeClass('active');
            $(this).removeClass('active');
            $(this).children('.block-question__plus').css({ 'display': 'block' });
            $(this).children('.block-question__minus').css({ 'display': 'none' });
            $('.block-answer').not($(this).next()).slideUp();
            $(this).next('.block-answer').slideToggle();
        } else {
            $('.block-question').removeClass('active');
            $(this).addClass('active');
            $(this).children('.block-question__minus').css({ 'display': 'block' });
            $(this).children('.block-question__plus').css({ 'display': 'none' });
            $('.block-answer').not($(this).next()).slideUp();
            $(this).next('.block-answer').slideToggle();
        }
    });
});





let shoppingList = [];
function toggleCart() {

    $('.block-cart').fadeToggle(400).css({ 'display': 'flex' });
}

const productListElement = $('.product-list');

function updateQuantity() {
    $('#cart').html(`Cart(${shoppingList.length})`);
}

function updateTotalPrice() {
    let total = 0;
    shoppingList.forEach(el => {
        total += el.price * el.quantity;
    })
    $('#total').text(`$${total.toFixed(2)}`);
}

function addProduct(id) {
    const product = products.find(el => el.id === id);
    const existItem = shoppingList.find(el => el.id === id);
    if (existItem) {
        existItem.quantity++;
    } else {
        shoppingList.push({
            id: product.id,
            description: product.description,
            image: product.image,
            price: product.price,
            quantity: 1
        });
    }
    updateCart();
    updateQuantity();
    updateTotalPrice();
    console.log(shoppingList);
}

function removeProduct(id) {
    shoppingList = shoppingList.filter(el => el.id !== id);
    updateCart();
    updateQuantity();
    updateTotalPrice();
}


function updateCart() {
    let result = '';
    shoppingList.forEach(product => {
        result += `<div class="product-list__item">`;
        result += `<div class="product-image"><img class="product-image__img" src="${product.image}" alt=""></div>`;
        result += `<div class="product-info">`;
        result += `<div class="product-info__price">&#36;${product.price}</div>`;
        result += `<div class="product-info__title">${product.description}</div>`;
        result += `<div class="qty">Qty: <span class="qty__figure">${product.quantity}</span></div>`;
        result += `</div>`;
        result += `<div class="product-delete" onclick="removeProduct(${product.id})"><i class="fas fa-times product-delete__icon"></i></div>`;
        result += `</div>`;
        result += `</div>`;
    })

    productListElement.html(result);
}


