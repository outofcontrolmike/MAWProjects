import Navigation from "../components/layout/Navigation"

//Contact page requirements - > Email form (name,email, category selection, message)

//Also place in a section with contact links (phone number, email address, social icons and links)
export default function Contact() {
    return (

        <div>
            <Navigation />
            <div className="ui column stackable very padded relaxed container">
                <form className="ui form">
                    <div className="field">
                        <label>Full Name</label>
                        <input id="name" type="text" name="name" placeholder="Full Name" />
                    </div>
                    <div className="field">
                        <label>Email Address</label>
                        <input id="email" type="text" name="email" placeholder="Prefered Email Address" />
                    </div>
                    <div className="field">
                        <label>Category</label>
                        <select id="category" className="ui fluid dropdown">
                            <option value="">Category</option>
                            <option>General</option>
                            <option>Suggestion</option>
                            <option>Complaint</option>
                            <option>Compliment</option>
                        </select>
                    </div>
                    <div className="field">
                        <label>Message</label>
                        <textarea id="message" type="text" name="message" placeholder="Message" />
                    </div>
                    <button className="ui button orange" id="submit" type="submit">Submit</button>
                </form>
            </div>

        </div>
    )
}