export const sendWhatsApp = (product, user) => {
  const phone = "7877237489"; // 👈 Replace with your WhatsApp number

  const message = `
🎁 *New Order — CrownCraft Hamper*

🛍️ *Product:* ${product.name}
💰 *Price:* ₹${product.price}
📦 *Category:* ${product.category}

👤 *Customer Details:*
• Name: ${user.name}
• Phone: ${user.phone}
• Email: ${user.email}
• Address: ${user.address}

✅ *Payment:* Done via UPI QR
📸 Screenshot will be attached manually

Thank you for your order! 💝
  `.trim();

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};