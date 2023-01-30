import UsersListPage from "@/pages/users/UsersListPage";
import EditUserPage from "@/pages/users/EditUserPage";
import CreateUserPage from "@/pages/users/CreateUserPage";

const routes = [
  {
    path: "/",
    component: UsersListPage,
  },
  {
    path: "/new",
    component: CreateUserPage,
  },
  {
    path: "/edit/:id",
    component: EditUserPage,
  },
  {
    path: "*",
    redirect: "/"
  }
];

export default routes;
