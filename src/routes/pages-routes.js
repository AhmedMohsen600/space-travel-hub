import { Routes, Route } from 'react-router-dom';
import { Header } from '../components';
import * as ROUTES from '../constant/routes';
import { Profile, Rocket, Missions } from '../pages';

export default function PageRoutes() {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path={ROUTES.ROCKETS} element={<Rocket />} />
        <Route path={ROUTES.MISSIONS} element={<Missions />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />
      </Route>
    </Routes>
  );
}
