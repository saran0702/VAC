const params = new URLSearchParams(window.location.search);

document.getElementById("itemName").textContent = params.get("name");
document.getElementById("itemPrice").textContent = "₹" + params.get("price");
document.getElementById("itemImage").src = params.get("image");
document.getElementById("itemDescription").textContent = params.get("description");
