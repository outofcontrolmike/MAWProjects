
//Used in routing
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