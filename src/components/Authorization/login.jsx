import React from 'react'
import AuthLayout from './AuthLayout'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { signIn } from '../../api/apis'
import auth from '../../proxyState/auth'
import { jwtDecode } from "jwt-decode";
import Cookies from 'universal-cookie';
import { useSnapshot } from 'valtio'

const login = () => {
    const snap = useSnapshot(auth)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const cookies = new Cookies();
    const authToken = cookies.get("jwt_authorization")

    if (authToken && authToken.length > 1) {
        auth.isLogin = true
        auth.user = jwtDecode(authToken)
    }
    const[Error,setError]=useState(null)
    const Login = async () => {
        try {
            if (!email || !password) {
                throw new Error("Please fill the required fields")
            }
            const data = signIn({ email, password })
            data.then((res) => {
                
                const token = res.token
                const user = jwtDecode(token);
                const currentDate = new Date();
                const expirationDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
                auth.login(token, expirationDate, user)
            }).catch((err)=>{
                if(err){
                    setError("Invalid Credentials or User Not Found")
                    setTimeout(()=>{
                        setError(null)
                    },5000)
                }
            })

        } catch (error) {
            console.log(error)
        }
    }
    const Emaile = (e) => {
        setEmail(e.target.value)
    }
    const Passworde = (e) => {
        setPassword(e.target.value)
    }
    return (
        <>
            <AuthLayout>
                <div className='mt-4 '>
                    <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg  shadow-2xl  sm:px-6 md:px-8 lg:px-10">
                        <div className="self-center mb-6 text-xl font-bold text-gray-600 sm:text-2xl ">
                            Login To Your Account
                        </div>
                        <div className="mt-8">
                            <form onSubmit={(e) => {
                                e.preventDefault()
                                Login()
                            }}>
                                <div className="flex flex-col mb-2">
                                    <div className="flex relative ">
                                        <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                            <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                                                </path>
                                            </svg>
                                        </span>
                                        <input onChange={Emaile} type="text" id="sign-in-email" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base outline-none" placeholder="Your email" />
                                    </div>
                                </div>
                                <div className="flex flex-col mb-6">
                                    <div className="flex relative ">
                                        <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                            <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
                                                </path>
                                            </svg>
                                        </span>
                                        <input onChange={Passworde} type="password" id="sign-in-email" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base  outline-none" placeholder="Your password" />
                                    </div>
                                    <div className={` ${Error?"":"hidden"}  text-red-500`}>
                                        {Error&&Error}
                                    </div>
                                </div>
                                <div className="flex items-center mb-6 -mt-4">
                                    <div className="flex ml-auto">
                                        <Link to={"/forgetPassword"} className="inline-flex text-xs font-light text-gray-800 sm:text-sm  hover:text-gray-700 ">
                                            Forgot Your Password?
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex w-full">
                                    <button type="submit" className="py-2 px-4  bg-buttonPrimary hover:bg-pink-600  text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md outline-none  rounded-lg ">
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="flex items-center justify-center mt-6">
                            <Link to={"/register"} className="inline-flex items-center text-xs font-light text-center text-gray-800 hover:text-gray-900 ">
                                <span className="ml-2">
                                    You don&#x27;t have an account?
                                </span>
                            </Link>
                        </div>
                    </div>

                </div>
            </AuthLayout>
        </>
    )
}

export default login