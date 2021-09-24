import Navigation from "./Navigation";
import Footer from "../layout/Footer";

function Layout(props) {
    return(
        <div className="ui">
            <main id="layout">
                {props.children}
            </main>
        </div>
    )
}

export default Layout;