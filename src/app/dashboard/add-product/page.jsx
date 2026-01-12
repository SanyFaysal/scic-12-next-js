export default async function AddProduct() {
    let data = await fetch('https://jsonplaceholder.typicode.com/users')
    let posts = await data.json()
    console.log({ posts });

    return <div>this is add product</div>;
}