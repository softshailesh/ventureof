const StatCard = ({ title, amount, icon }) => {
  return (
    <div className="bg-white rounded-xl border p-6 flex justify-between">
      <div>
        <p className="text-gray-500">{title}</p>
        <h2 className="text-2xl font-bold mt-2">
          {amount ?? 0}
        </h2>
      </div>

      <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-gray-100">
        {icon}
      </div>
    </div>
  );
};

export default StatCard;
