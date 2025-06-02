import { Footer } from "@/components/Footer";
import { TextFade } from "@/components/Textfade";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col row-start-2 items-center text-center">
        <TextFade direction="up">
          <h1 className="pb-8 text-8xl font-bold font-serif">ansel brandt</h1>
        </TextFade>
        <div className="pb-6 text-xl font-semibold">
          Some things I&apos;ve built:
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <div className="flex flex-row space-x-2">
            <Link
              className="text-sky-700 text-xl hover:bg-sky-700 hover:text-neutral-50 transition"
              href="https://mappingmtl.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              mapping mtl
            </Link>
            <div>|</div>
            <Link
              className="text-xl hover:bg-sky-700 hover:text-neutral-50 transition"
              href="https://github.com/anselbrandt/mappingmtl"
              target="_blank"
              rel="noopener noreferrer"
            >
              code
            </Link>
          </div>
          <div>
            Interactive real estate visualization tool built using{" "}
            <Link
              className="underline hover:bg-sky-700 hover:text-neutral-50 transition"
              href="https://deck.gl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              deck.gl
            </Link>{" "}
            and{" "}
            <Link
              className="underline hover:bg-sky-700 hover:text-neutral-50 transition"
              href="https://www.mapbox.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              mapbox
            </Link>
          </div>
          <div className="flex flex-row space-x-2">
            <Link
              className="text-sky-700 text-xl hover:bg-sky-700 hover:text-neutral-50 transition"
              href="https://okapirank.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Okapi Rank
            </Link>
            <div>|</div>
            <Link
              className="text-xl hover:bg-sky-700 hover:text-neutral-50 transition"
              href="https://github.com/anselbrandt/okapi-rank"
              target="_blank"
              rel="noopener noreferrer"
            >
              code
            </Link>
          </div>
          <div>Podcast feed designed to maximize discoverability.</div>
          <div className="flex flex-row space-x-2">
            <Link
              className="text-sky-700 text-xl hover:bg-sky-700 hover:text-neutral-50 transition"
              href="/side-stacker"
              target="_blank"
              rel="noopener noreferrer"
            >
              Side-Stacker
            </Link>
            <div>|</div>
            <Link
              className="text-xl hover:bg-sky-700 hover:text-neutral-50 transition"
              href="https://github.com/anselbrandt/side-stacker"
              target="_blank"
              rel="noopener noreferrer"
            >
              code
            </Link>
          </div>
          <div>Real-time multiplayer game powered by a trained ML model.</div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Footer />
      </footer>
    </div>
  );
}
