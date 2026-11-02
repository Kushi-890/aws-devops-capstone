AWS DevOps Capstone – System Architecture

1. Architecture Overview

The project follows a three-tier architecture consisting of a frontend, backend, and database.

2. Application Components

Frontend

Built using React and Vite.

Provides the user interface.

Sends API requests to the backend.

Backend

Built using Node.js and Express.

Exposes REST API endpoints.

Handles application logic and database communication.

Provides a health-check endpoint.

Database

Uses PostgreSQL.

Stores application data.

Uses persistent storage in the local Kubernetes deployment.

3. Containerization

Docker is used to package the application components into containers.

Docker Compose supports local development, while Kubernetes manages the containers in the local Kind cluster.

4. Kubernetes Architecture

The local Kubernetes deployment includes:

Frontend Deployment and Service

Backend Deployment and Service

PostgreSQL Deployment and Service

ConfigMap for application configuration

Secret for database credentials

PersistentVolumeClaim for database storage

Health probes for application monitoring

5. CI/CD Architecture

GitHub Actions automates application testing and infrastructure validation.

The workflows include:

Backend API tests

Frontend build checks

Terraform formatting checks

Terraform initialization and validation

6. Infrastructure as Code

Terraform defines the foundational AWS networking resources:

Virtual Private Cloud

Public and private subnets

Internet Gateway

Route tables and associations

7. AWS Deployment Plan

The AWS deployment is reserved for the final stage. The intended architecture and deployment components will be documented after the AWS infrastructure is configured and tested.

8. Application Flow

The user accesses the React frontend.

The frontend sends a request to the backend API.

The backend processes the request.

The backend communicates with PostgreSQL.

The database returns the requested information.

The backend sends the response to the frontend.