import Link from "next/link";
export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <img src="logo.svg" alt="Logo" className="logo-image" />
          <h1 className="logo-text">Shoe Heaven</h1>
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><Link href="/Cart">Cart</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
