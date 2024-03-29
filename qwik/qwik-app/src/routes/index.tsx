import { component$, useResource$, Resource } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Sidebar } from "../components/sidebar/sidebar";

export default component$<{ value: string }[]>(() => {
  const resources = useResource$(async () => {
    const url = "https://fakestoreapi.com/products";
    const resp = await fetch(url);
    return (await resp.json()) as {
      id: number;
      title: string;
      description: string;
      image: string;
    }[];
  });

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
            <h1>Products</h1>
            <Resource
              value={resources}
              onPending={() => <h1>Loading..</h1>}
              onResolved={(resources) => (
                <div>
                  {resources.map((el) => (
                    <span
                      key={el.id}
                      style={{
                        border: "1px solid white",
                        padding: "10px",
                        margin: "10px",
                        borderRadius: "8px",
                      }}
                    >
                      <Link href={`/product/${el.id}`}>
                        <span
                          style={{
                            maxWidth: "20%",
                            width: "10%",
                            display: "inline-block",
                          }}
                        >
                          <img
                            style={{ maxWidth: "80%" }}
                            src={`${el.image}`}
                          />
                        </span>
                        <span
                          style={{ maxWidth: "80%", display: "inline-block" }}
                        >
                          <h4 style={{ display: "inline-block" }}>
                            {el.title}
                          </h4>
                          <p style={{ display: "inline-block" }}>
                            {" "}
                            {el.description}
                          </p>
                        </span>
                      </Link>
                    </span>
                  ))}
                </div>
              )}
              onRejected={() => <h1>Error!</h1>}
            />
          </div>
        </div>
      </main>
    </>
  );
});
