import { Link } from "react-router-dom";
import "../../../../src/App.css";

export default function Home() {
  return (
    <>
      <div  className="banner">
        <div className="content">
          <div></div>
          <div>
            <h1 style={{ fontSize: " 50px" }}> ENGINEERING DREAMS WITH US</h1>
            <p
              style={{
                lineHeight: "1.9",
                fontSize: "large",
                fontWeight: "900",
              }}
            >
              Create a sustainable future through building preservation
              <br />
              green architecture and smart design.
            </p>
            <div
              style={{
                display: "flex",
                gap: "15px",
                justifyContent: " center",
                flexWrap: "wrap",
              }}
            >
              <button className="but">
                {" "}
                <a
                  href="#latest-news"
                  style={{ textDecoration: "none", color: "#FFF" }}
                >
                  {" "}
                  OUR HISTORY
                </a>{" "}
              </button>
              <button className="ton">
                {" "}
                <a
                  href="#projects"
                  style={{ textDecoration: "none", color: "#FFF" }}
                >
                  {" "}
                  VIEW PROJECTS
                </a>
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <div className="second">
        <div
          className="urge"
          style={{
            width: "30px",
            height: "15px",
            backgroundColor: "transparent",
            border: "4px solid #f6b300",
            borderBottom: "none",
            marginTop: "25px",
            marginBottom: "20px",
            margin: "auto",
          }}
        ></div>
        <h1 className="white">WHAT WE OFFER</h1>
        <p style={{ fontFamily: "Inter,sans-serif" }}>
          Always dedicated and devoted
        </p>
        <img
          style={{
            width: "38px",
            height: "3px",
            marginBottom: "100px",
            marginTop: "20px",
            margin: "auto",
          }}
          src="images/DASH.png"
        />
      </div>

      <div className="rating">
        <div className="styll">
          <div className="one">
            <div>
              <img src="images/build.png" />
            </div>
            <div>
              <h5 className="head"> BUILDING</h5>
              <p className="paraa" style={{ fontFamily: "Inter, sans-serif" }}>
                Lorem ipsum dolor sit amet consectetur
                <br />
                Culpa,quasi est illum commodi <br />
                eius voluptate eveniet iure.
              </p>
            </div>
          </div>
          <div className="one">
            <div>
              <img src="images/construction.png" />
            </div>
            <div>
              <h5 className="head"> CONSTRUCTION</h5>
              <p className="paraa" style={{ fontFamily: "Inter, sans-serif" }}>
                {" "}
                Lorem ipsum dolor sit amet consectetur
                <br />
                Culpa,quasi est illum commodi <br />
                eius voluptate eveniet iure.
              </p>
            </div>
          </div>
          <div className="one">
            <div>
              <img src="images/isolation.png" />
            </div>
            <div>
              <h5 className="head">ISOLATION</h5>
              <p className="paraa" style={{ fontFamily: "Inter, sans-serif" }}>
                {" "}
                Lorem ipsum dolor sit amet consectetur
                <br />
                Culpa,quasi est illum commodi <br />
                eius voluptate eveniet iure.
              </p>
            </div>
          </div>
        </div>
        <div className="civil"></div>
        <div className="styll">
          <div className="one">
            <div>
              <img src="images/painting.png" />
            </div>
            <div>
              <h5 className="head">PAINTING</h5>
              <p className="paraa" style={{ fontFamily: "Inter, sans-serif" }}>
                {" "}
                Lorem ipsum dolor sit amet consectetur
                <br />
                Culpa,quasi est illum commodi <br />
                eius voluptate eveniet iure.
              </p>
            </div>
          </div>
          <div className="one">
            <div>
              <img src="images/electricity.png" />
            </div>
            <div>
              <h5 className="head"> ELECTRICITY</h5>
              <p className="paraa" style={{ fontFamily: "Inter, sans-serif" }}>
                {" "}
                Lorem ipsum dolor sit amet consectetur
                <br />
                Culpa,quasi est illum commodi <br />
                eius voluptate eveniet iure.
              </p>
            </div>
          </div>
          <div className="one">
            <div>
              <img src="images/decoration.png" />
            </div>
            <div>
              <h5 className="head">DECORATION</h5>
              <p className="paraa" style={{ fontFamily: "Inter, sans-serif" }}>
                {" "}
                Lorem ipsum dolor sit amet consectetur
                <br />
                Culpa,quasi est illum commodi <br />
                eius voluptate eveniet iure.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="function">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "200px",
            marginLeft: "50px",
            marginRight: " 50px",
          }}
        >
          <div style={{ color: "#FFF", marginTop: "30px" }}>
            <h1 className="dot">WHY CHOOSE US </h1>

            <div
              className="rare"
              style={{ MarginBottom: "40px", lineHeight: "1.5" }}
            >
              <p className="inter">
                {" "}
                Civil engineering is a professional engineering discipline that
                deals with the design, construction,
                <br />
                and maintenance of the physical and naturally built environment,
                including such as roads, bridges,
                <br />
                canals, dams, airports,, pipelines, structural components of
                buildings, and railways.
                <br />
                Civil engineering is traditionally broken into a number of
                sub-disciplines.
                <br />
              </p>
            </div>
            <div className="rare" style={{ lineHeight: "1.5" }}>
              <p className="inter">
                It is considered the second-oldest engineering discipline
                after,and it is defined to distinguish
                <br />
                from military engineering. Civil engineering can take place in
                the public sector from
                <br />
                municipaldepartments through to federal government agencies.
                <br />{" "}
              </p>
            </div>
            <div
              className="main-common"
              style={{ marginTop: "15px", marginBottom: "15px" }}
            >
              <div style={{ lineHeight: "1.5" }}>
                <div className="common">
                  <img
                    style={{ width: "30px", height: "30px" }}
                    src="images/Circled Right.png"
                  />
                  <p className="inter">Design is quality</p>
                </div>
                <div className="common">
                  <img
                    style={{ width: "30px", height: "30px" }}
                    src="images/Circled Right.png"
                  />
                  <p className="inter">Pellentesque odio nisi</p>
                </div>
                <div className="common">
                  <img
                    style={{ width: "30px", height: "30px" }}
                    src="images/Circled Right.png"
                  />
                  <p className="inter">Neque id cursus faucibus</p>
                </div>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <div className="common">
                  <img
                    style={{ width: "30px", height: "30px" }}
                    src="images/Circled Right.png"
                  />
                  <p className="inter">Design is quality</p>
                </div>
                <div className="common">
                  <img
                    style={{ width: "30px", height: "30px" }}
                    src="images/Circled Right.png"
                  />
                  <p className="inter">Pellentesque odio nisi</p>
                </div>

                <div className="common">
                  <img
                    style={{ width: "30px", height: "30px" }}
                    src="images/Circled Right.png"
                  />
                  <p className="inter">Neque id cursus faucibus</p>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "25px", marginBottom: " 60px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                <button
                  style={{
                    height: "30px",
                    width: "275px",
                    border: "none",
                    backgroundColor: "#f6b300",
                    color: "#FFF",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  DOWNLOAD COMPANY PROFILE
                </button>
                <button
                  className="tennis"
                  style={{
                    height: "30px",
                    width: "100px",
                    border: "none",
                    backgroundColor: "#f6b300",
                    color: "#FFF",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  ABOUT US
                </button>
              </div>
            </div>
          </div>
          <div>
            <img
              style={{ height: "590px" }}
              className="point"
              src="images/third image.png"
            />
          </div>
        </div>
        <div id="projects"></div>
      </div>

      <div>
        <div style={{ marginBottom: "100px" }}>
          <div
            className="secc"
            style={{ marginTop: "100px", marginBottom: "50px" }}
          >
            <div
              className="urge"
              style={{
                width: "30px",
                height: "15px",
                backgroundColor: "transparent",
                border: "4px solid #f6b300",
                borderBottom: "none",
                marginTop: "25px",
                marginBottom: "20px",
                margin: "auto",
              }}
            ></div>
            <div>
              <h1 className="white">LATEST PROJECTS</h1>
            </div>
            <div>
              <p className="inter">EXPERIENCE AND CREATIVITY HOUSE </p>
            </div>
            <div>
              <img
                style={{ width: "38px", height: "3px", margin: "auto" }}
                src="images/DASH.png"
              />
            </div>
          </div>
          <div className="containerr">
            <div>
              <img className="raj" src="images/table24.jpg" />
            </div>
            <div>
              <img className="raj" src="images/fantastic.webp" />
            </div>
            <div>
              <img className="raj" src="images/table23.avif" />
            </div>

            <div>
              <img className="raj" src="images/table21.jpg" />
            </div>
            <div>
              <img className="raj" src="images/table20.jpg" />
            </div>
            <div>
              <img className="raj" src="images/table22.jpg" />
            </div>
          </div>
          <div className="button">
            <button
              style={{
                backgroundColor: "#f6b300",
                border: "none",
                width: "100px",
                height: "40px",
                cursor: "pointer",
              }}
            >
              {" "}
              VIEW ALL
            </button>
          </div>
        </div>
      </div>
      <div className="girl" style={{ color: "#FFF" }}>
        <div
          className="chase"
          style={{ position: "absolute", left: "4%", bottom: "1px" }}
        >
          <img
            style={{ width: "525px" }}
            src="images/freepik-export-20240626102331abaY.png"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <div className="decan">
            <div
              className="first1"
              style={{
                width: "30px",
                height: "15px",
                backgroundColor: "transparent",
                border: "4px solid #f6b300",
                borderBottom: "none",
                position: "relative",
                left: "310px",
                marginTop: "25px",
                marginBottom: "20px",
              }}
            ></div>
            <h1 className="white black">WHAT PEOPLE SAID</h1>

            <p
              style={{
                fontFamily: "Inter,sans-serif",
                color: "#dddddd",
                marginBottom: "10px",
                marginTop: "10px",
              }}
            >
              THEY HAPPY WITH US{" "}
            </p>
            <img 
              style={{
                width: "38px",
                height: "3px",
                marginBottom: "55px",
                marginTop: "15px",
                margin: "auto",
              }}
              src="images/DASH.png"
            />
            <p className="inter" style={{ lineHeight: "1.8" }}>
              {" "}
              dui placerat donec net justo eget felis facilicus
              fermantum.Aliquam partitar mauris sit amat
              <br />
              orci.Aenean dignissim pallentesque felis.Morbi in sem quis due
              placerat arnare .Pellentesque
              <br />
              odio nisi.euis.Cras consequat. <br />
            </p>
          </div>
          <div className="circle">
            <img
              style={{ position: "relative", top: "10px", left: "12px" }}
              src="images/Quote Left.png"
            />
          </div>
          <div className="red">
            <p className="green inter">ORNARE</p>
            <p className="green inter" style={{ color: "#dddddd" }}>
              G5-ROME-ITALIA
            </p>
          </div>
          <div style={{ display: "flex", gap: "5px", marginBottom: "25px" }}>
            <div className="seven"></div>
            <div className="seven"></div>
            <div className="eight"></div>
          </div>
        </div>
      </div>
      <div>
        <div className="second">
          <div
            className="urge"
            style={{
              width: "30px",
              height: "15px",
              backgroundColor: "transparent",
              border: "4px solid #f6b300",
              borderBottom: "none",
              marginTop: "25px",
              marginBottom: "20px",
              margin: "auto",
            }}
          ></div>
          <h1 className="white">OUR PROCESS</h1>
          <p className="Inter">STYLE 2</p>
          <img
            style={{
              width: "38px",
              height: "3px",
              marginBottom: "100px",
              marginTop: "20px",
              margin: "auto",
            }}
            src="images/DASH.png"
          />
        </div>
        <div className="prototype">
          <div className="rectangle">
            <div className="mark">
              <p className="ten ">01</p>
              <h3 className="inter var ">PROTOTYPE</h3>
              <p className=" aaaec3 string">
                Temperibus autum quibusdam et aut neccessibilities saepe
                evinient ut et seo lage voluptates sint et molestiae non mes for
                every where in place.{" "}
              </p>
            </div>
          </div>
          <div className="rectangle">
            <div className="mark">
              <p className="ten ">02</p>
              <h3 className="inter var ">DESIGN</h3>
              <p className=" aaaec3 string">
                Temperibus autum quibusdam et aut neccessibilities saepe
                evinient ut et seo lage voluptates sint et molestiae non mes for
                every where in place.{" "}
              </p>
            </div>
          </div>
          <div className="rectangle">
            <div className="mark">
              <p className="ten ">03</p>
              <h3 className="inter var ">BUILDING </h3>
              <p className=" aaaec3 string">
                Temperibus autum quibusdam et aut neccessibilities saepe
                evinient ut et seo lage voluptates sint et molestiae non mes for
                every where in place.{" "}
              </p>
            </div>
          </div>
          <div className="rectangle">
            <div className="mark">
              <p className="ten ">04</p>
              <h3 className="inter var ">DELIVERY</h3>
              <p className=" aaaec3 string">
                Temperibus autum quibusdam et aut neccessibilities saepe
                evinient ut et seo lage voluptates sint et molestiae non mes for
                every where in place.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="latest-news"
        style={{ marginBottom: "100px", marginTop: "100px" }}
      >
        <div className="second">
          <div
            className="urge"
            style={{
              width: "30px",
              height: "15px",
              backgroundColor: "transparent",
              border: "4px solid #f6b300",
              borderBottom: "none",
              marginTop: "25px",
              marginBottom: "20px",
              margin: "auto",
            }}
          ></div>
          <h1 className="white">LATEST NEWS </h1>
          <p className="inter">CONNECT WITH US ALL ABOUT DARNA</p>
          <img
            style={{
              width: "38px",
              height: "3px",
              marginBottom: "50px",
              marginTop: "20px",
              margin: "auto",
            }}
            src="images/DASH.png"
          />
        </div>
        <div className="darna">
          <div style={{ lineHeight: "1.7" }}>
            <img className="rate" src="images/table26.jpg" />
            <p style={{ marginTop: "10px" }} className="found">
              MADRIS PHOTOGRAPHER MARATHON
            </p>
            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "5px",
                marginBottom: "5px",
              }}
            >
              <div style={{ display: "flex", gap: "5px" }}>
                <img
                  className="icons"
                  src="images/icons8-calendar-50.png"
                />
                <p className="home homes">JULY 19,2015</p>
              </div>
              <div style={{ display: "flex", gap: "5px" }}>
                <img
                  className="icons"
                  src="images/icons8-user-32.png"
                />
                <p className="home homes">ADMIN</p>
              </div>
            </div>
            <img
              style={{
                width: "38px",
                height: "3px",
                marginTop: "5px",
                marginBottom: "5px",
              }}
              src="images/DASH.png"
            />
            <p className="inter">
              In a professional context it often happens <br />
              or corporate clients order a publication to <br />
              presented with the actual content[...]
            </p>
            <br />
          </div>
          <div style={{ lineHeight: "1.7" }}>
            <img className="rate" src="images/table27.jpg" />
            <p style={{ marginTop: "10px" }} className="found">
              ICELANDS VOLCANO TIMELAPSE
            </p>
            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "5px",
                marginBottom: "5px",
              }}
            >
              <div style={{ display: "flex", gap: "5px" }}>
                <img
                  className="icons"
                  src="images/icons8-calendar-50.png"
                />
                <p className="home homes">JULY 19,2015</p>
              </div>
              <div style={{ display: "flex", gap: "5px" }}>
                <img
                  className="icons"
                  src="images/icons8-user-32.png"
                />
                <p className="home homes">ADMIN</p>
              </div>
            </div>
            <img
              style={{
                width: "38px",
                height: "3px",
                marginTop: "5px",
                marginBottom: "5px",
              }}
              src="images/DASH.png"
            />
            <p className="inter">
              In a professional context it often happens <br />
              or corporate clients order a publication to <br />
              presented with the actual content[...]
            </p>
            <br />
          </div>
          <div style={{ lineHeight: "1.7" }}>
            <img className="rate" src="images/table 8.jpg" />
            <p style={{ marginTop: "10px" }} className="found">
              CONSTRUCTION YOU CAN COUNT ON{" "}
            </p>
            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "5px",
                marginBottom: "5px",
              }}
            >
              <div style={{ display: "flex", gap: "5px" }}>
                <img
                  className="icons"
                  src="images/icons8-calendar-50.png"
                />
                <p className="home homes">JULY 19,2015</p>
              </div>
              <div style={{ display: "flex", gap: "5px" }}>
                <img
                  className="icons"
                  src="images/icons8-user-32.png"
                />
                <p className="home homes">ADMIN</p>
              </div>
            </div>
            <img
              style={{
                width: "38px",
                height: "3px",
                marginTop: "5px",
                marginBottom: "5px",
              }}
              src="images/DASH.png"
            />
            <p className="inter">
              In a professional context it often happens <br />
              or corporate clients order a publication to <br />
              presented with the actual content[...]
            </p>
            <br />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <div
            style={{ width: "60px", height: "6px", backgroundColor: "#f6b300" }}
          ></div>
          <div
            style={{ width: "60px", height: "6px", backgroundColor: "#EEEE" }}
          ></div>
        </div>
      </div>
    </>
  );
}
