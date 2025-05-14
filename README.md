db 
infrastructure
node_modules
postgres-initdb.sh
src
.env
.gitignore
.prettierrc
docker-compose.yml
package-lock.json
package.json
server.js




Command prompt commands to jis se docker ke pe server runs ho 
docker-compose build --no-cache
docker-compose up 
Iss se docker run hojaega 

Postman: 
Method: POST

URL: http://localhost:3000/contact

Headers:
Content-Type: application/json

2. Request Body (Raw JSON)
json
{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "message": "Hello from Postman",
    "budget": "5000-10000"
}
3. Expected Successful Response
json
{
    "message": "Contact form received and saved successfully!"
} 

adminer: 
if all server is running up please click on this link iss he pe server run kar rha hai http://localhost:8080/?pgsql=pgsql

system Postfresql
server pgsql
username docker
password docker
