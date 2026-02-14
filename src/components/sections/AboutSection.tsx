import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import TeamCard from "@/components/ui/TeamCard";

export default function AboutSection() {
  const team = [
    {
      name: "명재현",
      role: "CEO",
      credentials: [
        "중앙대학교 건축공학",
        "고려대학교 건설자동화연구실",
        "AI+건축 논문 3편 발표",
      ],
    },
    {
      name: "박범규",
      role: "CTO",
      credentials: [
        "서울대학교 컴퓨터공학 학석사",
        "네이버 클라우드 K-AI Frontiers 출신",
        "AI 파운데이션 모델 개발",
      ],
    },
    {
      name: "김민석",
      role: "COO",
      credentials: [
        "서울시립대학교 전자전기컴퓨터공학",
        "컴퓨터비전 연구",
        "백엔드 & 프론트엔드 총괄",
      ],
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <Container>
        <SectionHeader
          title="팀 소개"
          subtitle="건축과 AI 기술의 융합을 통해 산업 혁신을 이끌어가는 전문가들입니다"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              credentials={member.credentials}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
