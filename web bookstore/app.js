/* Data user */
const users = [
  {role:"admin", email:"admin@book.com", pass:"admin123"},
  {role:"user", email:"user@book.com", pass:"user123"}
];

/* Data buku */
const books = [
  {id:1,title:"Algoritma Pemrograman",price:65000,img:"https://cdn.gramedia.com/uploads/items/9786230025019.jpg"},
  {id:2,title:"Cybersecurity",price:85000,img:"https://m.media-amazon.com/images/I/61mE0OHMTNL._SL1500_.jpg"},
  {id:3,title:"UI UX Modern",price:90000,img:"https://m.media-amazon.com/images/I/71cB5KXqt5L._SL1500_.jpg"},
  {id:4,title:"Basis Data MySQL",price:75000,img:"https://cdn.gramedia.com/uploads/items/9786020495029.jpg"}
];

/* Render buku */
window.onload = () => {
  const container = document.getElementById("books");
  if(container){
    container.innerHTML = books.map(b => `
      <div class="book-card">
        <img src="${b.img}">
        <h4>${b.title}</h4>
        <p>Rp ${b.price.toLocaleString()}</p>
        <button class="btn" onclick="addToCart(${b.id})">Tambah</button>
      </div>
    `).join("");
  }
};

/* Cart */
let cart = [];
function addToCart(id){
  cart.push(books.find(x=>x.id===id));
  alert("Buku ditambahkan ke keranjang");
}
function toggleCart(){document.getElementById("cartModal").classList.toggle("hidden")}
document.getElementById("cartBtn")?.addEventListener("click",toggleCart);

function checkout(){
  alert("Transaksi selesai, terima kasih");
  cart=[];
  toggleCart();
}

/* Login */
function login(){
  const email=document.getElementById("email").value;
  const pass=document.getElementById("password").value;

  const found = users.find(u=>u.email===email && u.pass===pass);

  if(!found){
    document.getElementById("errMsg").innerText="Email atau password salah";
    return;
  }

  localStorage.setItem("role",found.role);

  if(found.role==="admin") location.href="dashboard.html";
  else location.href="index.html";
}

function checkAdmin(){
  if(localStorage.getItem("role")!=="admin"){
    alert("Akses ditolak");
    location.href="login.html";
  }
}

function logout(){
  localStorage.removeItem("role");
  location.href="login.html";
}
