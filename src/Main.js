import React from "react";
import Iqra from "./img/heroiqr.png";
import Bism from "./img/herobis.png";

const imgStyle = {};

function Main() {
  return (
    <main className="indexmain">
      <div class="container">
        <div class="row d-flex justify-content-center mt-5">
          <img src={Bism} alt="logo" style={imgStyle} />
        </div>
        <div className="row d-flex justify-content-center mt-4">
          <img src={Iqra} class="img-fluid heroiqr" alt="Iqra" />
        </div>
        <div className="row d-flex justify-content-center mt-5 mb-2">
          <form className="searchbox" action="">
            <input type="text" placeholder="Search Anything.." name="search2" />
            <a href="">
              <i className="fas fa-search" />
            </a>
          </form>
        </div>
        <div class="row d-flex justify-content-center">
          <ul class="quicklinks align-items-center">
            <li class="btn disabled">Quick Links</li>|
            <li class="btn">
              <a href=" ">Surah Yasin (Yaseen)</a>
            </li>
            <li class="btn">
              <a href=" ">Surah Ar-Rahman</a>
            </li>
            <li class="btn">
              <a href=" ">Surah Al Mulk</a>
            </li>
            <li class="btn">
              <a href=" ">Ayatul Kursi</a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
export default Main;
