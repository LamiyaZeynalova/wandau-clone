const Home = () => {
  return (
    <section className="home">Home page</section>
  )
}

export default Home








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
//           <div className="logo">
//             <Link to={"/"} className="logoHome">
//               <img src={logoHome} alt="homelogo" />
//             </Link>
//           </div>
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
//     </header>
//   );
// };

// export default Header;
