import { Link } from "react-router-dom"
import style from "../Styles/Authentication.component.css"

export default function Login() {
    return <>
        <div className={`d-flex justify-content-center align-items-center backLogin my-5 vh-100 `}>
            <form action="" className={` mx-auto  px-5 py-4 bg-white my-5`}>

                <h3 className=' text-center mb-5'>Login</h3>
                <div className={`py-2`}>
                    <input placeholder='E-mail' className={`w-100 bg-transparent p-2`} type="text" name="email" />
                </div>
                <div className={`py-2`}>
                    <input placeholder='Password' className={`w-100 bg-transparent p-2`} type="password" name="password" />
                </div>






                <button className={`mt-3 bg-white p-2 button-auth  w-100`}>
                    Login
                </button>

                <p className='text-center  fs-6 mt-5'>create Account <Link className={`${style.text}`} to='/register'> Register</Link> </p>

            </form>


        </div>




    </>
}