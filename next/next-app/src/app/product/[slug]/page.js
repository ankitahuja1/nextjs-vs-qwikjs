import { GetProduct } from "@/utils/GetProducts";
import Image from "next/image";
export default async function Page({ params }) {
  const product = await GetProduct(params.slug);

  return (
    <div key={product.id}>
      <span style={{ maxWidth: "30%", display: "inline-block" }}>
        <Image priority={true} alt={"product image"} width={600} height={1000} src={product.image}></Image>
      </span>
      <span style={{ maxWidth: "70%", display: "inline-block" }}>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <button
          style={{ color: "black", background: "lightgray", margin: "30px 0" }}
        >
          Buy Now
        </button>
      </span>
    </div>
  );
}
