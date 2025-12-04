// import exhibitions1 from "../../../assets/images/image/artThumb01.jpg";
// import exhibitions2 from "../../../assets/images/image/exhibitions02.jpg";
// import exhibitions3 from "../../../assets/images/image/exhibitions03.jpg";
// import exhibitions4 from "../../../assets/images/image/exhibitions04.jpg";
// import exhibitions5 from "../../../assets/images/image/aboutImage03.jpg";
// import exhibitions6 from "../../../assets/images/image/aboutImage02.jpg";
// import exhibitions7 from "../../../assets/images/image/exhibitions07.jpg";
// import exhibitions8 from "../../../assets/images/image/aboutImage01.jpg";
// import exhibitions9 from "../../../assets/images/image/artThumb02.jpg";
// import { useEffect } from "react";




// const Exhibitions = () => {




//    useEffect(() => {
//     const midImages = document.querySelectorAll(
//       ".boxTwo, .boxFive, .boxEight"
//     );

//     const onScroll = () => {
//       midImages.forEach((img) => {
//         const speed = 0.25;
//         const offset = window.scrollY * speed;
//         (img as HTMLElement).style.transform = `translateY(-${offset}px)`;
//       });
//     };

//     window.addEventListener("scroll", onScroll);

//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);





//   return (
//     <section className="exhibitions">
//       <div className="container">
//         <div className="heroExhibitions">
//           {/* backgroungImg */}
//           <div className="row">
//             <h2 className="exhibitionsTitle">Exhibitions</h2>
//             <div className="lineP">
//               <div className="line"></div>
//               <p>
//                 For the latest updates about reopening, booking tickets and
//                 what's <br />
//                 happening at the Museum, sign up to our newsletter
//               </p>
//             </div>
//           </div>
//           <div className="greenShape"></div>
//         </div>
//         {/* end hero  */}

//         <div className="exhibitionsBox">
//           <div className="boxCard">
//             <div className="boxOne">
//               <img src={exhibitions1} alt="" />
//               <h4>Artemisia Gentileschi talk with Maria</h4>
//               <div className="linkLine"></div>
//               <p>15 August - 31 October 2020</p>
//             </div>
//             <div className="boxTwo">
//               <img src={exhibitions2} alt="" />
//               <h4>Arctic culture and climate Exhibition</h4>
//               <div className="linkLine"></div>
//               <p>22 Oct 2020 - 21 Feb 2023</p>
//             </div>
//             <div className="boxThree">
//               <img src={exhibitions3} alt="" />
//               <h4>Thomas Becket murder and the making of a saint</h4>
//               <div className="linkLine"></div>
//               <p>22 Apr - 22 Aug 2023</p>
//             </div>
//             <div className="boxFour">
//               <img src={exhibitions4} alt="" />
//               <h4>Artemisia Gentileschi talk with Maria</h4>
//               <div className="linkLine"></div>
//               <p>15 August - 31 October 2020</p>
//             </div>
//             <div className="boxFive">
//               <img src={exhibitions5} alt="" />
//               <h4>Arctic culture and climate Exhibition</h4>
//               <div className="linkLine"></div>
//               <p>22 Oct - 21 Feb 2023</p>
//             </div>
//             <div className="boxSix">
//               <img src={exhibitions6} alt="" />
//               <h4>Thomas Becket murder and the making of a saint</h4>
//               <div className="linkLine"></div>
//               <p>22 Apr 2023 - 22 Aug 2023</p>
//             </div>
//             <div className="boxSeven">
//               <img src={exhibitions7} alt="" />
//               <h4>Artemisia Gentileschi talk with Maria</h4>
//               <div className="linkLine"></div>
//               <p>15 August - 31 October 2020</p>
//             </div>
//             <div className="boxEight">
//               <img src={exhibitions8} alt="" />
//               <h4>Arctic culture and climate Exhibition</h4>
//               <div className="linkLine"></div>
//               <p>22 Oct 2020 - 21 Feb 2023</p>
//             </div>
//             <div className="boxNine">
//               <img src={exhibitions9} alt="" />
//               <h4>Thomas Becket murder and the making of a saint</h4>
//               <div className="linkLine"></div>
//               <p>22 Apr 2023 - 22 Aug 2023</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Exhibitions;









