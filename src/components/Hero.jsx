import { Link } from "react-router-dom"


function Hero() {
return (
<>
    <div className="mt-6 flex justify-between flex-col md:flex-row md:mt-10" id="about">
        <img src="/src/assets/Images/4871715.jpg" alt="Desk calendar with marked dates 3d cartoon style icon" className="h-64 mb-10 rounded-2xl md:h-96 md:mr-7"/>
        <div className="md:mt-5 flex flex-col">
            <h2 className="text-3xl font-pacifico text-purple-400 mb-7 md:mb-9">From chaos to control: Transform your life with our seamless todo app.</h2>
            <p className="mb-6 md:mb-9">Stay organized and supercharge your productivity with TaskTern, the ultimate todo app designed to simplify your life.
                With its intuitive interface and powerful features, TaskTern helps you manage your tasks, 
                prioritize your goals, and accomplish more every day.</p>
            <Link to={'signup'} className="w-full">
            <button className="p-3 px-10 text-lg border border-purple-500 rounded-md hover:bg-purple-400 hover:font-bold md:px-9 md:mx-0 w-full">
            Get Started
            </button>
            </Link>

        </div>
    </div>
</>
)
}

export default Hero