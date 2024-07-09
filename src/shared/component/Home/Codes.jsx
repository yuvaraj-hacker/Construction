import React from "react";
import "../Home/Codes.css";
function Codes() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="recent">
        <p>OUR RECENT PROJECTS</p>
      </div>
      <div className="recent1">
          <button className="butt0">
          <div className="find1">
            <p className="recent4" >MADRIS PHOTOGRAPHER MARATHON</p>
            <p className="recen">
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ut, totam saepe illo officia
               quos odit magnam accusamus, error iusto quas
                debitis voluptates, nemo reiciendis aut
                 possimus impedit repellat rem inventore.
            </p>
          </div>
          </button>
          <button className="butt9">
        <div className="find1">
        <p className="recent4">MADRIS PHOTOGRAPHER MARATHON</p>
            <p className="recen">
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ut, totam saepe illo officia
               quos odit magnam accusamus, error iusto quas
                debitis voluptates, nemo reiciendis aut
                 possimus impedit repellat rem inventore.
            </p>
        </div>
        </button>
        <button className="butt8">
        <div className="find1">
        <p className="recent4">MADRIS PHOTOGRAPHER MARATHON</p>
            <p className="recen">
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ut, totam saepe illo officia 
               quos odit magnam accusamus, error iusto quas 
                debitis voluptates, nemo reiciendis aut 
                 possimus impedit repellat rem inventore. 
            </p>
        </div>
        </button>
      </div>
      <div>
        <p className="recent">MEET OUR TEAM</p>
      </div>
      <div className="round">
        <div>
          <img
            className="to1"
            src="images/closeup-confident-middle-aged-business-leader.jpg"
          />
          <p className="font1">Name</p>
        </div>
        <div>
          <img
            className="to1"
            src="images/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign.jpg"
          />
          <p className="font1">Name</p>
        </div>
        <div>
          <img
            className="to1"
            src="images/front-view-man-working-as-real-estate-agent.jpg"
          />
          <p className="font1">Name</p>
        </div>
        <div>
          <img
            className="to1"
            src="images/smiling-confident-businesswoman-posing-with-arms-folded.jpg"
          />
          <p className="font1">Name</p>
        </div>
        <div>
          <img className="to1" src="images/businesswoman-posing-office.jpg" />
          <p className="font1">Name</p>
        </div>
      </div>
      <div>
        <p className="recent">WHAT OUR CLIENTS SAY</p>
      </div>
      <div className="child1">
        <img className="to1" src="images/image.20221001.jpeg" />
      </div>
      <div className="child2">
        <img className="rer1" src="images/icons8-double-quotes-50.png" />
      </div>
      <div className="der1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Labore ex similique saepe modi omnis. Praesentium numquam <br />
        totam exercitationem autem ipsa, pariatur, ut fugiat <br />
        mollitia vel nesciunt dolor veniam est alias! <br />
      </div>
      <div>
        <p className="recent">OUR SAFETY STANDARDS</p>
        <ul className="fun1">
          <li>Personal Protective equipment</li>
          <li>Machinery Maintainence</li>
          <li>Personal protective equipment</li>
          <li>Keep the site clean</li>
          <li>Follow safety signs</li>
          <li>Machinery Maintenance</li>
          <li>Report</li>
          <li>Avoid unsafe areas</li>
          <li>Proper equipment</li>
          <li>Never tamper with equipment</li>
          <li>Ladders</li>
          <li>Provide the right equipment</li>
          <li>Training</li>
          <li>Communication</li>
          <li>Fall protection</li>
          <li>Jobsite Safety training</li>
          <li>Keep a tidy site</li>
          <li>Report defects and near misses</li>
          <li>Hazard Communication</li>
        </ul>
      </div>
      <div className="dive1">
        <hr/>
      </div>
      <div>
        
         <p className="get1">
          Get in touch !
         </p>
      </div>
      <div    className='conta1' style={{display: 'flex',justifyContent: 'spaceAround',position: 'relative',top:' 250px',marginBottom:'300px'}}>
         <div class="container1">
            <h2 style={{color: '#f6b300'}}> Connect with Us</h2>
            <form  action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="ceac0e9f-44a1-4381-981f-6c42eb63566a"/>
                <label for="name" style={{color: '#f6b300'}}>Your Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required/>

                <label for="email" style={{color: '#f6b300'}}>Email Address</label>
                <input type="email" id="email" name="email" placeholder="Your mail" required/>

                <label for="message" style={{color: '#f6b300'}}>Message</label>
                <textarea id="message" name="message" placeholder=" Get in touch with us" style={{height:'200px'}}
                    required></textarea>

                <input type="submit" value="Submit"/>
            </form>
         </div>
         <div>

         </div>

       

     </div>

      
    </>
  );
}

export default Codes;