// import exhibitions1 from "../../../assets/images/image/artThumb01.jpg";
// import exhibitions2 from "../../../assets/images/image/exhibitions02.jpg";
// import exhibitions3 from "../../../assets/images/image/exhibitions03.jpg";
// import exhibitions4 from "../../../assets/images/image/exhibitions04.jpg";
// import exhibitions5 from "../../../assets/images/image/aboutImage03.jpg";
// import exhibitions6 from "../../../assets/images/image/aboutImage02.jpg";
// import exhibitions7 from "../../../assets/images/image/exhibitions07.jpg";
// import exhibitions8 from "../../../assets/images/image/aboutImage01.jpg";
// import exhibitions9 from "../../../assets/images/image/artThumb02.jpg";
// import { useEffect, useRef } from "react";


// const Exhibitions = () => {
//   const middleColRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!middleColRef.current) return;
//       const scrollY = window.scrollY;
//       middleColRef.current.style.transform = `translateY(-${scrollY * 0.25}px)`;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="exhibitions">
//       <div className="exhibitionsBox">
//         <div className="exhibitionsRow">

//           {/* Sol sütun */}
//           <div className="col left-col">
//             <div className="boxOne">
//               <img src={exhibitions1} alt="" />
//               <h4>Artemisia Gentileschi talk with Maria</h4>
//               <p>15 August - 31 October 2020</p>
//             </div>
//             <div className="boxFour">
//               <img src={exhibitions4} alt="" />
//               <h4>Artemisia Gentileschi talk with Maria</h4>
//               <p>15 August - 31 October 2020</p>
//             </div>
//             <div className="boxSeven">
//               <img src={exhibitions7} alt="" />
//               <h4>Artemisia Gentileschi talk with Maria</h4>
//               <p>15 August - 31 October 2020</p>
//             </div>
//           </div>

//           {/* Orta sütun */}
//           <div className="col middle-col" ref={middleColRef}>
//             <div className="boxTwo">
//               <img src={exhibitions2} alt="" />
//               <h4>Arctic culture and climate Exhibition</h4>
//               <p>22 Oct 2020 - 21 Feb 2023</p>
//             </div>
//             <div className="boxFive">
//               <img src={exhibitions5} alt="" />
//               <h4>Arctic culture and climate Exhibition</h4>
//               <p>22 Oct 2020 - 21 Feb 2023</p>
//             </div>
//             <div className="boxEight">
//               <img src={exhibitions8} alt="" />
//               <h4>Arctic culture and climate Exhibition</h4>
//               <p>22 Oct 2020 - 21 Feb 2023</p>
//             </div>
//           </div>

//           {/* Sağ sütun */}
//           <div className="col right-col">
//             <div className="boxThree">
//               <img src={exhibitions3} alt="" />
//               <h4>Thomas Becket murder and the making of a saint</h4>
//               <p>22 Apr - 22 Aug 2023</p>
//             </div>
//             <div className="boxSix">
//               <img src={exhibitions6} alt="" />
//               <h4>Thomas Becket murder and the making of a saint</h4>
//               <p>22 Apr 2023 - 22 Aug 2023</p>
//             </div>
//             <div className="boxNine">
//               <img src={exhibitions9} alt="" />
//               <h4>Thomas Becket murder and the making of a saint</h4>
//               <p>22 Apr 2023 - 22 Aug 2023</p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Exhibitions;






import exhibitions1 from "../../../assets/images/image/artThumb01.jpg";
import exhibitions2 from "../../../assets/images/image/exhibitions02.jpg";
import exhibitions3 from "../../../assets/images/image/exhibitions03.jpg";
import exhibitions4 from "../../../assets/images/image/exhibitions04.jpg";
import exhibitions5 from "../../../assets/images/image/aboutImage03.jpg";
import exhibitions6 from "../../../assets/images/image/aboutImage02.jpg";
import exhibitions7 from "../../../assets/images/image/exhibitions07.jpg";
import exhibitions8 from "../../../assets/images/image/aboutImage01.jpg";
import exhibitions9 from "../../../assets/images/image/artThumb02.jpg";

