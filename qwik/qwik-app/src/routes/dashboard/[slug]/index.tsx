import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const slug = useLocation().params.slug;
  const nav = useNavigate();
  const items = Array.from({ length: 50000 }, (_, i) => `${slug} ${i}`);

  return (
    <>
      <button onClick$={() => nav("/")}>
        ← Go back
      </button>

      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
});
