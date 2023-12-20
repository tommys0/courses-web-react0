import Logo from './logo.jsx';
import NavButtons from './navButtons.jsx';
import '../index.css';

function NavBar() {
    return (
        <nav className="navbar">
            <Logo />
            <NavButtons />
        </nav>
    );
}

export default NavBar;
