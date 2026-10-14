import Container from "@/components/ui/Container";
import { Building2, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <footer className="bg-slate-900 text-slate-100 py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Espressoft Inc.
            </h3>
            <p className="text-slate-300 mb-6">
              Redefining the standard of construction with AI that understands the field
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Building2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-1">CEO</p>
                <p className="text-slate-300">Jae-Hyun Myung</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-1">Address</p>
                <p className="text-slate-300">
                  Room 108, Bldg. 108, Chung-Ang University, 84 Heukseok-ro, Dongjak-gu, Seoul, Republic of Korea
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8">
          <p className="text-center text-slate-500 text-sm mb-2">
            Business Registration No. 278-86-03448
          </p>
          <p className="text-center text-slate-400 text-sm">
            © {new Date().getFullYear()} Espressoft Inc. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
