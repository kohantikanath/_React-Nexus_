import logo from "../../images/nexus.png"
import "./Header.css"

const Header = () => {
  return (
    <header>
        <div id="logo">
            <img src={logo} alt="nexus-logo" />
        </div>
        <div id="title">
            <h1>Meet Our Attendees</h1>
        </div>
    </header>
  )
}
export default Header