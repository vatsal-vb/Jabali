import { useState } from "react";


const NavBar = () => {

  const [isMobile, setIsMobile] = useState(false);

  return (
    <header>
      <ul id="navigation" className={isMobile ? "nav-links-mobile" : "nav_items"}
          onClick={() => setIsMobile(false)}>
        <li><a href="/">Home</a></li>
        <li><a href="/career">Careers</a></li>
        <li><a href="/blog">Blog</a></li>
      </ul>

      <button className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <ion-icon name="close-outline"></ion-icon> : <ion-icon name="menu-outline"></ion-icon>}
      </button>
    </header>
  )
}

export default NavBar