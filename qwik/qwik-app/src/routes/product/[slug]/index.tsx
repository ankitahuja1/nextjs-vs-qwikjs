import { component$,  useResource$, Resource } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export default component$<{ value: string }>(() => {
  const loc = useLocation().params.slug;

  const resources = useResource$(async () => {
    const url = `https://fakestoreapi.com/products/${loc}`;
    const resp = await fetch(url);
    return (await resp.json()) as {
      id: number;
      title: string;
      description: string;
      image: string;
    };
  });

  return (
    <>
      <Resource
        value={resources}
        onPending={() => <h1>Loading..</h1>}
        onResolved={(resources) => (
          <div key={resources.id}>
            <span
              style={{
                maxWidth: "70%",
                display: "inline-block",
                margin: "10px",
                boxSizing:"border-box"
              }}
            >
              <h1>{resources.title}</h1>
              <p>{resources.description}</p>
              <button style={{ color: "black", background: "lightgray" }}>
                Buy Now
              </button>
            </span>
          </div>
        )}
        onRejected={() => <h1>Error!</h1>}
      />
    </>
  );
});
