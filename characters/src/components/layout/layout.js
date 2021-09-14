import MainNavigation from "./MainNavigation";

function Layout(props) {
    return(
        <div className="ui row stackable very padded raised">
            <MainNavigation />
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Layout;
