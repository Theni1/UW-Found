import Link from "next/link";

export default async function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-6">
      <div className="max-w-xl text-center -translate-y-12">
        <h1 className="text-4xl font-bold text-yellow-400 mb-3 tracking-normal">UW Lost and Found </h1>
        <p className="text-lg font-medium text-gray-100 mb-4"> Tired of losing items and having nowhere to look? </p>
        <Link href="/student/" className="inline-block bg-yellow-400 text-black font-bold px-4 py-2 rounded-xl shadow-lg hover:transform transition-transform duration-200 hover:scale-105">
          Get Started
        </Link>
      </div>
    </div>
  );
}
