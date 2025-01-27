import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={styles.container}>
      <h2>{greeting}</h2>
      <p>Catálogo de productos próximamente...</p>
    </div>
  );
};

const styles = {
  container: { padding: "2rem", textAlign: "center" },
};

export default ItemListContainer;
