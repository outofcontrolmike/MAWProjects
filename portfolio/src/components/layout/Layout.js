import Navigation from "../layout/Navigation";
import Footer from "../layout/Footer";

function Layout(props) {
    return(
        <div className="ui">
            <Navigation />
            <main id="layout">
                {props.children}
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;