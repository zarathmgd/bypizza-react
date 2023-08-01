export default function Firstpage() {
  return (
    <div className="firstpage">
      <div className="firstpage-content">
        <h1>BY PIZZA</h1>
        <p>
          Au coeur de la gastronomie italienne. <br />
          Venez déguster nos pizzas 100% traditionnelles et leurs multiples saveurs dans nos restaurants situées dans toute la France !
        </p>

        <div className="button-container">
          <a href="#see-more-link">
            <button>See more</button>
          </a>
          <a href="#contacts-link">
            <button>Contact us</button>
          </a>
        </div>
      </div>
    </div>
  );
}
