import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Users,
  FileText,
  UserCheck,
  UserX,
} from "lucide-react";

import StatCard from "./common_component/StatCard";
import { fetchAdminDashboardThunk } from "../store/slice/adminDashboardSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { loading, stats, error } = useSelector(
    (state) => state.adminDashboard
  );

  useEffect(() => {
    dispatch(fetchAdminDashboardThunk());
  }, [dispatch]);

  if (loading) return <p>Loading dashboard...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <StatCard
        title="Total Users"
        amount={stats?.total_users}
        icon={<Users className="text-blue-500" />}
      />

      <StatCard
        title="Active Users"
        amount={stats?.active_users}
        icon={<UserCheck className="text-green-500" />}
      />

      <StatCard
        title="Inactive Users"
        amount={stats?.inactive_users}
        icon={<UserX className="text-red-500" />}
      />

      <StatCard
        title="Total Documents"
        amount={stats?.total_documents}
        icon={<FileText className="text-indigo-500" />}
      />
    </div>
  );
};

export default Dashboard;
