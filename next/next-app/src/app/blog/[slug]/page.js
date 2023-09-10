import { GetBlogData } from "@/utils/GetProducts";

const BlogPost = async ({ params }) => {
  const blogData1 = await GetBlogData(params.slug);
  return (
    <div  stye={{margin:"30px"}}>
      <main>
        <h2>{blogData1.title['rendered']}</h2>
        <div dangerouslySetInnerHTML={{__html: blogData1.content['rendered']}}></div>
      </main>
    </div>
  );
};

export default BlogPost;
