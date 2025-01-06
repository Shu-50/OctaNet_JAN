

function ProductCard() {
    return (
        <div className='overflow-hidden w-80 h-96 p-5 bg-white rounded-lg shadow-2xl shadow-gray-500 hover:shadow-gray-900'>
            <img src="src/assets/img.jpg" className=" object-cover w-full h-60 rounded-lg "></img>
            <h1 className="p-1 my-1 bg-inherit">Product Name</h1>
            <h1 className="p-1 my-1 bg-inherit">$233.321</h1>
            <h1 className="p-1 my-1 bg-inherit">*****</h1>
        </div>
    )
}

export default ProductCard




// import React from "react";

// function ProductCard({ product }) {
//     return (
//         <div className="overflow-hidden w-80 h-96 p-5 bg-white rounded-lg shadow-2xl shadow-gray-500 hover:shadow-gray-900 transition-shadow duration-300">
//             <img
//                 src={product.image}
//                 alt={product.name}
//                 className="object-cover w-full h-60 rounded-lg"
//             />
//             <h1 className="p-1 my-1 text-lg font-bold">{product.name}</h1>
//             <h1 className="p-1 my-1 text-green-600 font-semibold">${product.price}</h1>
//             <h1 className="p-1 my-1 text-yellow-500">
//                 {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
//             </h1>
//         </div>
//     );
// }

// export default ProductCard;

