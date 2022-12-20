import { Routes, Route } from 'react-router-dom';
import { Header } from '../components';
import * as ROUTES from '../constant/routes';
import { Profile, Rocket } from '../pages';

export default function PageRoutes() {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path={ROUTES.ROCKETS} element={<Rocket />} />
        <Route path={ROUTES.MISSIONS} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />
      </Route>
    </Routes>
  );
}
