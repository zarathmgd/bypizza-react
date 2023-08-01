export default function Secondpage() {
  return (
    <div className="secondpage">
      <h2 id="see-more-link">By Pizza, c'est...</h2>

      <div className="infos-container">
        <p>
          <span>4</span> restaurants en France
        </p>
        <p>
          <span>5</span> pizzas à déguster
        </p>
        <p>
          <span>6</span> années d'expériences
        </p>
      </div>

      <div className="secondpage-content-container">
        <div className="secondpage-content">
          <span>
            <i className="fa-solid fa-house-chimney"></i>
          </span>
          <p>
            Un restaurant italien spécialisé dans la conception de pizza depuis plus de 6 ans, qui vous fera redécouvrir le plaisir de
            déguster ce plat sous différentes saveurs, à travers des pizzas végétariennes, composées de viande ou de poisson.
          </p>
        </div>

        <div className="secondpage-content">
          <p>
            4 restaurants ouverts à travers la France. Après avoir ouvert son premier restaurant en plein centre de Paris, BY PIZZA
            s’est étendu à Bordeaux, Lille et Strasbourg afin de rendre sa cuisine accessible dans tout le pays.
          </p>
          <span>
            <i className="fa-solid fa-location-dot"></i>
          </span>
        </div>
      </div>
    </div>
  );
}
