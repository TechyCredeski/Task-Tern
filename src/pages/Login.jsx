import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';
import Google from '../assets/icons/Google';
import { Link } from 'react-router-dom';



export default function Login() {

    defineElement(lottie.loadAnimation);
    const iconStyle = {
        width: '120px', 
        height: '120px', 
    };
    return (

    <div className= "h-full flex items-center">
        <div className="flex flex-col justify-between m-auto mt-32 p-3 w-4/5 bg-purple-100  mb-5 md:flex-row md:mt-8 rounded-md">
            <div className="bg-purple-400 hidden  p-5 rounded-md md:w-1/2  md:block">
            <h1 className="text-3xl font-pacifico text-black mb-7 md:mb-9">Privacy and Security First.</h1>
            <div className="flex justify-center align-middle">
                <lord-icon 
                style={iconStyle}
                trigger="hover" 
                src={`/src/assets/icons/wired-lineal-946-equity-security.json`}>
                </lord-icon>
            </div>
            <p>We understand the importance of protecting your data and privacy. 
                TodoMaster employs state-of-the-art security measures to safeguard your information. 
                Your tasks and personal details are encrypted, and we never share or sell your data to third parties.</p>
            </div>
    
            <div className="p-5 mt-5 md:mt-0 md:ml-7 md:w-1/2 ">
                <h2 className="font-pacifico text-2xl mb-3 md:text-3xl">Welcome to Task-Tern, 
                <br />
                Sign In to continue.
                </h2>
                
                <p className="text-sm my-5 mb-12">Don&apos;t have an account? 
                <Link to={`/signup`}><span className="text-purple-500 hover:underline font-medium"> Create an account</span></Link> 
                <br />
                It takes less than a minute.</p>

                <form action="" className="flex flex-col">
                    
                    <span className="flex flex-col mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-300 focus:border-black block w-full p-2.5" placeholder="example@email.com" required/>
                    <p></p>
                    </span>
                    
                    <span className="flex flex-col mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
                    <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-300 focus:border-black block w-full p-2.5" placeholder="Your Password"  required/>
                    <p></p>
                    </span>

                    <button type="submit" className="p-3 my-4  mb-2 text-lg border border-black rounded-md hover:bg-black hover:text-white hover:font-bold md:px-7 md:mx-0 ">Sign In</button>
                    <span className='flex content-center justify-center hover:underline '>
                        <Google/>
                        <p className="text-black font-medium text-sm text-center mb-3">Sign In with Google</p> 
                    </span>
                    
                    <p className="text-purple-500 hover:underline font-medium text-xs text-center ">Forgot Password?</p> 

                </form>
    
            </div>
        </div>
    </div>
    )
    }
    