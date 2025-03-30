interface StatCardProps {
  title: string;
  value: string | number;
}

export function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-sm text-gray-600 mb-2 font-bold">{title}</h3>
      <p className="text-2xl font-semibold text-blue-500">{value}</p>
    </div>
  );
}