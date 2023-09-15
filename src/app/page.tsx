import Link from "next/link";

export default function Home() {
  return <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1 className="text-4xl">Frontend Notes</h1>
    <section className="flex flex-col items-center">
      <h2>General</h2>
      <p>
        <Link href="/css/sizing">Sizing</Link>
      </p>
    </section>
    <section className="flex flex-col items-center">
      <h2 className="text-lg">Snippets</h2>
      <ul className="text-base">
        <li className="underline">
          <Link href="/snippets/debounce">Debounce</Link>
        </li>
        <li className="underline">
          <Link href="/snippets/throttle">Throttle</Link>
        </li>
      </ul>
    </section>
  </main>
}
