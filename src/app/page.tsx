import { Dictionary } from "./components/Dictionary";
import { Footer } from "./components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 py-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
        <div className="font-bold text-2xl">Wordly</div>
        <ThemeToggle />
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center mt-12 md:mt-16  pb-4 px-4">
        <Dictionary />
      </main>
      
      <Footer />
    </div>
  );
}
