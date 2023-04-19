import { Home } from "./components/Home";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { About } from "./components/About";

const AppRoutes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: '/services',
        element: <Services />
    },
    {
        path: '/contact',
        element: <Contact />    
    },
    {
        path: '/about',
        element: <About />
    }
];

export default AppRoutes;
