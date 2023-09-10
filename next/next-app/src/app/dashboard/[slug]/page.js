'use client'
import { useRouter } from "next/navigation";

export default async function Page({ params }) {
 const router = useRouter();

  const slug = params.slug;

  const items = Array.from({ length: 50000 }, (_, i) => `${slug} ${i}`);

  return (
    <>
      <button type="button" onClick={() => router.push("/")}>
      ← Go back
      </button>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
