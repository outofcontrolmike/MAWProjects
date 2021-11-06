import Navigation from "../components/layout/Navigation"
import { useHistory } from "react-router"
//Contact page requirements - > Email form (name,email, category selection, message)

//Also place in a section with contact links (phone number, email address, social icons and links)
export default function Contact() {

    return(

        <div>
            <Navigation />
            <div className="ui column stackable very padded relaxed container">
                <form action="https://formsubmit.co/outofcontrolmike@gmail.com" method="POST" className="ui form">
                <input type="hidden" name="_subject" value="Email from portfolio"/>
                    <input type="hidden" name="_next" value="http://localhost:3000/thanks"/>
                    <input type="hidden" name="_captcha" value="false"/>
                    <div className="field">
                        <label>Full Name</label>
                        <input id="name" type="text" required name="name" placeholder="Full Name" />
                    </div>
                    <div className="field">
                        <label>Email Address</label>
                        <input id="email" type="text" required name="email" placeholder="Prefered Email Address" />
                    </div>
                    <div className="field">
                        <label>Category</label>
                        <select type="text" name="category" id="category" className="ui fluid dropdown">
                            <option value="">Category</option>
                            <option>General</option>
                            <option>Suggestion</option>
                            <option>Complaint</option>
                            <option>Compliment</option>
                        </select>
                    </div>
                    <div className="field">
                        <label>Message</label>
                        <textarea id="message" required type="text" name="message" placeholder="Message" />
                    </div>
                    <button className="ui button orange" id="submit" type="submit">Submit</button>
                </form>
            </div>

        </div>
    )
}