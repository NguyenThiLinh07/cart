const btn = document.querySelectorAll('.pro__item button');

btn.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        var btnItem = event.target;
        var proItem = btnItem.parentElement;
        var proImg = proItem.querySelector('img').src;
        var proPrice = proItem.querySelector('.pro__item-price span').innerText;
        var proName = proItem.querySelector('.pro__item-price h1').innerText;
        // console.log(proImg, proPrice, proName);

        addCart(proImg, proName, proPrice);
    });
})

function addCart(proImg, proName, proPrice) {
    // var tr = document.createElement('tr');
    // var cartItems = document.querySelectorAll('tbody tr');
    // cartItems.forEach((e, i) => {
    //     var proName1 = e.querySelector('.title').innerHTML;
    //     if (proName1 == proName) {
    //         alert('Sản phẩm này đã có trong giỏ hàng. Bạn vào giỏ hàng để thêm số lượng sản phẩm nhé!');
    //         return;
    //     }
    // })
    // var tbody = document.querySelector('tbody');
    // tr.innerHTML = `
    //         <td class="cart__img">
    //             <img src="${proImg}" alt=""> <span class="title">${proName}</span>
    //         </td>
    //         <td class="cart__price">
    //             <p><span>${proPrice}</span><sup>đ</sup></p>
    //         </td>
    //         <td class="cart__quantity"><input type="number" value="1" min="1"></td>
    //         <td class="cart__delete">Xóa</td>
    //     `;
    // tbody.append(tr);
    // cartTotal();
    var tr = document.createElement('tr');
    var cartItems = document.querySelectorAll('tbody tr');
    for (var i = 0; i < cartItems.length; i++) {
        var proName1 = document.querySelectorAll('.title');
        if (proName1[i].innerHTML == proName) {
            alert('Sản phẩm của bạn đã có trong giỏ hàng');
            return;
        }
    }
    tr.innerHTML = `
    
            <td class="cart__img">
                <img src="${proImg}" alt=""> <span class="title">${proName}</span>
            </td>
            <td class="cart__price">
                <p><span>${proPrice}</span><sup>đ</sup></p>
            </td>
            <td class="cart__quantity"><input type="number" value="1" min="1"></td>
            <td class="cart__delete">Xóa</td>
        
    `;
    var cartTable = document.querySelector('tbody');
    cartTable.append(tr);
    cartTotal();

    deleteCart();

    inputChange();
}

function deleteCart() {
    var cartItems = document.querySelectorAll('tbody tr');
    cartItems.forEach((e, i) => {
        var deleItem = e.querySelector('.cart__delete');
        deleItem.addEventListener('click', () => {
            e.remove();
            cartTotal();
        });
    })
}



function cartTotal() {
    var cartItems = document.querySelectorAll('tbody tr');
    var totalPrice = 0;
    cartItems.forEach((e, i) => {
        var price = e.querySelector('.cart__price span').innerHTML;
        var quantity = e.querySelector('input').value;
        totalPrice += parseFloat(price) * 1000000 * parseInt(quantity);
        // console.log(price, quantity, totalPrice);
    })
    var totalCart = document.querySelector('.price-total span');
    totalCart.innerHTML = totalPrice.toLocaleString('de-DE');
}

function inputChange() {
    var cartItems = document.querySelectorAll('tbody tr');
    cartItems.forEach((e, i) => {
        var inputValue = e.querySelector('input');
        inputValue.addEventListener('change', () => {
            cartTotal();
        });
    })
}