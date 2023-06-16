

export default function Footer() {
return (
<footer className="p-5 bg-purple-400">
<div className="flex flex-col content-center  md:flex-row md:justify-between">
<section className="md:flex md:flex-col md:justify-between">
<h4 className="text-3xl font-pacifico text-black text-center md:text-left">Task-Tern</h4>
<p className="font-thin text-xs text-center">&copy; 2023 Task-Tern. All rights reserved.</p>
</section>

<ul className="mt-5 text-center flex justify-between w-9/12 mx-auto flex-col mb-5 md:w-3/12 md:mt-0 md:mb-0 md:text-left">
    <h5 className="text-xl text-black mb-2 font-bold">Quick Links</h5>
    <li className="mb-1"><p>About</p></li>
    <li className="mb-1"><p>Contact</p></li>
    <li className="mb-1"><p>Features</p></li>
    <li className="font-bold"><p>Get Started</p></li>
</ul>
<div className="flex flex-col content-center text-center">
<span className="text-xl font-bold"><a href="https://github.com/TechyCredeski" target="blank">Built by Techy Credeski</a></span>
<span className="font-thin text-xs"><a href="https://lordicon.com/" target="blank">Icons by Lordicon.com</a></span>
</div>
</div>
</footer>

)
}
