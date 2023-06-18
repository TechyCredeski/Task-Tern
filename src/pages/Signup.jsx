import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup"; 


export default function Signup() {

    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            fullName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),

            email: Yup.string()
            .email("Add a valid email address")
            .required("Required"),

            password: Yup.string()
            .min(8, 'Password must be 8 characters long')
            .matches(/[0-9]/, 'Password requires a number')
            .matches(/[a-z]/, 'Password requires a lowercase letter')
            .matches(/[A-Z]/, 'Password requires an uppercase letter')
            .matches(/[^\w]/, 'Password requires a symbol')
            .required("Required"),
            confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Must match "password"')
            .required("Required"),
                }),
        onSubmit: (values) => {
            console.log( values)
        },
    });


return (

<div className= "h-full flex">
    <div className="flex flex-col justify-between m-auto mt-3 p-3 w-4/5 bg-purple-100  mb-5 md:flex-row rounded-md">
        <div className="bg-purple-400 hidden  p-5 rounded-md md:w-1/2  md:block">
        <h1 className="text-2xl font-pacifico text-black">Task-Tern</h1>
        <h2 className="text-3xl mt-12 font-pacifico text-black mb-7 md:mb-9">From chaos to control: Transform your life with our seamless todo app.</h2>
        <p>Your journey to a more organized life starts here. Say goodbye to chaos and hello to productivity, 
            discover a new level of efficiency. Signing Up is quick and easy, takes less than a minute.</p>
        </div>

        <div className="p-5 mt-5 md:mt-0 md:ml-7 md:w-1/2 ">
            <h3 className="font-pacifico text-2xl mb-3">Get Started</h3>
            <p className="mb-7">Create your account</p>

            <form className="flex flex-col" onSubmit={formik.handleSubmit}>
                <span className="flex flex-col mb-5">
                <label htmlFor="fullName" className="block mb-2 text-sm font-medium">Full name</label>
                <input 
                type="text" 
                id="fullName" 
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-300 focus:border-black block w-full p-2.5" 
                placeholder="John Doe" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}  
                />
                {formik.touched.fullName && formik.errors.fullName ? <p className= "text-right text-red-500 font-bold text-sm">{formik.errors.fullName}</p> : null}
                </span>
                
                <span className="flex flex-col mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                <input 
                type="email" 
                id="email" 
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-300 focus:border-black block w-full p-2.5" 
                placeholder="example@email.com" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email} 
                />
                {formik.touched.email && formik.errors.email ? <p className= "text-right text-red-500 font-bold text-sm">{formik.errors.email}</p> : null}
                </span>
                
                <span className="flex flex-col mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium">Your password</label>
                <input 
                type="password" 
                id="password" 
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-300 focus:border-black block w-full p-2.5" 
                placeholder="New Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}   
                />
                {formik.touched.password && formik.errors.password ? <p className= "text-right text-red-500 font-bold text-sm">{formik.errors.password}</p> : null}
                </span>

                <span className="flex flex-col mb-5">
                <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 ">Repeat password</label>
                <input 
                type="password" 
                id="confirmPassword" 
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-300 focus:border-black block w-full p-2.5" 
                placeholder="Re-type Password"  
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? <p className= "text-right text-red-500 font-bold text-sm">{formik.errors.confirmPassword}</p> : null}
                </span>

                <button type="submit" className="p-3 my-3 mb-2 text-lg border border-black rounded-md hover:bg-black hover:text-white hover:font-bold md:px-7 md:mx-0 ">Sign Up</button>
            </form>

            <p className="text-center">Have an account? 
            <Link to={`/login`}><span className="text-purple-500 hover:underline font-medium "> Login</span> </Link>
            </p> 
        </div>
    </div>
</div>
)
}
