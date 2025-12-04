import { Link } from "react-router-dom";
import logoHome from "../assets/images/image/logoHome.jpg";
import pageList from "../constants/pageList";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="logo">
            <Link to={"/"} className="logoHome">
              <img src={logoHome} alt="homelogo" />
            </Link>
          </div>
          <nav className="navBar">
            <ul className="navList">
              {pageList
                .filter((page) => page.for_header)
                .map((page) => (
                  <li key={page.id} className="navItem">
                    <Link to={page.path}>{page.title}</Link>
                  </li>
                ))}
            </ul>
          </nav>
          {/* <div className="menuWrapper">
            <span className="menuTitle" onClick={toggleMenu}>
              MENU
            </span>

            <nav className={`navBar ${isMenuOpen ? "active" : ""}`}>
              <ul className="navList">
                {pageList
                  .filter((page) => page.for_header)
                  .map((page) => (
                    <li key={page.id} className="navItem">
                      <Link to={page.path}>{page.title}</Link>
                    </li>
                  ))}
              </ul>
            </nav>
          </div> */}

          <div className="headerIcons">
            <div className="searchIcon">
              <FiSearch />
            </div>
            <div className="cartIcon">
              <Link to={"/cart"}>
                <FaShoppingCart />
              </Link>
            </div>
            <div className="burgerIcon" onClick={toggleMenu}>
              {isMenuOpen ? <FiX /> : <RxHamburgerMenu />}
            </div>
          </div>
          <div className="headerBtn">
            <Link to={"/shop"}>
              <button>SHOP ART</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

// yan teref dizayn umumi

// import { Link } from "react-router-dom";
// import logoHome from "../assets/images/image/logoHome.jpg";
// import pageList from "../constants/pageList";
// import { useState } from "react";
// import { FiX } from "react-icons/fi";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { FiSearch } from "react-icons/fi";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//   };

//   return (
//     <header className="header">
//       <div className="container">
//         <div className="row">
//           {/* LOGO */}
//           <div className="logo">
//             <Link to={"/"} className="logoHome">
//               <img src={logoHome} alt="homelogo" />
//             </Link>
//           </div>

//           {/* NAVIGATION */}
//           <nav className="navBar">
//             <ul className="navList">
//               {pageList
//                 .filter((page) => page.for_header)
//                 .map((page) => (
//                   <li key={page.id} className="navItem">
//                     <Link to={page.path}>{page.title}</Link>
//                   </li>
//                 ))}
//             </ul>
//           </nav>

//           {/* ICONS & BUTTON */}
//           <div className="headerIcons">
//             <div className="searchIcon">
//               <FiSearch />
//             </div>
//             <div className="burgerIcon" onClick={toggleMenu}>
//               {isMenuOpen ? <FiX /> : <RxHamburgerMenu />}
//             </div>
//           </div>

//           <div className="headerBtn">
//             <button>All Shop Art</button>
//           </div>
//         </div>
//       </div>

//       {/* --- SLIDE MENU --- */}
//       <div className={`sideMenu ${isMenuOpen ? "open" : ""}`}>
//         <div className="sideMenuContent">
//           <div className="sideMenuHeader">
//             <img src={logoHome} alt="logo" />
//             <h3>Wandau Museum</h3>
//           </div>
//           <ul className="sideMenuList">
//             {pageList
//               .filter((page) => page.for_header)
//               .map((page) => (
//                 <li key={page.id} onClick={() => setIsMenuOpen(false)}>
//                   <Link to={page.path}>{page.title}</Link>
//                 </li>
//               ))}
//           </ul>
//         </div>
//       </div>

//       {/* Overlay (qaralma effekti üçün) */}
//       {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
//     </header>
//   );
// };

// export default Header;
