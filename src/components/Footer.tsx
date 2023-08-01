export default function Footer() {
  return (
    <footer>
      <h2>BY PIZZA</h2>
      <div className="footer-content">
        <div className="socialmedias">
          <p>Retrouvez-nous sur :</p>
          <div className="icons">
            <i className="fa-brands fa-square-facebook"></i>
            <i className="fa-brands fa-square-instagram"></i>
            <i className="fa-brands fa-square-twitter"></i>
          </div>
        </div>

        <div className="informations">
          <div className="hours">
            <i className="fa-regular fa-clock"></i>
            <p>
              Ouvert tous les jours : <br />
              11h - 22h
            </p>
          </div>
          <div className="locations">
            <i className="fa-solid fa-location-dot"></i>
            <p>
              PARIS - BORDEAUX - <br />
              LILLE - STRASBOURG
            </p>
          </div>
        </div>

        <div className="contacts" id="contacts-link">
          <p>Tel : 01 XX XX XX XX</p>
          <p>
            9 Rue du XXXXXXXXX <br />
            750XX Paris <br />
            France
          </p>
        </div>
      </div>
      <hr />
      <div className="rights">
        <p>Développé par : Zarath MOUGAMADOU</p>
        <p>© 2023 BY PIZZA | Tous droits réservés.</p>
      </div>
    </footer>
  );
}
