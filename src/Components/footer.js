import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="footer">
            <h4>Copyright &copy; 2021</h4>
            <Link to="/about">About</Link>
        </footer>
    )
}
export default Footer;