import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1 >
        Time to get started!
        <Link href="/meals">  Meals   </Link>
      </h1> 
    </main>
  );
}
