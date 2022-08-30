import Vue from "vue";
import VueRouter from "vue-router";
import LogIn from "../pages/LogIn.vue";
import DashBoard from "../pages/DashBoard.vue";
import CustomersPage from "../pages/CustomersPage.vue";
import CarsPage from "../pages/CarsPage.vue";
import InvoicePage from "../pages/InvoicePage.vue";
import SalespersonPage from "../pages/SalespersonPage.vue";
import MechanicPage from "../pages/MechanicPage.vue";
import ServiceTicketPage from "../pages/ServiceTicketPage.vue";
import ModalComp from "../components/ModalComp.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/dashboard",
    name: "DashBoard",
    component: DashBoard,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/customers",
    name: "CustomersPage",
    component: CustomersPage,
  },
  {
    path: "/cars",
    name: "CarsPage",
    component: CarsPage,
  },
  {
    path: "/invoice",
    name: "InvoicePage",
    component: InvoicePage,
  },
  {
    path: "/salesperson",
    name: "SalespersonPage",
    component: SalespersonPage
  },
  {
    path: "/mechanic",
    name: "MechanicPage",
    component: MechanicPage
  },
  {
    path: "/service-ticket",
    name: "ServiceTicketPage",
    component: ServiceTicketPage
  },
  {
    path: "/modal",
    name: "ModalComp",
    component: ModalComp
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
