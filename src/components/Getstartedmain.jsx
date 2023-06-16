

export default function Getstartedmain() {
    const iconStyle = {
        width: '120px', 
        height: '120px', 
    };
return (
<div  className="bg-purple-400 p-7 rounded-lg mb-7 flex flex-col justify-center">
    <div className="flex justify-center align-middle">
    <lord-icon 
    style={iconStyle}
    trigger="loop" 
    src={`/src/assets/icons/wired-lineal-1725-exit-sign.json`}>
    </lord-icon>
    </div>
    <h4 className="text-3xl font-pacifico text-black mb-7 text-center md:mb-7">Ready to supercharge your productivity? Join thousands of satisfied users and experience the power of TaskTern today. 
        Sign up now and take control of your tasks like a pro!</h4>
        <button className="p-3 text-lg border border-black rounded-md hover:bg-black hover:text-purple-400 hover:font-bold md:px-7 md:mx-0 ">Try it for free!</button>
</div>
)
}
