import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import DashboardLayout from "./layouts/DashboardLayout";

import Home from "./pages/Home";
import ListPage from "./pages/ListPage";
import CalendarPage from "./pages/CalendarPage";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import SettingsPage from "./pages/SettingsPage";
import SettingsLayout from "./layouts/SettingsLayout";
import Account from "./pages/Account";
import Team from "./pages/Team";
import HelpDesk from "./pages/HelpDesk";
import TrainingLayout from "./layouts/TrainingLayout";
import GettingStartedPage from "./pages/GettingStartedPage";
import PlansPage from "./pages/PlansPage";
import BucketsPage from "./pages/BucketsPage";
import ContentPage from "./pages/ContentPage";
import HistoryLayout from "./layouts/HistoryLayout";
import PostedPage from "./pages/PostedPage";
import FailedPage from "./pages/FailedPage";
import PlansLayout from "./layouts/PlansLayout";
import ContentLayout from "./layouts/ContentLayout";
import Content from "./components/Content";
import StreamsPage from "./pages/StreamsPage";
import LibraryPage from "./pages/LibraryPage";
import FavoritesPage from "./pages/FavoritesPage";
import StudioImage from "./pages/StudioImage";
import StudioVideo from "./pages/StudioVideo";
import CreateNewStream from "./pages/CreateNewStream";
import PostsLayout from "./layouts/PostsLayout";
import PlannedDashboard from "./pages/Dashboard";
import CreateBucketsPage from "./pages/CreateBucketsPage";
import DraftsPage from "./pages/DraftsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Navigate to="posts" replace />} />

          {/* Posts with nested layout */}
          <Route path="posts" element={<PostsLayout />}>
            <Route index element={<Navigate to="planned" replace />} />
            <Route path="planned" element={<PlannedDashboard />} />
            <Route path="buckets" element={<CreateBucketsPage />} />
            <Route path="drafts" element={<DraftsPage />} />
          </Route>

          {/* ✅ Settings with nested layout */}
          <Route path="settings" element={<SettingsLayout />}>
            <Route index element={<Navigate to="social_networks" replace />} />
            <Route path="social_networks" element={<SettingsPage />} />
            <Route path="account" element={<Account />} />
            <Route path="team" element={<Team />} />
            <Route path="help_desk" element={<HelpDesk />} />
          </Route>

          {/* Teams with nested layout */}
          <Route path="training" element={<TrainingLayout />}>
            <Route index element={<Navigate to="getting_started" replace />} />
            <Route path="getting_started" element={<GettingStartedPage />} />
            <Route path="plans" element={<PlansPage />} />
            <Route path="buckets" element={<BucketsPage />} />
            <Route path="content" element={<ContentPage />} />
          </Route>

          {/* History with nested layout */}
          <Route path="history" element={<HistoryLayout />}>
            <Route index element={<Navigate to="posted" replace />} />
            <Route path="posted" element={<PostedPage />} />
            <Route path="failed" element={<FailedPage />} />
          </Route>

          {/* Plans with nested layout */}
          <Route path="plans" element={<PlansLayout />}>
            <Route index element={<CalendarPage />} />
          </Route>

          {/* Contents with nested layout */}
          <Route path="content" element={<ContentLayout />}>
            <Route index element={<Content />} />
            <Route path="my-streams" element={<StreamsPage />} />
            <Route path="search/sources" element={<CreateNewStream />} />
            <Route path="library" element={<LibraryPage />} />
            <Route path="favorites" element={<FavoritesPage />} />
            <Route path="studio" element={<Navigate to="studio/image" replace />} />
            <Route path="studio/image" element={<StudioImage />} />
            <Route path="studio/video" element={<StudioVideo />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
