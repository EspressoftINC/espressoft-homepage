import Container from "@/components/ui/Container";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToService = () => {
    const serviceSection = document.getElementById("service");
    serviceSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-muted to-background">
      <Container>
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            현장을 이해하는 AI,
            <br />
            건축 산업의 기준을
            <br />
            다시 정의합니다
          </h1>
          <p className="text-lg sm:text-xl text-secondary mb-8 max-w-2xl mx-auto">
            건축도면 법규 검토를 자동화하여 설계와 시공의 효율성을 높입니다
          </p>
          <button
            onClick={scrollToService}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
          >
            서비스 알아보기
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </Container>
    </section>
  );
}
