import { FiFileText } from "@react-icons/all-files/fi/FiFileText";
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="bg-black p-3 rounded-xl">
      <ul>
        <li className="bg-white p-2 rounded-md">
          <Link to="/" title="Plantillas">
            <FiFileText className="text-2xl" />
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header