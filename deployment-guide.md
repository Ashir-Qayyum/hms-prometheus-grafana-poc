Clone the respostiry to local:<br>
> git clone https://github.com/Ashir-Qayyum/hms-microservices-app-docker-compose.git<br>

To Deploy the application locally on docker containers, run the commands:<br>

> docker compose -f docker-compose-for-local-test.yaml up --build<br>

(to run the application in a detached mode, add the flag -d in the command)<br>

After deployments, access the Application Frontend locally at the URL:<br>

> http://localhost:5173