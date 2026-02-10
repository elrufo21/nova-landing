import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../components/layouts/AppLayout";
import { HomePage } from "../pages/home/HomePageNew";
import { QuienesSomosPage } from "../pages/quienes-somos/QuienesSomosPage";
import { ServiciosPage } from "../pages/servicios/ServiciosPage";
import { ProyectosPage } from "../pages/proyectos/ProyectosPage";
import { GarantiaPage } from "../pages/garantia/GarantiaPage";
import { ContactoPage } from "../pages/contacto/ContactoPage";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/quienes-somos", element: <QuienesSomosPage /> },
      { path: "/servicios", element: <ServiciosPage /> },
      { path: "/proyectos", element: <ProyectosPage /> },
      { path: "/garantia", element: <GarantiaPage /> },
      { path: "/contacto", element: <ContactoPage /> },
    ],
  },
]);
