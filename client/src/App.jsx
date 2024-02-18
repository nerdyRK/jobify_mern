import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  HomeLayout,
  DashboardLayout,
  Register,
  Login,
  Landing,
  Error,
  AllJobs,
  Stats,
  Profile,
  AddJob,
  Admin,
} from "./pages";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Landing />} />
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<AddJob />} />
            <Route path="all-jobs" element={<AllJobs />} />
            {/* <Route path="/stats" element={<Stats />} /> */}
            <Route path="stats" element={<Stats />} />
            <Route path="profile" element={<Profile />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
