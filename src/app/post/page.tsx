import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function BlogPage() {
    const blogs = await prisma.post.findMany();
  return (
    <div>
        {blogs.map((blog) => (
            <div key={blog.id}>
                <h1>{blog.title}</h1>
                <p>{blog.content}</p>
            </div>
        ))}
    </div>
  )
}
