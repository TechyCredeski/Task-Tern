import Nav from "../components/Nav"
import Hero from "../components/Hero"
import Features from "../layouts/Features"

export default function Landing() {
return (
    <div className= "background-color: rgb(255 255 255); font-openSans">
    <Nav/>
    <section className="w-10/12 m-auto">
    <Hero/>
    <Features/>
    </section>
    </div>

)
}
