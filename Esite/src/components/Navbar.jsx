function Navbar() {
    return (
        <>
            <div>
                <div className="flex justify-between items-center w-full  bg-white p-4 px-8 rounded-lg shadow">
                    <div className="flex items-center space-x-8">
                        <span className="text-xl font-bold">Logo</span>
                        <nav className="flex space-x-4">
                            <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
                            <a href="#" className="text-gray-700 hover:text-gray-900">About Us</a>
                            <a href="#" className="text-gray-700 hover:text-gray-900">Business</a>
                        </nav>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="p-2 bg-blue-500 text-white rounded">Account</button>
                        <button className="p-2 bg-green-500 text-white rounded">Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;