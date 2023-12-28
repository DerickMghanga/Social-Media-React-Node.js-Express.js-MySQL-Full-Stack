import LogIn from "./pages/login/LogIn";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import NavBar from "./components/NavBar/NavBar";
import LeftBar from "./components/LeftBar/LeftBar";
import RightBar from "./components/RightBar/RightBar";
import Profile from "./pages/profile/Profile";
import "./style.scss";

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {

  const { currentUser } = useContext(AuthContext);

  //darkmode setting from provider(localstorage)
  const { darkMode } = useContext(DarkModeContext);

  // Create a client
  const queryClient = new QueryClient();

  // COMMON LAYOUT FOR ALL PAGES(navbar, leftbar, rightbar)
  const Layout = () => {
    return (
        <div className={`theme-${darkMode ? "dark" : "light"}`}>
          <NavBar />
          <div style={{ display: "flex" }}>
            <LeftBar />

            <div style={{ flex: 6 }}>
              <Outlet />
            </div>

            <RightBar />
          </div>
        </div>
    );
  };

  // PROTECTED ROUTES IF NOT LOGGED IN
  const ProtectedRoutes = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  // DEFINE THE ROUTES AND LAYOUT FOR EACH PAGE
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes>
          <QueryClientProvider client={queryClient}>
            <Layout />
          </QueryClientProvider>
        </ProtectedRoutes>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <LogIn />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
