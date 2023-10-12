import React from 'react';
import facebook from '../asset/image/facebook.png';
import linkdin from '../asset/image/linkdin.png';
import youtube from '../asset/image/youtube.png';
import post from '../asset/image/post.jpg';
import Vector from '../asset/image/Vector.png';

function Footer() {
  return (
    <div className='footer'>
        <div className='ft info'>
            <div className='col ft1'>
                <ul>
                    <p className='connect'>Connect with Us</p>
                    <div className='connect icons'>
                        <img src={facebook} alt="facebook" />
                        <img src={linkdin} alt="linkdin" />
                        <img src={youtube} alt="youtube" />
                    </div>
                    <div className='underline'>
                        <li className='get direction'>
                            <img src={Vector} alt="location" /> Get direction of office
                        </li>
                        <li>
                            <img src={post} alt="post icon" /> hr@qitsolution.co.in
                        </li>
                        <li>
                            <img src={post} alt="post icon" /> keyur@qitsolution.co.in
                        </li>
                    </div>
                </ul>
            </div>
            <div className='col ft2'>
                <ul>
                    <p>Navigation Links</p>
                    <li>About Us</li>
                    <li>Products</li>
                    <li>Business Solutions</li>
                    <li>Career</li>
                </ul>
            </div>
            <div className="col ft3">
                <ul>
                    <p className="contact-heading">Contact Us</p>
                    <address>
                    Shop No: 370 & 350-351, 
                    The Galleria,
                    Near Sanjeev Kumar Auditorium,
                    Surat, Gujarat 395009
                    </address>
                </ul>
            </div>
            <div className='col ft4'>
                <ul>
                    <p className='connect'>Important Link</p>
                    <div className='underline'>
                        <li>SAP Business B1 Partner in Surat</li>
                        <li>SAP Business One Partner in Mumbai</li>
                        <li>SAP Business B1 Partner in Bangalore</li>
                        <li>SAP Business One Partner in Ahmedabad</li>
                        <li>SAP Business One Partner in Vadodara</li>
                    </div>
                </ul>
            </div>
        </div>
        <div>
            <p className='copyright'>&copy; 2023 Quantum IT Solution. All Rights Reserved.</p>
        </div>
    </div>
  );
}

export default Footer;
