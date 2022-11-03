import "../styles/home.scss";

import introPic from "../images/home.png";

export default function Home() {
  return (
    <div className="home">
      <div className="home-top-content">
        <div className="home-left-content">
          <h1 style={{ textAlign: "center" }}>
            <code>API & DB Team </code>
          </h1>
          <img src={introPic} alt="" />
        </div>
        <div className="home-right-content">
          <div className="home-right-textbox">
            <div className="home-welcome-message">
              <h1> Navigation</h1>
              <br />
              <h4>Each nav link's leads to differnt materials</h4>
              <br />
              <br />
              <code>
                - API: Contains materials about bank_api tutorials
                <br />- DB: Contains materials about bank_db tutorials
                <br />- UI: Contains materials about React tutorials
                <br />- docs: Direct link to the documentation
                <br />- Github: Direct link to bank_api source code
              </code>
              <br />
              <br />
              <h3>If there is error or additional resources are needed</h3>
              <p>
                <b>Admin Contact info</b>
                <br />
                Jaehyeok Choi :{" "}
                <a href="mailto:jaehyeok.choi@drake.edu">
                  jaehyeok.choi@drake.edu
                </a>
                <br />
                Jacob Danner :{" "}
                <a href="mailto:jacob.danner@drake.edu">
                  jacob.danner@drake.edu
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
