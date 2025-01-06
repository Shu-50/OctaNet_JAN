import ProductCard from "./ProductCard";

function Container() {
    return (
        <>
            <div className="flex flex-wrap justify-center gap-10 w-3/4 h-5/6 py-10 ">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </>
    );
}

export default Container;