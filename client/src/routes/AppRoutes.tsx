import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import MatchesPage from "../pages/MatchesPage";
import MatchDetailsPage from "../pages/MatchDetailsPage";
import TeamsPage from "../pages/TeamsPage";
import PlayersPage from "../pages/PlayersPage";

function AppRoutes() {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      {/* Main App Routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />

        <Route path="/matches" element={<MatchesPage />} />

        <Route path="/matches/:id" element={<MatchDetailsPage />} />

        <Route path="/teams" element={<TeamsPage />} />

        <Route path="/players" element={<PlayersPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
