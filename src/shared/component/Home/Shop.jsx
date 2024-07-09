import React from "react";
import "../Home/Shop.css";

function Shop() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="pick1">
        <div className="pick2">
          
          <p className="pick3"> <span className="shake">  SHOP</span></p>
        </div>
      </div>
      <div className="pick4">
        <div className="pick5">
          <div>
            <img className="pick6" src="images/nailset.jpg" />
            <p className="net1">Bi.Material Nail Stes</p>
            <p className="net2">£329.00</p>
          </div>
          <div>
            <img className="pick6" src="images/some1.jpg" />
            <p className="net1">Claw Hmamer</p>
            <p className="net2">£300.00</p>
          </div>
          <div>
            <img className="pick6" src="images/some2.jpg" />
            <p className="net1">Combination Hammer</p>
            <p className="net2">£400.00</p>
          </div>
          <div>
            <img className="pick6" src="images/some3.jpg" />
            <p className="net1">Cutting Pliers</p>
            <p className="net2">£114.00</p>
          </div>
          <div>
            <img className="pick6" src="images/some4.jpg" />
            <p className="net1">Multi Tool </p>
            <p className="net2">£223.00</p>
          </div>
          <div>
            <img className="pick6" src="images/some5.jpg" />
            <p className="net1">Multi Tracker</p>
            <p className="net2">£231.00</p>
          </div>
          <div>
            <img className="pick6" src="images/some6.jpg" />
            <p className="net1">Pointed Trowel</p>
            <p className="net2">£150.00</p>
          </div>
          <div>
            <img className="pick6" src="images/some7.jpg" />
            <p className="net1">Folding Key</p>
            <p className="net2">£250.00</p>
          </div>
          <div>
            <img className="pick6" src="images/some8.jpg" />
            <p className="net1">Small Trigger</p>
            <p className="net2">£100.00</p>
          </div>
          <div>
            <img className="pick6" src="images/some9.jpg" />
            <p className="net1">Lithium Key</p>
            <p className="net2">£170.00</p>
          </div>
          <div>
            <img className="pick6" src="images/some10.jpg" />
            <p className="net1">Iron plater</p>
            <p className="net2">£117.00</p>
          </div>
          <div>
            <img className="pick6" src="images/some0.jpg" />
            <p className="net1">Metal Blogger</p>
            <p className="net2">£120.00</p>
          </div>
        </div>
        <div>
          <p className="doubt1">SEARCH PRODUCTS</p>
          <div className="doubt2"></div>
          <input
            className="width"
            type="text"
            name="Search"
            placeholder="Search Products"
          />
          <br />
          <br />
          <br />

          <p className="doubt1">PRODUCT CATEGORIES</p>
          <div className="doubt2"></div>
          <br />
          <br />
          <details>
            <summary className="raj9">HAND TOOLS</summary>
            <details>
              <summary>HAMMERS</summary>
            </details>
            <details>
              <summary>MULTI TOOLS</summary>
            </details>
            <details>
              <summary>PLIERS</summary>
            </details>
          </details>
          <br />
          <br />
          <details>
            <summary className="raj9">POWER TOOLS</summary>
            <details>
              <summary>DRILLS</summary>
            </details>
            <details>
              <summary>GRINDERS</summary>
            </details>
            <details>
              <summary>HEAT GUNS</summary>
            </details>
            <details>
              <summary>SANDERS</summary>
            </details>
          </details>
          <br />
          <br />
          <details>
            <summary className="raj9">SAFETY AND SECURITY</summary>
          </details>
          <br />
          <br />
          <details>
            <summary className="raj9">UNCATEGORIZED</summary>
          </details>
          <br />
          <br />

          <div>
            <p className="doubt1">TOP RATED PRODUCTS</p>
            <div className="doubt2"></div>
            <br />
            <br />
          </div>
          <div className="flex9">
            <img className="dude1" src="images/drill1.jpg" />
            <div>
              <p className="dew1">Reversible Drill</p>
              <div className="dew2">
                <img  className="dew3" src="images/icons8star.png" />
                <img  className="dew3" src="images/icons8star.png" />
                <img   className="dew3" src="images/icons8star.png" />
                <img  className="dew3" src="images/icons8star.png" />
                <img  className="dew3" src="images/icons8star.png" />
              </div>
            </div>
          </div>
          <br />

          <div className="flex9">
            <img className="dude1" src="images/drill2.jpg" />
            <div>
              <p className="dew1">Claw Hammer</p>
              <div className="dew2">
                <img  className="dew3" src="images/icons8star.png" />
                <img   className="dew3" src="images/icons8star.png" />
                <img   className="dew3" src="images/icons8star.png" />
                <img  className="dew3"  src="images/icons8star.png" />
                <img   className="dew3" src="images/icons8star.png" />
                
              </div>
            </div>
          </div>
          <br />

          <div className="flex9">
            <img className="dude1" src="images/drill3.jpg" />
            <div>
              <p className="dew1">Cutting Pliers</p>
              <div className="dew2">
                <img  className="dew3" src="images/icons8star.png" />
                <img  className="dew3" src="images/icons8star.png" />
                <img  className="dew3" src="images/icons8star.png" />
                <img  className="dew3" src="images/icons8star.png" />
                <img  className="dew3" src="images/icons8star.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
