import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { Shield, FileCheck, Zap, TrendingUp, LucideIcon } from "lucide-react";

interface ServiceFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceSection() {
  const features: ServiceFeature[] = [
    {
      icon: Shield,
      title: "법규 검토 자동화",
      description:
        "건축도면에 대한 법규 검토를 AI로 자동화하여, 설계·시공 과정에서 발생하는 법규 누락과 해석 오류를 근본적으로 줄입니다.",
    },
    {
      icon: FileCheck,
      title: "근거 기반 검토",
      description:
        "단순한 오류 탐지를 넘어, 각 위반 사항에 대해 관련 법 조항과 판단 근거를 함께 제시하는 신뢰도 높은 AI 검토 체계를 제공합니다.",
    },
    {
      icon: Zap,
      title: "실시간 검토",
      description:
        "설계 변경이 잦은 건축 실무 환경을 고려하여, 도면 변경 시에도 즉시 법규 적합성을 확인할 수 있는 구조를 제공합니다.",
    },
    {
      icon: TrendingUp,
      title: "검증된 성과",
      description:
        "도면 1건당 검토 시간을 기존 대비 50% 이상 단축하고, 주요 법규 항목에 대한 위반 검출 정확도 90% 이상을 달성합니다.",
    },
  ];

  return (
    <section id="service" className="py-20 bg-muted">
      <Container>
        <SectionHeader
          title="도면 검토 AI"
          subtitle="AI 기술로 건축도면 법규 검토를 자동화하여 산업의 효율성을 혁신합니다"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
