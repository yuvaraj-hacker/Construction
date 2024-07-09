import '../Home/ContactUs.css'

export default function ContactUs() {
   return(
   <>
    
    <div    className='conta1' style={{display: 'flex',justifyContent: 'spaceAround',position: 'relative',top:' 250px',marginBottom:'400px'}}>
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
   )
}