import Link from "next/link";

export default function Products() {
    return <div>
        this is products page
        <Link href="products/1">Product 01</Link>
        <Link href="products/2">Product 02</Link>
        <Link href="products/3">Product 03</Link>

    </div>;
}

//