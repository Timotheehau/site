import './Header.css';

function Header() {
  return (
    <header className="header">
      <img src="/assets/logo.png" alt="JhPrint3D" className="logo" />
      <h1 className='title'>JhPrint3D</h1>
      <div>
        <nav>
            <ul className="nav-links" >
                <li><a href="#accueil">Accueil</a></li>
                <li><a href="#produits">Produits</a></li>
                <li><a href="#nouveautés">Nouveautés</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#idees"><img src="/assets/idees-icon.png" alt="Idées" className="icon" />Idées</a></li>
            </ul>
        </nav>
    </div>
    </header>
  );
}


export default Header;
