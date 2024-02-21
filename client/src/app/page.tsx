import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1> hello</h1>
    <Link href="/components/wishlist"> click</Link>
    <Link href="/components/cart"> add</Link>
    <Link href="/components/footer">footer</Link>
    <Link href="/components/nav">nav</Link>
    </main>
  );
}
