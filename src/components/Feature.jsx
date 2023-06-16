

// eslint-disable-next-line react/prop-types
export default function Feature({title, content}) {
return (
<>
<div className="p-2 text-center rounded-md mb-5 hover:border-purple-500 hover:border md:w-1/2 ">
    <h3 className="text-2xl font-pacifico text-purple-400 mb-7 md:mb-7">{title}</h3>
    <p>{content}</p>
</div>
</>

)
}
