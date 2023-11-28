import { Link } from "react-router-dom"
import mainImage from "../assets/mainImage.png"
export default function Navbar() {
    return <>
        <nav className="navbar navbar-expand-lg  px-5   fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="">
                    <img className="w-50" src={mainImage} alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
                        <li className="nav-item">
                            <Link className="nav-link text-black mx-4  " aria-current="page" to="">Home</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Properties
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">property1</a></li>
                                <li><a class="dropdown-item" href="#">property2</a></li>
                                <li><a class="dropdown-item" href="#">property3</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-black mx-4 " to="">Contact us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-black mx-4 " to="">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-black mx-4 " to="login">login</Link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    </>
}