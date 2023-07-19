import { useKeycloak } from "@react-keycloak/web";

function PrivateRoute(props: any) {
  const { children } = props;
  const { keycloak } = useKeycloak();

  const isLoggedIn = keycloak.authenticated;

  return isLoggedIn ? children : null;
}

export default PrivateRoute;
