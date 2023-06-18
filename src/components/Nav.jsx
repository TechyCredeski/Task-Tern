import { Link } from "react-router-dom"


export default function Nav() {
return (
<nav className="mt-2  flex items-center justify-between p-3 px-10 md:w-full " id="nav">
    <h1 className="text-3xl font-pacifico text-purple-400">Task-Tern</h1>
    <div className="flex items-center justify-between space-x-0.5 ">
        <Link to={'signup'}>
        <button className="p-1 px-3 border border-purple-400 rounded-md hover:bg-purple-400 hover:font-bold">Get Started</button>
        </Link>
    </div>
</nav>
)
}
