import { GetBlogPosts } from "@/utils/GetProducts";
import Link from "next/link";


const Header = () => (
  <header>
    <h1>My Blog</h1>
  </header>
);

const Footer = () => (
  <footer>
    <p>&copy; 2023 My Blog</p>
  </footer>
);

export default async function Page() {

  const posts = await GetBlogPosts();

  return (
    <div style={{ display: "flex" }}>

      <main style={{ margin: "40px" }}>
        <Header />
        {posts.map((post) => (
          <div key={post.id} style={{ marginBottom: "20px" }}>
            <Link href={ `/blog/` + post.id } ><h2>{post.title['rendered']}</h2></Link>
            <p>{post.body}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

