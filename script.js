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