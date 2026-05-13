import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import TeamCard from "@/components/ui/TeamCard";

export default function AboutSection() {
  const team = [
    {
      name: "명재현",
      role: "CEO",
      image: "/team-myung.png",
      credentials: [
        "중앙대학교 건축공학",
        "퍼듀대학교 I2Safe 연구실",
        "AI+건축 논문 3편 발표",
      ],
    },
    {
      name: "박범규",
      role: "CTO",
      image: "/team-park-bk.png",
      credentials: [
        "서울대학교 컴퓨터공학 학석사",
        "네이버 클라우드 K-AI Frontiers",
        "AI 모델 프레임워크 개발",
      ],
    },
    {
      name: "김민석",
      role: "COO",
      image: "/team-kim.png",
      credentials: [
        "서울시립대학교 전자전기컴퓨터공학",
        "컴퓨터비전 연구",
        "백엔드 & 프론트엔드 총괄",
      ],
    },
    {
      name: "박석원",
      role: "CSO",
      image: "/team-park-sw.jpeg",
      credentials: [
        "한양대학교 정보시스템학과",
        "재무·회계 총괄",
        "마케팅 전략 총괄",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              credentials={member.credentials}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
