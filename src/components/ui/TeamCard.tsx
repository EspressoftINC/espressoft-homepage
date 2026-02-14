import { User } from "lucide-react";

interface TeamCardProps {
  name: string;
  role: string;
  credentials: string[];
}

export default function TeamCard({ name, role, credentials }: TeamCardProps) {
  return (
    <div className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
          <User className="w-8 h-8 text-primary" />
        </div>
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
