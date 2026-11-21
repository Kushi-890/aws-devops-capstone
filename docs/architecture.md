\# AWS DevOps Capstone – System Architecture



\## 1. Architecture Overview



The project follows a three-tier architecture consisting of a frontend, backend, and database.



\## 2. Application Components



\### Frontend

\- Built using React and Vite.

\- Provides the user interface.

\- Sends API requests to the backend.



\### Backend

\- Built using Node.js and Express.

\- Exposes REST API endpoints.

\- Handles application logic and database communication.

\- Provides a health-check endpoint.



\### Database

\- Uses PostgreSQL.

\- Stores application data.

\- Uses persistent storage in the local Kubernetes deployment.



\## 3. Containerization



Docker is used to package the application components into containers.



Docker Compose supports local development, while Kubernetes manages the containers in the local Kind cluster.



\## 4. Kubernetes Architecture



The local Kubernetes deployment includes:



\- Frontend Deployment and Service

\- Backend Deployment and Service

\- PostgreSQL Deployment and Service

\- ConfigMap for application configuration

\- Secret for database credentials

\- PersistentVolumeClaim for database storage

\- Health probes for application monitoring



\## 5. CI/CD Architecture



GitHub Actions automates application testing and infrastructure validation.



The workflows include:



\- Backend API tests

\- Frontend build checks

\- Terraform formatting checks

\- Terraform initialization and validation



Jenkins is configured to automate Docker image builds for the frontend and backend.



\## 6. Infrastructure as Code



Terraform defines and provisions AWS infrastructure resources, including:



\- Virtual Private Cloud (VPC)

\- Public and private subnets across two Availability Zones

\- Internet Gateway

\- Route tables and associations

\- Amazon EKS cluster configuration

\- Managed EKS worker node group

\- IAM roles for EKS

\- Amazon ECR repositories for Docker images



\## 7. AWS Infrastructure Status



AWS infrastructure was provisioned using Terraform.



The Amazon EKS cluster and managed node group were successfully created and later destroyed to avoid ongoing infrastructure costs.



The AWS networking resources, IAM roles, and ECR repositories were retained.



Docker images for the frontend and backend were published to Amazon ECR.



The complete application was deployed and verified locally using the Kind Kubernetes cluster.



Final end-to-end application verification on AWS EKS remains incomplete.



\## 8. Application Flow



1\. The user accesses the React frontend.

2\. The frontend sends a request to the backend API.

3\. The backend processes the request.

4\. The backend communicates with PostgreSQL.

5\. The database returns the requested information.

6\. The backend sends the response to the frontend.

