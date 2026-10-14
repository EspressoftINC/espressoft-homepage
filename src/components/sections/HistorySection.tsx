import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

interface HistoryItem {
  date: string;
  title: string;
}

export default function HistorySection() {
  const history: HistoryItem[] = [
    {
      date: "2024.09",
      title: "Award, BIM Division — Engineering Industry Competition",
    },
    {
      date: "2025.08",
      title: "Selected for Yongsan-gu Startup Support Center",
    },
    {
      date: "2025.12",
      title: "Espressoft Inc. officially incorporated",
    },
    {
      date: "2026.03",
      title: "Selected for Chung-Ang University Campus Town",
    },
  ];

  return (
    <section id="history" className="py-20 bg-muted">
      <Container>
        <SectionHeader
          title="Milestones"
          subtitle="The path Espressoft has taken so far"
        />
        <div className="relative mx-auto max-w-3xl">
          {/* 중앙 세로선 — 마지막 점 아래로 꼬리를 두고 그 구간에서 페이드 */}
          <div className="absolute top-2 -bottom-12 left-5 md:left-1/2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary via-accent via-[80%] to-transparent" />

          <div className="space-y-10">
            {history.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className="relative">
                  {/* 타임라인 점 */}
                  <span className="absolute top-1.5 left-5 md:left-1/2 -translate-x-1/2 z-10 h-4 w-4 rounded-full bg-gradient-to-br from-primary to-accent ring-4 ring-muted" />

                  {/* 내용 카드 — 데스크톱에서 좌우 번갈아 배치 */}
                  <div
                    className={`pl-12 md:w-1/2 md:pl-0 ${
                      isLeft
                        ? "md:pr-10 md:text-right"
                        : "md:ml-auto md:pl-10"
                    }`}
                  >
                    <p className="mb-1 text-sm font-semibold text-primary">
                      {item.date}
                    </p>
                    <p className="text-lg font-medium text-foreground">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
