import {Link} from 'react-router-dom';

function MainNavigation() {
return <header>
    <div>
        Characters
    </div>
    <nav>
        <ul>
            <li>
                <Link to ='/'>All Characters</Link>
            </li>
            <li>
            <Link to ='/new-character'>New Character</Link>
            </li>
            <li>
            <Link to ='/favorites'>Favorite Characters</Link>
            </li>
        </ul>
    </nav>
</header>
}

export default MainNavigation;