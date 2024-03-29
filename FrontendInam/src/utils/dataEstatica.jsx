import { v } from "../styles/variables";
import {
  AiOutlineHome,
  AiOutlineSetting,
} from "react-icons/ai";

export const DesplegableUser = [
  {
    text: "Mi perfil",
    icono: <v.iconoUser/>,
    tipo: "miperfil",
  },
  {
    text: "Configuracion",
    icono: <v.iconoSettings/>,
    tipo: "configuracion",
  },
  {
    text: "Cerrar sesión",
    icono: <v.iconoCerrarSesion/>,
    tipo: "cerrarsesion",
  },
];


//data SIDEBAR
export const LinksArray = [
  {
    label: "Usuarios",
    icon: <v.iconoUser />,
    to: "/admin",
  },
  {
    label: "Areas",
    icon: <AiOutlineHome />,
    to: "/",
  },
  {
    label: "Ambientes",
    icon: <v.iconocategorias />,
    to: "/kardex",
  },
  {
    label: "Elementos",
    icon: <v.iconostock />,
    to: "/reportes",
  },
  {
    label: "Prestamos",
    icon: <v.iconocorona />,
    to: "/motatomic",
  },
  {
    label: "Novedades",
    icon: <v.iconoreportes />,
    to: "/luis",
  },
 
];
export const SecondarylinksArray = [
  {
    label: "Configuration",
    icon: <AiOutlineSetting />,
    to: "/configurar",
  },

];
//temas
export const TemasData = [
  {
    icono: "🌞",
    descripcion: "light",
   
  },
  {
    icono: "🌚",
    descripcion: "dark",
    
  },
];

//data configuracion
export const DataModulosConfiguracion =[
  {
    title:"Productos",
    subtitle:"registra tus productos",
    icono:"https://i.ibb.co/85zJ6yG/caja-del-paquete.png",
    link:"/configurar/productos",
   
  },
  {
    title:"Personal",
    subtitle:"ten el control de tu personal",
    icono:"https://i.ibb.co/5vgZ0fX/hombre.png",
    link:"/configurar/usuarios",
   
  },

  {
    title:"Tu empresa",
    subtitle:"configura tus opciones básicas",
    icono:"https://i.ibb.co/x7mHPgm/administracion-de-empresas.png",
    link:"/configurar/empresa",
    
  },
  {
    title:"Categoria de productos",
    subtitle:"asigna categorias a tus productos",
    icono:"https://i.ibb.co/VYbMRLZ/categoria.png",
    link:"/configurar/categorias",
    
  },
  {
    title:"Marca de productos",
    subtitle:"gestiona tus marcas",
    icono:"https://i.ibb.co/1qsbCRb/piensa-fuera-de-la-caja.png",
    link:"/configurar/marca",
   
  },

]
//tipo usuario
export const TipouserData = [
  {
    descripcion: "Administrador",
    icono: "🪖",
  },
  {
    descripcion: "Lider",
    icono: "👑",
  },
  {
    descripcion: "Instructor",
    icono: "😎",
  },
  {
    descripcion: "Aprendiz",
    icono: "🙂",
  },
];
//tipodoc
export const TipoDocData = [
  {
    descripcion: "Dni",
    icono: "🪖",
  },
  {
    descripcion: "Libreta electoral",
    icono: "👑",
  },
  {
    descripcion: "Otros",
    icono: "👑",
  },
];