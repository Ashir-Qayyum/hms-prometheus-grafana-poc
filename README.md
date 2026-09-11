This repo is for demo deployment of Hospital Management System Application<br>
on local docker containers with docker-compose along with<br>
implementing Application Monitoring using Prometheus & Garfana<br>

Hospital Management System Application was cloned from:<br>
> https://github.com/Tarunbhargava/Hospital-Management-System.git<br>

The Application is built on Java Spring Boot microservices for Backend<br>
along with Eureka registry service, and Gateway service for API routing.<br>
The Services use Maven for building & packaging the dependencies.<br>
Frontend is built on React (Vite+TypeScript). For Databases, MySQL Server<br>
is configured to use with separate databases for microservices.<br>

Prometheus & Grafana servics are deployed using docker-compose<br>
with prometheus configuration file mounted as a service volume from the<br>
prometheus/ directory at root. and using persistent volume for Grafana.<br>

(My Grafana Dashboard json file is present at grafana/ directory for importing)<br>

Prometheus Scraping:<br>

prometheus/Picture-01.png<br>

Grafana Dashboard:<br>

grafana/Picture-01.png<br>

grafana/Picture-02.png<br>