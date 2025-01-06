// function Filter() {
//     return (
//         <>
//             <div className="w-1/4 h-full bg-gray-200 p-4 rounded-md">
//                 Left Part
//             </div>
//         </>
//     );
// }

// export default Filter;


import { useState } from "react";

function Filter() {
    const [filters, setFilters] = useState({
        category: "",
        priceRange: [0, 1000],
        rating: 0,
    });

    const handleInputChange = (key, value) => {
        const updatedFilters = { ...filters, [key]: value };
        setFilters(updatedFilters);
        // onFilterChange(updatedFilters); // Pass updated filters to parent component
    };

    return (
        <div className="w-1/4 h-full bg-gray-200 p-4 rounded-md">
            <h2 className="text-xl font-bold mb-4">Filters</h2>

            {/* Category Filter */}
            <div className="mb-4">
                <label className="block mb-2 font-medium">Category</label>
                <select
                    value={filters.category}
                    onChange={(e) => handleInputChange("category", e.target.value)}
                    className="w-full p-2 border rounded"
                >
                    <option value="">All Categories</option>
                    <option value="electronics">Electronics</option>
                    <option value="fashion">Fashion</option>
                    <option value="home">Home</option>
                    <option value="books">Books</option>
                </select>
            </div>

            {/* Price Range Filter */}
            <div className="mb-4">
                <label className="block mb-2 font-medium">Price Range</label>
                <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    value={filters.priceRange[1]}
                    onChange={(e) =>
                        handleInputChange("priceRange", [0, parseInt(e.target.value)])
                    }
                    className="w-full"
                />
                <div className="flex justify-between text-sm">
                    <span>$0</span>
                    <span>${filters.priceRange[1]}</span>
                </div>
            </div>

            {/* Rating Filter */}
            <div className="mb-4">
                <label className="block mb-2 font-medium">Ratings</label>
                <select
                    value={filters.rating}
                    onChange={(e) => handleInputChange("rating", parseInt(e.target.value))}
                    className="w-full p-2 border rounded"
                >
                    <option value="0">All Ratings</option>
                    <option value="1">1 Star & Up</option>
                    <option value="2">2 Stars & Up</option>
                    <option value="3">3 Stars & Up</option>
                    <option value="4">4 Stars & Up</option>
                    <option value="5">5 Stars</option>
                </select>
            </div>
        </div>
    );
}

export default Filter;
