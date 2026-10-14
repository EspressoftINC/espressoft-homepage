import Container from "@/components/ui/Container";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const scrollToDemo = () => {
    const demo = document.getElementById("demo");
    demo?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-muted to-background">
      <Container>
        <div className="text-center">
          <Image
            src="/logo.png"
            alt="Espressoft Inc. logo"
            width={220}
            height={220}
            priority
            className="mx-auto mb-8 h-auto w-40 sm:w-48 lg:w-56"
          />
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            AI That Understands the Field,
            <br />
            Redefining the Standard
            <br />
            of Construction
          </h1>
          <p className="text-lg sm:text-xl text-secondary mb-8 max-w-2xl mx-auto">
            Explore IFC building models in 3D and query BIM data in plain language
          </p>
          <button
            onClick={scrollToDemo}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            Watch Demo
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </Container>
    </section>
  );
}
