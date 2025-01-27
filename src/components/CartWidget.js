import React from "react";

const CartWidget = () => {
  return (
    <div style={styles.cart}>
      🛒 <span>3</span>
    </div>
  );
};

const styles = {
  cart: { fontSize: "1.2rem", display: "flex", alignItems: "center", gap: "0.5rem" },
};

export default CartWidget;
