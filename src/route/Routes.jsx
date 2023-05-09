// dashbaord
import Default from "../components/dashboard/index";
import History from "../components/transactions/index";
import InvestmentPlans from "../components/investment/index";
import ActivePlans from "../components/investment/active";
import Rank from "../components/rank/index";
import Team from "../components/rank/team";
import AdminPlans from "../components/admin/plans";
import Users from "../components/admin/users";
import NewPlan from "../components/admin/new-plan";
import Activity from "../components/admin/activity";
import AdminDashboard from "../components/admin/dashboard";
// knowledgebase page
import KnowledgebaseComponent from "../components/marketing";

export const routes = [
  {
    path: `${process.env.PUBLIC_URL}/dashboard/:layout/`,
    Component: <Default />,
  },
  {
    path: `${process.env.PUBLIC_URL}/transactions/:layout/`,
    Component: <History />,
  },
  {
    path: `${process.env.PUBLIC_URL}/active/:layout/`,
    Component: <ActivePlans />,
  },
  {
    path: `${process.env.PUBLIC_URL}/investment/:layout/`,
    Component: <InvestmentPlans />,
  },
  { path: `${process.env.PUBLIC_URL}/rank/:layout/`, Component: <Rank /> },
  { path: `${process.env.PUBLIC_URL}/team/:layout/`, Component: <Team /> },
  {
    path: `${process.env.PUBLIC_URL}/marketing/:layout`,
    Component: <KnowledgebaseComponent />,
  },

  {
    path: `${process.env.PUBLIC_URL}/admin/dashboard/:layout/`,
    Component: <AdminDashboard />,
  },
  {
    path: `${process.env.PUBLIC_URL}/new-plan/:layout/`,
    Component: <NewPlan />,
  },
  {
    path: `${process.env.PUBLIC_URL}/plans/:layout/`,
    Component: <AdminPlans />,
  },
  { path: `${process.env.PUBLIC_URL}/users/:layout/`, Component: <Users /> },
  // { path: `${process.env.PUBLIC_URL}/activity/:layout/`, Component: <Activity />}
];
