import Navigation from "../layout/Navigation"

function Layout(props) {
    return(
        <div className="ui row stackable very padded raised">
            <Navigation />
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Layout;