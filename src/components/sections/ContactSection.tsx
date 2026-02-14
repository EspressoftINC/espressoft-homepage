import Container from "@/components/ui/Container";
import { Building2, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <footer className="bg-slate-900 text-slate-100 py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              에스프레소프트 주식회사
            </h3>
            <p className="text-slate-300 mb-6">
              현장을 이해하는 AI로 건축 산업의 기준을 다시 정의합니다
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Building2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-1">대표</p>
                <p className="text-slate-300">명재현</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-1">주소</p>
                <p className="text-slate-300">
                  서울특별시 용산구 청파로 77, 창업지원센터 4호실
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8">
          <p className="text-center text-slate-400 text-sm">
            © {new Date().getFullYear()} 에스프레소프트 주식회사. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
