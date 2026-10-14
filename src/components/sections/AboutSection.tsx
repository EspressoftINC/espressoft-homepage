import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import TeamCard from "@/components/ui/TeamCard";

export default function AboutSection() {
  const team = [
    {
      name: "Jae-Hyun Myung",
      role: "CEO",
      image: "/team-myung.png",
      credentials: [
        "B.S. Architectural Engineering, Chung-Ang University",
        "I2Safe Lab, Purdue University",
        "3 publications on AI in architecture",
      ],
    },
    {
      name: "Bumkyu Park",
      role: "CTO",
      image: "/team-park-bk.png",
      credentials: [
        "B.S. & M.S. Computer Science, Seoul National University",
        "K-AI Frontiers, NAVER Cloud",
        "AI model framework development",
      ],
    },
    {
      name: "Minseok Kim",
      role: "COO",
      image: "/team-kim.png",
      credentials: [
        "Electrical & Computer Engineering, University of Seoul",
        "Computer vision research",
        "Leads backend & frontend",
      ],
    },
    {
      name: "Seokwon Park",
      role: "CSO",
      image: "/team-park-sw.jpeg",
      credentials: [
        "Information Systems, Hanyang University",
        "Leads finance & accounting",
        "Leads marketing strategy",
      ],
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <Container>
        <SectionHeader
          title="Our Team"
          subtitle="Experts driving industry innovation at the intersection of architecture and AI"
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
