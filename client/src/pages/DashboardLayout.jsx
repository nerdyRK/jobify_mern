import { SmallSidebar, BigSidebar, Navbar } from "../components";

const DashboardLayout = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-[auto,1fr]">
      <SmallSidebar />
      <BigSidebar />
      <div>
        <Navbar />
        <div className="dashboard-page"></div>
      </div>
    </main>
  );
};
export default DashboardLayout;
