import React from 'react'
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';



function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'Contact Me'} />
            </div>
            <div className="ContactPage">
                <form action="https://formspree.io/shafiulalom01738@gmail.com" method="POST">
                    <div className="row">
                        <div className="col-md-2">
                            <label for="fname">First Name</label>
                        </div>
                        <div className="col-md-10">
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 col-sm-12">
                            <label for="lname">Last Name</label>
                        </div>
                        <div className="col-md-10 col-sm-12">
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 col-sm-12">
                            <label for="country">Country</label>
                        </div>
                        <div className="col-md-10 col-sm-12">
                            <select id="country" name="country">
                                <option value="bangladesh">Bangladesh</option>
                                <option value="canada">Canada</option>
                                <option value="usa">USA</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2 col-sm-12">
                            <label for="subject">Subject</label>
                        </div>
                        <div className="col-md-10 col-sm-12">
                            <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: '200px' }}></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-right">
                            <input type="submit" value="Submit" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactPage;
