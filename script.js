<<<<<<< HEAD
// Mảng chứa các item trong giỏ hàng
let cart = [];

// Hàm thêm sản phẩm vào giỏ (Bạn B giả định có biến toàn cục products của nhóm)
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    renderCart();
}

// Hàm hiển thị giỏ hàng và tính tổng tiền
function renderCart() {
    const cartContainer = document.getElementById('cart-container');
    const totalInput = document.getElementById('total-price');
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p class="empty-cart">Giỏ hàng trống</p>';
        totalInput.innerText = '0';
        return;
    }

    // Hiển thị danh sách item trong giỏ
    cartContainer.innerHTML = cart.map(item => `
        <div class="cart-item" style="display:flex; justify-content:space-between; margin-bottom:10px;">
            <span>${item.name} (x${item.quantity})</span>
            <span>${(item.price * item.quantity).toLocaleString()}đ</span>
        </div>
    `).join('');

    // Tính tổng tiền (Ăn trọn 2đ phần này)
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalInput.innerText = total.toLocaleString();
}
=======
let products = [];

//Fetch dữ liệu từ file products.json
async function loadProducts() {
    try {
        const response = await fetch('products.json');
        products = await response.json();
        renderProducts(products);
    } catch (error) {
        console.error("Lỗi tải dữ liệu sản phẩm:", error);
    }
}

//Hiển thị sản phẩm ra giao diện
function renderProducts(productList) {
    const container = document.getElementById('products-container');
    container.innerHTML = '';
    
    productList.forEach(product => {
        const productHtml = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Giá: ${product.price.toLocaleString()}đ</p>
                <button onclick="addToCart(${product.id})">Thêm vào giỏ</button>
            </div>
        `;
        container.innerHTML += productHtml;
    });
}

//Chạy hàm load khi trang web tải xong
document.addEventListener('DOMContentLoaded', loadProducts);
>>>>>>> main
