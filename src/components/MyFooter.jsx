import { Button } from "bootstrap";

function MyFooter() {
  return (
    <footer className=" bg-body-tertiary">
      <div className="row">
        <div className="col">
          <p className="bg-body-tertiary">Legal Advice - L'avvocato a portata di click</p>
          <p className="bg-body-tertiary">Sede legale: Corso Italia 25 - 00168 - Roma </p>
          <p className="bg-body-tertiary">Partita Iva: IT123456789 </p>
        </div>
        <div className="col">
          <ul className="list-unstyled">
            <li>Richiedi una consulenza</li>
            <li>Cerca un avvocato</li>
            <li>Articoli</li>
          </ul>
        </div>
        <div className="col">
          <ul className="list-unstyled">
            <li>Consulenza scritta</li>
            <li>Consulenza telefonica</li>
            <li>Consulenza video</li>
          </ul>
        </div>
        <div className="col">
          <ul className="list-unstyled">
            <li>Termini e condizioni</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
      <p>&copy; Legal Advice- L'avvocato a portata di click. S.R.L. 2023</p>
    </footer>
  );
}

export default MyFooter;
