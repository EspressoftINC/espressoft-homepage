import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { Box, MessagesSquare, Sparkles, MousePointerClick, LucideIcon } from "lucide-react";

interface ServiceFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceSection() {
  const features: ServiceFeature[] = [
    {
      icon: Box,
      title: "IFC 3D 뷰어",
      description:
        "별도 BIM 도구 없이 웹 브라우저에서 IFC 모델을 즉시 시각화합니다. 회전·줌·팬은 물론 요소 클릭 선택까지 매끄럽게 지원합니다.",
    },
    {
      icon: MessagesSquare,
      title: "자연어 BIM 질의",
      description:
        "BIM 쿼리 언어나 SQL을 몰라도 누구나 모델을 분석할 수 있습니다.",
    },
    {
      icon: Sparkles,
      title: "AI Text-to-SQL 엔진",
      description:
        "질문을 IFC 스키마에 맞는 SQL로 자동 변환하여 BIM DB에서 즉시 결과를 산출합니다. 높은 보안성과 정확도를 보장합니다.",
    },
    {
      icon: MousePointerClick,
      title: "3D 연동 하이라이트",
      description:
        "AI 답변에 언급된 건축 요소를 3D 뷰어에서 자동으로 강조 표시합니다. 데이터와 형상을 한눈에 연결하여 의사결정 속도를 높입니다.",
    },
  ];

  return (
    <section id="service" className="py-20 bg-muted">
      <Container>
        <SectionHeader
          title="BIBIM — BIM Intelligence"
          subtitle="IFC 모델을 3D로 보면서 자연어로 질의하는 차세대 BIM 분석 플랫폼"
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
