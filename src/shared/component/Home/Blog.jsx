import React from "react";
import "../Home/Blog.css";

function Blog() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
     
        
     
      <div className="whole">
        <div>
          <section>
            <div className="blog">
              <p>
                Federal Construction<br/> Contracting{" "}
                <p style={{ color: "orange" }}>Blog</p>
              </p>
            </div>
            <div className="article">
              <details>
                <summary className="font" >Filter by category</summary>
                <ul className="mare" >
                  <li>
                    <button className="but4" >Dedicated builder
                        
                    </button>
                  </li>

                  <li>
                    <button className="but4">
                      <a  className="fire1" href="#proj"  > Contractor
                      </a>
                      </button></li>
                    <li>
                    <button className="but4">
                        Contractor
                        </button>
                    </li>
                  
                 
                </ul>
              </details>
            </div>
          </section>

          <section className="scroll">
            <div className="functio">
              <div className="dare">
                <p className="poop">Posted on Jun 15 2024</p>
                <img className="card" src="images/table23.avif" />
                <p className="title">Title One</p>
                <p className="lorem">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatum, modi dolores vel voluptatem quis unde quaerat
                  delectus, labore, illum iusto repellat quod quidem excepturi.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                
                </p>
              </div>

              <div className="dare"  >
              <p className="poop">Posted on Jun 15 2024</p>
                <img className="card" src="images/table24.jpg" />
                <p className="title">Title Two</p>
                <p className="lorem">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatum, modi dolores vel voluptatem quis unde quaerat
                  delectus, labore, illum iusto repellat quod quidem excepturi.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div className="dare">
              <p className="poop">Posted on Jun 15 2024</p>
                <img className="card" src="images/table22.jpg" />
                <p className="title">Title Three</p>
                <p className="lorem">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatum, modi dolores vel voluptatem quis unde quaerat
                  delectus, labore, illum iusto repellat quod quidem excepturi.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div className="dare" id="proj">
              <p className="poop">Posted on Jun 15 2024</p>
                <img className="card" srcSet="images/table24.jpg" />
                <p className="title">Title Four</p>
                <p className="lorem">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatum, modi dolores vel voluptatem quis unde quaerat
                  delectus, labore, illum iusto repellat quod quidem excepturi.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </section>
        </div>
        <div>
            <input  className="width" type="text" name="Search" placeholder="Search"/>
            <br/>
            <br/>
            <p className="link1"> Stay Connected  </p>
            <div className="lorem1">
                < a href="https://in.linkedin.com/"> <img   className="mail1" src="images/icons8-linked-in-48.png"/>  </a>
                <   a href="https://in.linkedin.com/">   <img   className="mail1" src="images/icons8-facebook-48.png"/> </a>
             <a href="https://twitter.com/?lang=en" >  <img   className="mail1" src="images/icons8-twitter-60.png"/> </a> 
            
            </div>
            <div className="dot1">
             <a href="https://mail.google.com/mail/" ><img  className="mail2" src="images/icons8-email-64.png"/> </a>  
                <p className="link1">Subscribe to this blog</p>
            </div>
            <input className="faf1" type="text" name="Search" placeholder="Enter Your Email Address.... "/>
            <br/>
            <button className="got1">
                SUBSCRIBE
            </button>
            <br/>
            <br/>
           
            <button className="got2">
               
             
             
                Blog Authors +
              
            </button>
            <br/>
            <br/>
            <div>
                <p  className="link1">Recent Updates </p>
                <br/>
                <p className="fast1">
                Projections for retail leasing<br/>
                 growth in 2024
                </p>
                <br/>
                
                <p className="fast1">Experion makes another major
                    <br/> acquisition in Gurugram <br/>
                    for Rs 400 crore
           
                </p>
                <br/>
                <p className="fast1">Samruddhi Expressway tunnel<br/>
                     in Maharashtra secured with <br/>advanced fire protection <br/>system from Danfoss
           
                </p>

            </div>
            
            
            
        </div>
      </div>

    </>
  );
}

export default Blog;
