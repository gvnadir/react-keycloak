import { useKeycloak } from "@react-keycloak/web";

function Nav() {
  const { keycloak } = useKeycloak();

  return (
    <div>
      <div>
        <section>
          <nav>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0 20px",
              }}
            >
              <h1>Keycloak React AUTH.</h1>
              <ul style={{ listStyle: "none", display: "flex" }}>
                <li>
                  <a href="/">Home</a>
                </li>
                <li style={{ marginLeft: "50px" }}>
                  <a href="/secured">Secured Page</a>
                </li>
              </ul>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <div>
                  {!keycloak.authenticated && (
                    <button
                      type="button"
                      className="text-blue-800"
                      onClick={() => keycloak.login()}
                    >
                      Login
                    </button>
                  )}

                  {!!keycloak.authenticated && (
                    <button
                      type="button"
                      className="text-blue-800"
                      onClick={() => keycloak.logout()}
                    >
                      Logout ({keycloak?.tokenParsed?.preferred_username})
                    </button>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </section>
      </div>
    </div>
  );
}

export default Nav;
