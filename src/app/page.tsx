import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>Welcome to My Blog</h2>
      <Link href="/post">View Posts</Link>
    </div>
  );
}
