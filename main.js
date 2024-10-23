let db = [
    {
        id: '00001',
        pic: '00001.png',
        company: 'Sony',
        name: '4K TV Game Mini Arcade Rocker Console 32GB/64GB',
        rating: 4,
        price: 29.80,
        discount: 0
    },
    {
        id: '00002',
        pic: '00002.png',
        company: 'Google',
        name: 'Cancelling Headset Music Sport Deep Bass',
        rating: 4,
        price: 39.80,
        discount: 0
    },
    {
        id: '00003',
        pic: '00003.png',
        company: 'Apple',
        name: 'T500BT Original Wireless Bluetooth Headphone',
        rating: 4,
        price: 69.80,
        discount: 15
    },
    {
        id: '00004',
        pic: '00004.png',
        company: 'Toshiba',
        name: 'Black Walnut Wood & Aluminum Headphone Stand',
        rating: 4,
        price: 70.80,
        discount: 20
    },
    {
        id: '00005',
        pic: '00005.png',
        company: 'BassX',
        name: 'Beats Studio3 Wireless Bluetooth Headphones',
        rating: 4,
        price: 29.80,
        discount: 10
    },
    {
        id: '00006',
        pic: '00006.png',
        company: 'Konika',
        name: 'Marshall MAJOR III Wireless Folding Bluetooth',
        rating: 4,
        price: 39.80,
        discount: 10
    },
    {
        id: '00007',
        pic: '00007.png',
        company: 'Apple',
        name: 'T500BT Original Wireless Bluetooth Headphone',
        rating: 4,
        price: 69.80,
        discount: 0
    },
    {
        id: '00008',
        pic: '00008.png',
        company: 'Toshiba',
        name: 'Black Walnut Wood & Aluminum Headphone Stand',
        rating: 4,
        price: 70.80,
        discount: 0
    },
    {
        id: '00009',
        pic: '00009.png',
        company: 'BassX',
        name: 'Beats Studio3 Wireless Bluetooth Headphones',
        rating: 4,
        price: 29.80,
        discount: 0
    },
    {
        id: '000010',
        pic: '000010.png',
        company: 'Konika',
        name: 'Marshall MAJOR III Wireless Folding Bluetooth',
        rating: 4,
        price: 39.80,
        discount: 0
    },
    {
        id: '000011',
        pic: '000011.png',
        company: 'Apple',
        name: 'T500BT Original Wireless Bluetooth Headphone',
        rating: 4,
        price: 69.80,
        discount: 25
    },
    {
        id: '000012',
        pic: '000012.png',
        company: 'Toshiba',
        name: 'Black Walnut Wood & Aluminum Headphone Stand',
        rating: 4,
        price: 70.80,
        discount: 0
    }
];




for (let el of db) {

    if (el.discount > 0) {
        $('.productContainer').append(`<div class='productItem'>
        <div class="discountContainer">
            <div class='discountItem'>
               -${el.discount}
            </div>
        </div>
        <div class='photoContainer'><img src='./img/${el.pic}'></div>
        <h5>${el.company}</h5>
        <h4>${el.name}</h4>
          <div class="starContainer">
            
        </div>
        <div class='productRow'>
            <div>$${el.price}</div>
            <button class = "addToCart" id=${el.id}>Add +</button>
        </div>
    </div>`);
    } else {
        $('.productContainer').append(`<div class='productItem'>
        <div class="discountContainer"></div>
        <div class='photoContainer'><img src='./img/${el.pic}'></div>
        <h5>${el.company}</h5>
        <h4>${el.name}</h4>
        <div class="starContainer">
            
        </div>
        <div class='productRow'>
            <div>$${el.price}</div>
            <button class = "addToCart" id=${el.id}>Add +</button>
        </div>
    </div>`);
    }
}

let cartDB = [];

$('.productContainer').on('click', '.addToCart', function (e) {
    let productId = $(this).attr('id'); // Отримуємо id продукту
    let product = db.find(el => el.id == productId); // Знаходимо продукт в базі
    
    if (!cartDB.includes(product)) {
        cartDB.push(product);
    }
    
    console.log(cartDB);
    
    if (cartDB.length > 0) {
        $('.circle').css('display', 'flex'); // Відображаємо кружечок
        $('.circle').text(cartDB.length); // Оновлюємо текст з кількістю товарів
    }
    $('#totalPrice').text(calcSum(cartDB));
});


$(document).ready(function() {
    $('#x-mark').click(function() {
        $('.cartInner').css('display', 'none');
    });
});

let cartOpen = false;

$('.cartContainer').click(function() {
    $('.cartInner').toggle();
    $('.cartList').empty(); // Очищаємо список перед відображенням

    // Додаємо товари з кошика до списку
    for (let el of cartDB) {
        $('.cartList').append(`
            <div class='cartListItem'>
                <div>${el.name}</div>
                <div>$${el.price.toFixed(2)}</div>
            </div>
        `);
    }
});

function calcSum(arr) {
    let res = 0;
    for (let el of arr) {
        res += el.price;
    }
    return res.toFixed(2); // Повертаємо суму з двома знаками після коми
}

$('#clear').click(function () {
    // Очищуємо масив кошика
    cartDB = [];

    // Ховаємо кружечок з кількістю товарів
    $('.circle').css('display', 'none');

    // Очищаємо список товарів у кошику
    $('.cartList').empty();

    // Оновлюємо загальну суму
    $('#totalPrice').text('0$');
});



function starSet(current, full) {
    $('.starContainer').empty();
    let otherStars = full - current;

    for (let i = n; i < current; i++) {
        $('.starContainer').append(`<i class="fa-solid fa-star" style="color: rgb(242, 172, 10);"></i>`);
    }
    for (let i = n; i < otherStars; i++) {
        $('.starContainer').append(`<i class="fa-solid fa-star" ></i>`);
    }

}

starSet(4, 5);
$('.cartContainer').click(function() {
    $('.cartInner').toggle();
});









