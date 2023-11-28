import { Link } from "react-router-dom"
import style from "../Styles/Navbar.component.css"
import mainImage from "../assets/mainImage.png"
import { useEffect } from "react"
export default function Navbar() {

    useEffect(() => {
        window.addEventListener('scroll', function () {
            if (this.window.scrollY >= 100) {
                this.document.querySelector('nav').classList.add('bg-white')

            } else {
                this.document.querySelector('nav').classList.remove('bg-white')


            }
        })
    }, [window.scrollY])





    return <>
        <nav className="navbar navbar-expand-lg   fixed-top">
            <div className="container-fluid">
                <div className="d-flex">
                    <Link className="navbar-brand" to="">
                        <img className="w-50" src={mainImage} alt="" />
                    </Link>
                    <button id="menu" className="bg-transparent border-0 fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
                        <li className="nav-item">
                            <Link className="nav-link text-black mx-4  " aria-current="page" to="">Home</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <Link to={'/choose'} class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Properties
                            </Link>
                            <ul class="dropdown-menu">
                                <li><Link class="dropdown-item" to=''>property1</Link></li>
                                <li><Link class="dropdown-item" to=''>property2</Link></li>
                                <li><Link class="dropdown-item" to=''>property3</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-black mx-4 " to="">Contact us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-black mx-4 " to="">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-black mx-4 loginButton px-4 " to="login">login</Link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    </>
}