

export default async function ProductDetails({ params }) {
    const { id } = await params
    return <div>this is product details page {id}</div>;
}