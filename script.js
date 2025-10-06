// 🔹 Replace this with your WhatsApp number (international format)
const phoneNumber = "254706648650";

// Find all CTA buttons
const buttons = document.querySelectorAll(".cta-btn");

// Add click event to each button
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".product-card");
    const name = card.dataset.name;
    const price = card.dataset.price;
    const image = card.dataset.image;

    // Build message with product info
    const message = `Hello Kakuma Wholesale! 👋%0A%0AI'm interested in:%0A🛍️ *${name}*%0A💰 Price: ${price}%0A📸 Image: ${image}%0A%0ACan you confirm availability?`;

    // Open WhatsApp chat
    const waUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(waUrl, "_blank");
  });
});

console.log("WhatsApp dynamic product links loaded ✅");
