import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from './pages/home/HomePage';
import LoginPage from './pages/login/LoginPage';
import NotFoundPage from './pages/404/NotFoundPage';
import { useSelector } from "react-redux";
// import { RootState } from "./store/store";
import { selectUser } from "./store/auth/selectors";
import Path from "./constants/path";

const routes = [
    { element: <HomePage />, path: Path.HOME, privat: true },
    { element: <LoginPage />, path: Path.LOGIN, privat: false },
    { element: <NotFoundPage />, path: Path.NOT_FOUND, privat: false },
];

const AppRoutes = () => {
    const user = useSelector(selectUser);
    const isAuth = !!user;

    return (
        <BrowserRouter>
            <Routes>
                {routes.map(({ element, path, privat }, id) => {
                    if (privat) {
                        return <Route path={path} element={!isAuth ? <Navigate to="/login" /> : element} key={id} />
                    }
                    return <Route path={path} element={element} key={id} />
                })}
            </Routes>
        </BrowserRouter>
    )
};

export default AppRoutes;
