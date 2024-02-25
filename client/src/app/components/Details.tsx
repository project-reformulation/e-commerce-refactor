export const Details: React.FC<{ title: string; value: string }> = ({
  title,
  value,
}) => {
  return (
    <div className="bg-transparent rounded-none">
      <div className="stat">
        <div className="text-gray-500">{title}</div>
        <div className="stat-value text-lg">{value}</div>
      </div>
    </div>
  );
};
