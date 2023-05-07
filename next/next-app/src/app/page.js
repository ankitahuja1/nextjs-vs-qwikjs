import { GetProducts } from "@/utils/GetProducts";
import Link from "next/link";
import Image from "next/image";

export default async function hello() {
  const getResources = await GetProducts();

  return (
    <>
      <h1 style={{ maxWidth: "60%", margin: "20px auto" }}>Products</h1>
      <div>
        <ul>
          {getResources &&
            getResources.map((el) => (
              <li key={el.id} style={{ maxWidth: "60%", margin: "20px auto" }}>
                <span style={{ maxWidth: "20%", display: "inline-block" }}>
                  <Image
                    style={{ paddingRight: "10px" }}
                    width={60}
                    height={80}
                    src={`${el.image}`}
                    alt={"product image"}
                  />
                </span>
                <span style={{ maxWidth: "85%", display: "inline-block" }}>
                  <Link href={`/product/${el.id}`}>
                    <h3
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 1,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {el.title}
                    </h3>
                    <p
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 3,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {el.description}
                    </p>
                  </Link>
                </span>
                <br />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
