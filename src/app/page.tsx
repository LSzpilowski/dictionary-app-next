import { Card } from "@/components/ui/card";
import { Dictionary } from "./components/Dictionary";
import { Footer } from "./components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <Card className="w-full flex flex-col items-center justify-between min-h-screen border-0">
        <Dictionary />
        <Footer />
      </Card>
    </>
  );
}
