export default function Thirdpage() {
  return (
    <div className="thirdpage">
      <h2>Nos menus</h2>

      <div className="thirdpage-content-container">
        <div className="thirdpage-content">
          <h3>Pizzas</h3>

          <div className="meal">
            <h4>MARGHERITA</h4>
            <p>Base tomate, parmesan, mozzarella, basilic, ail, olives</p>
          </div>
          <div className="meal">
            <h4>PEPPERONI</h4>
            <p>Base tomate, pepperoni, mozzarella, poivron, olives noires</p>
          </div>
          <div className="meal">
            <h4>QUATRE FROMAGES</h4>
            <p>Base crème, emmental, mozzarella, parmesan, chèvre, basilic</p>
          </div>
          <div className="meal">
            <h4>THON</h4>
            <p>Base tomate, thon, emmental, olive, poivron </p>
          </div>
          <div className="meal">
            <h4>MARINARA</h4>
            <p>Base tomate, huile d’olive, origan, ail</p>
          </div>
        </div>

        <hr />

        <div className="thirdpage-content">
          <h3>Entrées</h3>

          <div className="meal">
            <h4>CESAR</h4>
            <p>Salade romaine, parmesan, huile d’olive, tomates, croûtons, oeufs, sauce césar </p>
          </div>
          <div className="meal">
            <h4>TOMATE MOZZARELLA</h4>
            <p>Tomates, mozzarella, basilic, huile d’olive, vinaigre balsamique</p>
          </div>

          <h3>Desserts</h3>

          <div className="meal">
            <h4>Cornet de glace</h4>
            <p>Saveurs au choix : Vanille, Chocolat, Pistache</p>
          </div>
          <div className="meal">
            <h4>Crème glacée</h4>
            <p>Saveurs au choix : Cookie, Vanille caramel, Fruits rouges</p>
          </div>
        </div>
      </div>
    </div>
  );
}
