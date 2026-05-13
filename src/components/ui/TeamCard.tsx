import Image from "next/image";
import { User } from "lucide-react";

interface TeamCardProps {
  name: string;
  role: string;
  credentials: string[];
  image?: string;
}

export default function TeamCard({ name, role, credentials, image }: TeamCardProps) {
  return (
    <div className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-4">
        {image ? (
          <div className="relative w-28 h-28 rounded-full overflow-hidden bg-muted ring-2 ring-primary/10">
            <Image
              src={image}
              alt={`${name} ${role}`}
              fill
              sizes="112px"
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-28 h-28 bg-muted rounded-full flex items-center justify-center">
            <User className="w-12 h-12 text-primary" />
          </div>
        )}
      </div>
      <h3 className="text-xl font-bold text-foreground text-center mb-1">
        {name}
      </h3>
      <p className="text-primary font-semibold text-center mb-4">
        {role}
      </p>
      <ul className="space-y-2">
        {credentials.map((credential, index) => (
          <li key={index} className="text-sm text-secondary text-center">
            {credential}
          </li>
        ))}
      </ul>
    </div>
  );
}
