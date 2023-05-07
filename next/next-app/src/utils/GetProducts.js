export async function GetProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const jsonData = await response.json();
    return await jsonData;
};

export async function GetProduct(id) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const jsonData = await response.json();
    return await jsonData;
};