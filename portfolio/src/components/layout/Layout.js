import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";

function Layout(props) {
    return(
        <div className="ui row stackable">
            <Navigation />
            <main>
                {props.children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;