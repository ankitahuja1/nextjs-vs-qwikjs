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

export async function GetBlogPosts() {
    const response = await fetch(`https://www.lawctopus.com/wp-json/wp/v2/posts?per_page=100&page=3`);
    const jsonData = await response.json();
    return await jsonData;
};

export async function GetBlogData(id) {
    const response = await fetch(`https://www.lawctopus.com/wp-json/wp/v2/posts/${id}`);
    const jsonData = await response.json();
    return await jsonData;
};