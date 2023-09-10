import { GetProducts } from "@/utils/GetProducts";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "../components/sidebar/page";

export default async function hello() {
  const getResources = await GetProducts();

  return (
    <>
      <main style={{ maxWidth: "80%", margin: "20px auto" }}>
        <div style={{ display: "flex", height: "90vh", overflow: "hidden" }}>
          <div
            style={{
              width: "250px",
              height: "100%",
              position: "fixed",
              background: "#f5f5f5",
            }}
          >
            <Sidebar />
          </div>
          <div style={{ flex: 1, marginLeft: "250px", overflowY: "scroll" }}>
            <div>
              <h1>Products</h1>
              <ul>
                {getResources &&
                  getResources.map((el) => (
                    <li
                      key={el.id}
                      style={{ margin: "20px auto" }}
                    >
                      <span
                        style={{ maxWidth: "20%", display: "inline-block" }}
                      >
                        <Image
                          style={{ paddingRight: "10px" }}
                          width={60}
                          height={80}
                          src={`${el.image}`}
                          alt={"product image"}
                        />
                      </span>
                      <span
                        style={{ maxWidth: "85%", display: "inline-block" }}
                      >
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
          </div>
        </div>
      </main>
    </>
  );
}
