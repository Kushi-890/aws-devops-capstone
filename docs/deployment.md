\# AWS DevOps Capstone – Deployment Guide



\## 1. Overview



This guide describes how to deploy the application locally using Docker Compose and Kubernetes (Kind), along with the AWS infrastructure provisioned using Terraform.



The complete application was successfully deployed and verified on a local Kind Kubernetes cluster.



\## 2. Prerequisites



The following tools are required:



\- Git

\- Node.js and npm

\- Docker Desktop

\- Kubernetes Kind

\- kubectl

\- Terraform

\- AWS CLI (for AWS operations)



\## 3. Docker Compose Deployment



Docker Compose is used to run the application components locally.



The services include:



\- Frontend

\- Backend

\- PostgreSQL database



From the project root, run:



To start the services:



```bash

docker compose up -d --build

```



To check running containers:



```bash

docker ps

```



To stop the services:



```bash

docker compose down

```



\*\*Note:\*\* Do not use `docker compose down -v` unless you intentionally want to remove the database volume and its stored data.



\## 4. Kubernetes Deployment Using Kind



The application was also deployed locally using a Kind Kubernetes cluster.



The Kubernetes configuration includes:



\- Frontend Deployment and Service

\- Backend Deployment and Service

\- PostgreSQL Deployment and Service

\- ConfigMap and Secret

\- PersistentVolumeClaim

\- Health probes



The production frontend is built using a multi-stage Dockerfile and served through Nginx on port 80, with API requests proxied to the backend Kubernetes Service.



\### Inspect Kubernetes Resources



To check pods:



```bash

kubectl get pods -n capstone

```



To check services:



```bash

kubectl get services -n capstone

```



To check deployments:



```bash

kubectl get deployments -n capstone

```



\### Access the Frontend



Use port forwarding:



```bash

kubectl port-forward -n capstone service/frontend 8082:80

```



Then open:



`http://127.0.0.1:8082`



\## 5. Terraform Validation



Terraform configuration is maintained in the `terraform` directory.



To format the configuration:



```bash

terraform -chdir=terraform fmt -recursive

```



To initialize Terraform:



```bash

terraform -chdir=terraform init

```



To validate the configuration:



```bash

terraform -chdir=terraform validate

```



These commands format, initialize, and validate Terraform configurations. They do not create AWS infrastructure. Infrastructure provisioning requires commands such as `terraform apply`.



\## 6. AWS Infrastructure Deployment



AWS infrastructure was provisioned using Terraform.



The resources included:



\- Amazon VPC

\- Public and private subnets across two Availability Zones

\- Internet Gateway and route tables

\- Amazon EKS cluster

\- Managed EKS worker node group

\- IAM roles for EKS

\- Amazon ECR repositories



The EKS cluster and managed node group were successfully created and later destroyed to avoid ongoing infrastructure costs.



The AWS networking resources, IAM roles, and ECR repositories were retained.



\## 7. Amazon ECR Image Publishing



Docker images for the frontend and backend were built and published to Amazon ECR.



Published images:



\- Backend: `capstone-backend:v2`

\- Frontend: `capstone-frontend:production-v1`



\## 8. Deployment Verification Status



\- Docker Compose local deployment configured.

\- Local Kind Kubernetes deployment completed.

\- Frontend and backend connectivity verified.

\- PostgreSQL connectivity verified.

\- Backend health-check endpoint verified.

\- AWS infrastructure provisioned using Terraform.

\- EKS cluster and managed node group successfully created and later destroyed.

\- Docker images published to Amazon ECR.

\- Final end-to-end application verification on AWS EKS remains incomplete.

