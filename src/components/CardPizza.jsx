const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body text-center">
        <h4 className="card-title text-start fw-light">Pizza {name}</h4>
        <hr />
        <p className="card-text text-muted mb-0">Ingredientes:</p>
        <p className="card-text small">🍕 {ingredients.join(", ")}</p>
        <hr />
        <h5 className="fw-bold mb-3">Precio: ${price.toLocaleString('es-CL')}</h5>
        <div className="d-flex justify-content-around">
          <button className="btn btn-outline-dark btn-sm">Ver Más 👀</button>
          <button className="btn btn-dark btn-sm">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;