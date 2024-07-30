
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { AiFillInstagram } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';

const ContactPage = () => {
  const form = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [countryCode, setCountryCode] = useState('+'); 
  const [PhoneNumber, setPhoneNumber] = useState(''); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_9d2w3jl', 'template_42g2t3s', form.current, '4WmNEQepeyu0HW5IW')
    .then((result) => {
        console.log(result.text);
        console.log('message sent');
        setIsMessageSent(true); 
        setTimeout(() => {
          form.current.reset(); 
          setIsMessageSent(false);
          window.location.reload();
        },1000);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  
  const handleCountryCodeChange = (e) => {
    setCountryCode(e.target.value);
  };
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <>
      <div className="bg-gray-800 h-screen w-full grid place-items-center">
        <header
          className="w-full h-screen pt-4 pb-7 bg-cover bg-center flex justify-center items-center"
        
        >
        <div className=" bg-gray-100 rounded-full p-9">
          <div className=" text-center text-transparent text-6xl font-bold bg-gradient-to-br from-purple-500 to-teal-300 bg-clip-text ">
            Contact Us
          </div>
        </div>
      </header>
      <div className="bg-gray-800 min-h-screen w-full grid place-items-center">
 
        <div className="bg-white rounded-md shadow-md flex flex-col md:flex-row">
          {/* contact information */}
          <div
            className="bg-gradient-to-br from-purple-500 to-teal-300 p-6 md:hover:scale-y-110 rounded-md transition md:block px-6 py-4"
            id="contact_info"
          >
            <div className="flex justify-between">
              {/* page title */}
              <h2 className="text-white text-2xl">Contact Information</h2>
              
            </div>
            <div className="mt-6 flex-row">
              <div>
                {/* icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-white mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M17.834 6.166a8.25 8.25 0 100 11.668.75.75 0 011.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0121.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 11-.82-6.26V8.25a.75.75 0 011.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 00-2.416-5.834zM15.75 12a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-white text-xl">Email: </h2>
                <p className="text-white text-lg">abc.com</p>
              </div>
            </div>
            <div className="mt-6 flex-row">
              <div>
                {/* icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="w-6 h-6 text-white mr-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-white text-xl">Phone:</h2>
                <p className="text-white text-lg">987654321</p>
              </div>
              <div className="social-links mt-8 flex-row ">
                <span className="second-text text-xl text-white">Connect with us:</span>
                <div className="icons flex gap-4 py-[1rem] pb-[30px]">
            <AiFillInstagram className=" p-[8px] h-[40px] w-[40px] rounded-full icon hover:text-gray-800 text-white opacity-80 bg-gradient-to-t" />
            <BsLinkedin className=" p-[8px] h-[40px] w-[40px] rounded-full icon hover:text-gray-800 text-white opacity-80 bg-gradient-to-t" />
               </div>
              </div>
            </div>
          </div>

          {/* contact us form */}
          <div id="contact_us" className="px-6 py-4">
            <div>
              <div className="flex justify-between">
                {/* page title */}
                <h2 className="gradient-bg text-3xl">Get In Touch</h2>
                
              </div>
            </div>
            <div>
            <form ref={form} onSubmit={sendEmail}>
              <div>
              <div className="flex flex-row justify-between gap-2">
                <input
                  type="text"
                  placeholder="First Name"
                  name="user_first_name"
                  className="w-full text-xs px-3 h-8 my-4 outline-none rounded-md border focus:shadow-sm"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="user_last_name"
                    className="w-full text-xs px-3 h-8 my-4 outline-none rounded-md border focus:shadow-sm"
                  />
                  
                </div>

                <div className="flex justify-between gap-2">
                
                  <select
                    name="user_country"
                    placeholder="Select Category"
                    id="country_id"
                    value={countryCode} // Set the selected value to the state variable
                    onChange={handleCountryCodeChange}
                    className="form-control w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm resize-none"
                  >
                  <option value="+">Select Countries</option>
                  <option value="+93">Afghanistan</option>
                  <option value="+355">Albania</option>
                 <option value="+213">Algeria</option>
                  <option value="+1-684">American Samoa</option>
                  <option value="+376">Andorra</option>
                  <option value="+244">Angola</option>
                  <option value="+1-264">Anguilla</option>
                  <option value="+672">Antarctica</option>
                  <option value="+1-268">Antigua And Barbuda</option>
                  <option value="+43">Austria</option>
                  <option value="+994">Azerbaijan</option>
                  <option value="+1-242">Bahamas</option>
                  <option value="+973">Bahrain</option>
                  <option value="+880">Bangladesh</option>
                  <option value="+1-246">Barbados</option>
                <option value="+375">Belarus</option>
                <option value="+32">Belgium</option>
                <option value="+501">Belize</option>
                <option value="+229">Benin</option>
                <option value="+975">Bhutan</option>
                <option value="+591">Bolivia</option>
                <option value="+387">Bosnia And Herzegovina</option>
                <option value="+267">Botswana</option>
                <option value="+55">Brazil</option>
                <option value="+673">Brunei</option>
                <option value="+359">Bulgaria</option>
                <option value="+226">Burkina Faso</option>
                <option value="+257">Burundi</option>
                <option value="+238">Cabo Verde</option>
                <option value="+855">Cambodia</option>
                <option value="+237">Cameroon</option>
                <option value="+1">Canada</option>
                <option value="+236">Central African Republic</option>
                <option value="+235">Chad</option>
                <option value="+56">Chile</option>
                <option value="+86">China</option>
                <option value="+57">Colombia</option>
                <option value="+269">Comoros</option>
                <option value="+242">Congo (Brazzaville)</option>
                <option value="+243">Congo (Kinshasa)</option>
                <option value="+506">Costa Rica</option>
                <option value="+385">Croatia</option>
                <option value="+53">Cuba</option>
                <option value="+357">Cyprus</option>
                <option value="+420">Czech Republic</option>
                <option value="+45">Denmark</option>
                <option value="+253">Djibouti</option>
                <option value="+1-767">Dominica</option>
                <option value="+1-809">Dominican Republic</option>
                <option value="+593">Ecuador</option>
                <option value="+20">Egypt</option>
                <option value="+503">El Salvador</option>
                <option value="+240">Equatorial Guinea</option>
                <option value="+291">Eritrea</option>
                <option value="+372">Estonia</option>
                <option value="+251">Ethiopia</option>
                <option value="+679">Fiji</option>
                <option value="+358">Finland</option>
                <option value="+33">France</option>
                <option value="+241">Gabon</option>
                <option value="+220">Gambia</option>
                <option value="+995">Georgia</option>
                <option value="+49">Germany</option>
                <option value="+233">Ghana</option>
                <option value="+30">Greece</option>
                <option value="+1-473">Grenada</option>
                <option value="+502">Guatemala</option>
                <option value="+224">Guinea</option>
                <option value="+245">Guinea-Bissau</option>
                <option value="+592">Guyana</option>
                <option value="+509">Haiti</option>
                <option value="+379">Holy See</option>
                <option value="+504">Honduras</option>
                <option value="+36">Hungary</option>
                <option value="+354">Iceland</option>
                <option value="+91">India</option>
                <option value="+62">Indonesia</option>
                <option value="+98">Iran</option>
                <option value="+964">Iraq</option>
                <option value="+353">Ireland</option>
                <option value="+972">Israel</option>
                <option value="+39">Italy</option>
                <option value="+1876">Jamaica</option>
                <option value="+81">Japan</option>
                <option value="+962">Jordan</option>
                <option value="+7">Kazakhstan</option>
                <option value="+254">Kenya</option>
                <option value="+686">Kiribati</option>
                <option value="+850">Korea, North</option>
                <option value="+82">Korea, South</option>
                <option value="+383">Kosovo</option>
                <option value="+965">Kuwait</option>
                <option value="+996">Kyrgyzstan</option>
                <option value="+856">Laos</option>
                <option value="+371">Latvia</option>
                <option value="+961">Lebanon</option>
                <option value="+266">Lesotho</option>
                <option value="+231">Liberia</option>
                <option value="+218">Libya</option>
                <option value="+423">Liechtenstein</option>
                <option value="+370">Lithuania</option>
                <option value="+352">Luxembourg</option>
                <option value="+261">Madagascar</option>
                <option value="+265">Malawi</option>
                <option value="+60">Malaysia</option>
                <option value="+960">Maldives</option>
                <option value="+223">Mali</option>
                <option value="+356">Malta</option>
                <option value="+692">Marshall Islands</option>
                <option value="+222">Mauritania</option>
                <option value="+230">Mauritius</option>
                <option value="+52">Mexico</option>
                <option value="+691">Micronesia</option>
                <option value="+373">Moldova</option>
                <option value="+377">Monaco</option>
                <option value="+976">Mongolia</option>
                <option value="+382">Montenegro</option>
                <option value="+212">Morocco</option>
                <option value="+258">Mozambique</option>
                <option value="+95">Myanmar</option>
                <option value="+264">Namibia</option>
                <option value="+674">Nauru</option>
                <option value="+977">Nepal</option>
                <option value="+31">Netherlands</option>
                <option value="+64">New Zealand</option>
                <option value="+505">Nicaragua</option>
                <option value="+227">Niger</option>
                <option value="+234">Nigeria</option>
                <option value="+389">North Macedonia</option>
                <option value="+47">Norway</option>
                <option value="+968">Oman</option>
                <option value="+92">Pakistan</option>
                <option value="+680">Palau</option>
                <option value="+970">Palestine</option>
                <option value="+507">Panama</option>
                <option value="+675">Papua New Guinea</option>
                <option value="+595">Paraguay</option>
                <option value="+51">Peru</option>
                <option value="+63">Philippines</option>
                <option value="+48">Poland</option>
                <option value="+351">Portugal</option>
                <option value="+974">Qatar</option>
                <option value="+40">Romania</option>
                <option value="+7">Russia</option>
                <option value="+250">Rwanda</option>
                <option value="+1-869">Saint Kitts And Nevis</option>
                <option value="+1-758">Saint Lucia</option>
                <option value="+1-784">Saint Vincent And The Grenadines</option>
                <option value="+685">Samoa</option>
                <option value="+378">San Marino</option>
                <option value="+239">Sao Tome And Principe</option>
                <option value="+966">Saudi Arabia</option>
                <option value="+221">Senegal</option>
                <option value="+381">Serbia</option>
                <option value="+248">Seychelles</option>
                <option value="+232">Sierra Leone</option>
                <option value="+65">Singapore</option>
                <option value="+421">Slovakia</option>
                <option value="+386">Slovenia</option>
                <option value="+677">Solomon Islands</option>
                <option value="+252">Somalia</option>
                <option value="+27">South Africa</option>
                <option value="+211">South Sudan</option>
                <option value="+34">Spain</option>
                <option value="+94">Sri Lanka</option>
                <option value="+249">Sudan</option>
                <option value="+597">Suriname</option>
                <option value="+268">Swaziland</option>
                <option value="+46">Sweden</option>
                <option value="+41">Switzerland</option>
                <option value="+963">Syria</option>
                <option value="+886">Taiwan</option>
                <option value="+992">Tajikistan</option>
                <option value="+255">Tanzania</option>
                <option value="+66">Thailand</option>
                <option value="+670">Timor-Leste</option>
                <option value="+228">Togo</option>
                <option value="+676">Tonga</option>
                <option value="+1-868">Trinidad And Tobago</option>
                <option value="+216">Tunisia</option>
                <option value="+90">Turkey</option>
                <option value="+993">Turkmenistan</option>
                <option value="+688">Tuvalu</option>
                <option value="+256">Uganda</option>
                <option value="+380">Ukraine</option>
                <option value="+971">United Arab Emirates</option>
                <option value="+44">United Kingdom</option>
                <option value="+1">United States</option>
                <option value="+598">Uruguay</option>
                <option value="+998">Uzbekistan</option>
                <option value="+678">Vanuatu</option>
                <option value="+58">Venezuela</option>
                <option value="+84">Vietnam</option>
                <option value="+967">Yemen</option>
                <option value="+260">Zambia</option>

          
                  </select>
                  <input
                      type="text"
                      placeholder="Phone Number"
                      name="user_countryCode"
                      value={countryCode} 
                      onChange={(e) => setCountryCode(e.target.value)} // Update the state on input change
                      className="w-16 text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm"
                    />
                     <input
                      type="text"
                      placeholder="Phone Number"
                      name="user_phone_number"
                      value={PhoneNumber} 
                      onChange={handlePhoneNumber} // Update the state on input change
                      className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm"
                    />

                  </div>
  
                
                </div>
                <div className="flex justify-between m-2">
                  <div className="text-md text-slate-600">Gender:</div>
                </div>
                <div className="p-1 m-2">
                  <div className="flex justify-between gap-2 text-sm">
                    <input type="radio" name="user_gender" value="Male" />
                    <label htmlFor="Male">Male</label>
                    <input type="radio" name="user_gender" value="Female" />
                    <label htmlFor="Female">Female</label>
                    <input
                      type="text"
                      placeholder="Your City"
                      name="user_city"
                      className="w-48 text-xs px-3 h-8 m-22 my-1 outline-none rounded-md border focus:shadow-sm"
                    />
                  </div>
                </div>
                <div className="flex justify-between gap-2">
                  <input
                    type="text"
                    placeholder="Your Email"
                    name="user_email"
                    className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm"
                  />
                  <input
                    type="text"
                    placeholder="Nationality"
                    name="user_nationality"
                    className="w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm"
                  />
                
                  </div>
                  
                  
                <textarea
                  placeholder="Enter your Message here"
                  name="message"
                  className="w-full text-xs px-3 py-2 h-20 my-2 outline-none rounded-md border focus:shadow-sm resize-none"
                ></textarea>
                <br />
                <input
                  type="submit"
                  value="send"
                  className="bg-gray-900 px-4 py-2 rounded-md text-white text-xs cursor-pointer hover:shadow-md"
                />
                {isMessageSent && (
                    <div className="text-green-500 text-xl mt-4">Message sent successfully!</div>
                  )}
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;