import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Exhibitions = () => {
  const middleColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!middleColRef.current) return;

      const scrollY = window.scrollY;

      // Daha smooth və təbii parallax
      const parallaxSpeed = 0.20;

      middleColRef.current.style.transform = `translateY(-${
        scrollY * parallaxSpeed
      }px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate()

  return (
    <section className="exhibitions">
        <div className="container">
         <div className="heroExhibitions">
           {/* backgroungImg */}
           <div className="row">
             <h2 className="exhibitionsTitle">Exhibitions</h2>
             <div className="lineP">
               <div className="line"></div>
               <p>
                For the latest updates about reopening, booking tickets and
                 what's <br />
                 happening at the Museum, sign up to our newsletter
               </p>
             </div>
          </div>
           <div className="greenShape"></div>
        </div>
      <div className="exhibitionsBox">
        <div className="exhibitionsRow">

          {/* SOL SÜTUN — SABİT */}
          <div className="col left-col">
            <div className="boxOne"  onClick={() => navigate("/exhibitionsDetails")}>
              <img src={exhibitions1} alt="" />
              <h4>Artemisia Gentileschi talk with Maria</h4>
              <p>15 August - 31 October 2020</p>
            </div>

            <div className="boxFour" onClick={() => navigate("/exhibitionsDetails")} >
              <img src={exhibitions4} alt="" />
              <h4>Artemisia Gentileschi talk with Maria</h4>
              <p>15 August - 31 October 2020</p>
            </div>

            <div className="boxSeven" onClick={() => navigate("/exhibitionsDetails")}>
              <img src={exhibitions7} alt="" />
              <h4>Artemisia Gentileschi talk with Maria</h4>
              <p>15 August - 31 October 2020</p>
            </div>
          </div>

          {/* ORTA SÜTUN — PARALLAX */}
          <div className="col middle-col" ref={middleColRef}>
            <div className="boxTwo" onClick={() => navigate("/exhibitionsDetails")}>
              <img src={exhibitions2} alt="" />
              <h4>Arctic culture and climate Exhibition</h4>
              <p>22 Oct 2020 - 21 Feb 2023</p>
            </div>

            <div className="boxFive" onClick={() => navigate("/exhibitionsDetails")}>
              <img src={exhibitions5} alt="" />
              <h4>Arctic culture and climate Exhibition</h4>
              <p>22 Oct 2020 - 21 Feb 2023</p>
            </div>

            <div className="boxEight" onClick={() => navigate("/exhibitionsDetails")}>
              <img src={exhibitions8} alt="" />
              <h4>Arctic culture and climate Exhibition</h4>
              <p>22 Oct 2020 - 21 Feb 2023</p>
            </div>
          </div>

          {/* SAĞ SÜTUN — SABİT */}
          <div className="col right-col">
            <div className="boxThree" onClick={() => navigate("/exhibitionsDetails")}>
              <img src={exhibitions3} alt="" />
              <h4>Thomas Becket murder and the making of a saint</h4>
              <p>22 Apr 2023 - 22 Aug 2023</p>
            </div>

            <div className="boxSix" onClick={() => navigate("/exhibitionsDetails")}>
              <img src={exhibitions6} alt="" />
              <h4>Thomas Becket murder and the making of a saint</h4>
              <p>22 Apr 2023 - 22 Aug 2023</p>
            </div>

            <div className="boxNine" onClick={() => navigate("/exhibitionsDetails")}>
              <img src={exhibitions9} alt="" />
              <h4>Thomas Becket murder and the making of a saint</h4>
              <p>22 Apr 2023 - 22 Aug 2023</p>
            </div>
          </div>

        </div>
      </div>
      </div>
    </section>
  );
};

export default Exhibitions;