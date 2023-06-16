

export default function Nav() {
return (
<nav className="flex items-center justify-between p-3 px-10 w-full">
    <h1 className="text-2xl font-pacifico text-purple-400">Task-Tern</h1>
    <div className="flex items-center justify-between space-x-0.5 ">
        <button className="mx-2 p-1 px-3 rounded-md hover:bg-purple-200">Login</button>
        <button className="p-1 px-3 border border-purple-400 rounded-md hover:bg-purple-400">Sign up</button>
    </div>
</nav>
)
}
