# Install Docker

https://docs.docker.com/desktop/

# Download the Docker Image

`docker pull keycloak/keycloak`

# Start the Keycloak Image

1. Run the Docker Client
2. `docker run -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin keycloak/keycloak:latest start-dev`
3. https://www.keycloak.org/getting-started/getting-started-docker

# Set up the Keycloak

1. http://localhost:8080/
2. Create a new Realm

![alt text](/images/realm.png "Realm")

3. Create a new Client

![alt text](/images/client1.png "Realm")
![alt text](/images/client2.png "Realm")

4. Create a new User

![alt text](/images/user1.png "Realm")
![alt text](/images/user2.png "Realm")

For further info you can follow this guide: https://blog.logrocket.com/implement-keycloak-authentication-react/
# Set up React

The new Realm and Client created above must be added in the Keycloak.js config.

```
const keycloak = new Keycloak({
 url: "http://localhost:8080",
 realm: "RealmDemo",
 clientId: "restClient",
});
```

The created user credentials are used for logging in when the Keycloak window is showed.
