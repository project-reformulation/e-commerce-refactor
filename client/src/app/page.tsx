import Image from "next/image";
import Link from "next/link";

export default function Home () {
  return (
    <main>
      <Link href="/SignUp"></Link>
      <Link href="/Login"></Link>
      <Link href="/Account"></Link>
      <Link href="/payment"></Link>
      <>Home</>
    </main>
  );
}
