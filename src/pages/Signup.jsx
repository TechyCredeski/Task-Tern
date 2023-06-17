

export default function Signup() {
return (

<div className= "h-full flex content-center">
    <div className="flex flex-col justify-between m-auto mt-8 p-3 w-4/5 bg-purple-100  mb-5 md:flex-row rounded-md">
        <div className="bg-purple-400 hidden  p-5 rounded-md md:w-1/2  md:block">
        <h1 className="text-2xl font-pacifico text-black">Task-Tern</h1>
        <h2 className="text-3xl mt-12 font-pacifico text-black mb-7 md:mb-9">From chaos to control: Transform your life with our seamless todo app.</h2>
        <p>Your journey to a more organized life starts here. Say goodbye to chaos and hello to productivity, 
            discover a new level of efficiency. Signing Up is quick and easy, takes less than a minute.</p>
        </div>

        <div className="p-5 mt-5 md:mt-0 md:ml-7 md:w-1/2 ">
            <h3 className="font-pacifico text-2xl mb-3">Get Started</h3>
            <p className="mb-7">Create your account</p>

            <form action="" className="flex flex-col">
                <span className="flex flex-col mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Full name</label>
                <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-300 focus:border-black block w-full p-2.5" placeholder="John Doe" required/>
                <p></p>
                </span>
                
                <span className="flex flex-col mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-300 focus:border-black block w-full p-2.5" placeholder="example@email.com" required/>
                <p></p>
                </span>
                
                <span className="flex flex-col mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium">Your password</label>
                <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-300 focus:border-black block w-full p-2.5" placeholder="New Password"  required/>
                <p></p>
                </span>

                <span className="flex flex-col mb-5">
                <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 ">Repeat password</label>
                <input type="password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-300 focus:border-black block w-full p-2.5" placeholder="Re-type Password"  required/>
                </span>
                
                <div className="flex items-center mb-4">
                <input id="checkbox" type="checkbox" value="" className="w-4 h-4 text-purple-500 bg-gray-100 border-gray-300 rounded focus:ring-purple-500" />
                <label htmlFor="checkbox" className="ml-2 text-sm font-medium text-gray-900 ">I agree to the <a href="#" className="text-purple-500 hover:underline ">terms and conditions</a>.</label>
                </div>

                <button type="submit" className="p-3 my-5 text-lg border border-black rounded-md hover:bg-black hover:text-white hover:font-bold md:px-7 md:mx-0 ">Sign Up</button>
            </form>

            <p className="text-center">Have an account? <span className="text-purple-500 hover:underline font-medium">Login</span> </p>
        </div>
    </div>
</div>
)
}
