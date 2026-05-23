import Link from "next/link";

export default function Home() {
  console.log('rendering...')

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
         <Link href="/">Home</Link>
         <Link href="/about">About</Link>
         <Link href="/products">Products</Link>
        </div>
       
      </main>
    </div>
  );
}
