import { Footer } from "@/components/Footer";
import { TextFade } from "@/components/Textfade";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center text-center">
        <TextFade direction="up">
          <h1 className="text-8xl font-bold font-serif">ansel brandt</h1>
        </TextFade>
        <div className="text-xl font-semibold">
          Some things I&apos;ve built:
        </div>
        {}
        <div className="flex flex-row space-x-2">
          <Link
            className="hover:bg-sky-700 hover:text-neutral-50 transition"
            href="https://mappingmtl.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            mapping mtl
          </Link>
          <div>|</div>
          <Link
            className="hover:bg-sky-700 hover:text-neutral-50 transition"
            href="https://github.com/anselbrandt/mappingmtl"
            target="_blank"
            rel="noopener noreferrer"
          >
            code
          </Link>
        </div>
        <div className="flex flex-row space-x-2">
          <Link
            className="hover:bg-sky-700 hover:text-neutral-50 transition"
            href="https://okapirank.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Okapi Rank
          </Link>
          <div>|</div>
          <Link
            className="hover:bg-sky-700 hover:text-neutral-50 transition"
            href="https://github.com/anselbrandt/okapi-rank"
            target="_blank"
            rel="noopener noreferrer"
          >
            code
          </Link>
        </div>
        <div className="flex flex-row space-x-2">
          <Link
            className="hover:bg-sky-700 hover:text-neutral-50 transition"
            href="/side-stacker"
            target="_blank"
            rel="noopener noreferrer"
          >
            Side-Stacker
          </Link>
          <div>|</div>
          <Link
            className="hover:bg-sky-700 hover:text-neutral-50 transition"
            href="https://github.com/anselbrandt/side-stacker"
            target="_blank"
            rel="noopener noreferrer"
          >
            code
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Footer />
      </footer>
    </div>
  );
}
