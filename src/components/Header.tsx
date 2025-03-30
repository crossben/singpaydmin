// import { Bell } from 'lucide-react';

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <div className="flex items-center justify-between ">
      <h1 className="text-2xl font-semibold text-black">{title}</h1>
    </div>
  );
}