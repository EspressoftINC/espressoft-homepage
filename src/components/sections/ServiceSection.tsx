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
      title: "IFC 3D Viewer",
      description:
        "Visualize IFC models instantly in your browser — no BIM software required. Rotate, zoom, pan, and click to select elements seamlessly.",
    },
    {
      icon: MessagesSquare,
      title: "Natural Language BIM Queries",
      description:
        "Anyone can analyze a model — no BIM query language or SQL knowledge needed.",
    },
    {
      icon: Sparkles,
      title: "AI Text-to-SQL Engine",
      description:
        "Questions are automatically translated into IFC-schema-aware SQL and answered directly from the BIM database — secure and accurate.",
    },
    {
      icon: MousePointerClick,
      title: "Linked 3D Highlighting",
      description:
        "Elements mentioned in AI answers are highlighted in the 3D viewer automatically, connecting data and geometry at a glance for faster decisions.",
    },
  ];

  return (
    <section id="service" className="py-20 bg-muted">
      <Container>
        <SectionHeader
          title="BIBIM — BIM Intelligence"
          subtitle="A next-generation BIM analytics platform — explore IFC models in 3D and ask questions in plain language"
        />
        <div id="demo" className="mx-auto mb-16 max-w-4xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-slate-900 shadow-2xl ring-1 ring-border">
            <iframe
              src="https://www.youtube-nocookie.com/embed/2fv_Unq3YiE?rel=0"
              title="BIBIM — Bot Interface for BIM demo"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
          <p className="mt-4 text-center text-sm text-secondary">
            See BIBIM in action — from loading an IFC model to answering questions in plain language
          </p>
        </div>
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
