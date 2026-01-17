import Image from "next/image";
import ProductActions from "../../components/product-detail/product-actions";
import priceFormatter from "@/app/utils/price-formatter";

const ProductDetail = () => {
    return (
        <main className="container mx-auto py-40 flex gap-12">
            <div className="bg-primary-light aspect-square min-w-140 grid place-items-center">
                <Image 
                    src="/images/products/product-4.png"
                    width="550"
                    height="550"
                    className="object-contain w-full h-full"
                    alt="product Image"
                />
            </div>
            <div className="w-full py-7">
                <h1 className="font-bold text-5xl mb-5">SportsOn HyperSoccer v2</h1>
                <div className="py-2 px-6 rounded-full mb-5 bg-primary-light text-primary w-fit">Football</div>
                <p className="mb-7 leading-loose">The SportsOn HyperSoccer v2 is engineered for the player who demands precision, power, and unrivaled speed on the pitch. Featuring a striking, two-toned black and white design with deep crimson accents, these cleats don`t just perform—they make a statement. Experience the future of football footwear with v2`s enhanced fit and cutting-edge traction.</p>
                <div className="text-primary font-semibold text-3xl mb-12 ">
                    {
                        priceFormatter(458000)   
                    }
                </div>
                <ProductActions />
            </div>
        </main>
    );
};

export default ProductDetail;