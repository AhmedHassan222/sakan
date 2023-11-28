import { Link } from "react-router-dom"
import style from "../Styles/Authentication.component.css"

export default function Register() {
    return <>
        <div className={`d-flex justify-content-center align-items-center backLogin my-5 vh-100`}>
            <form action="" className={` mx-auto  px-5 py-4 bg-white my-5`}>

                <h3 className=' text-center mb-5'>Register</h3>
                <div className="row g-3">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <input type="text" className=" bg-transparent p-2 w-100" placeholder="First Name" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <input type="text" className=" bg-transparent p-2 w-100" placeholder="Last Name" />
                    </div>
                </div>
                <div className={`py-2`}>
                    <input placeholder='E-mail' className={`w-100 bg-transparent p-2`} type="text" name="email" />
                </div>
                <div className={`py-2`}>
                    <input placeholder='Password' className={`w-100 bg-transparent p-2`} type="password" name="password" />
                </div>
                <div className={`py-2`}>
                    <input placeholder='Re-type Password' className={`w-100 bg-transparent p-2`} type="password" name="rePassword" />
                </div>





                <button className={`mt-3 bg-white p-2   w-100`}>
                    Register
                </button>

                <p className='text-center  fs-6 mt-5'>have account already? <Link className={`${style.text}`} to='/login'> Login</Link> </p>

            </form>


        </div>
    </>
}