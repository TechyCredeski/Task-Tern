import { useRouteError, useNavigate} from "react-router-dom";

export default function ErrorPage() {
const error = useRouteError();
console.error(error);
const navigate = useNavigate();
const goBack = () => {
    navigate(-1)
};

return (
<div id="error-page" className="flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-4xl font-pacifico text-black mb-7">Oops! Page Not Found</h1>
    <p className="my-10">The page you are looking for could not be found. Please check the URL and try again.</p>
    
    <button className="p-3 px-10 w-fit text-lg border border-purple-500 rounded-md hover:bg-purple-400 hover:font-bold md:px-9 md:mx-0" onClick={goBack}>Go Back</button>
    
    

</div>
);
}