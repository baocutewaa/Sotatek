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