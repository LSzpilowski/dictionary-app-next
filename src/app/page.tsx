import { Card } from "@/components/ui/card";
import { Dictionary } from "./components/Dictionary";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <Card className="w-full flex flex-col items-center justify-between min-h-screen">
      <Dictionary />
      <Footer />
    </Card>
  );
}
