# AWS DevOps Capstone Project

# 1. Project Overview

This project demonstrates an end-to-end DevOps workflow by building, containerizing, testing, and deploying a three-tier web application.

The application consists of:
- React frontend
- Node.js and Express backend
- PostgreSQL database

The project uses Docker, Kubernetes, GitHub Actions, and Terraform to demonstrate modern DevOps practices.

# 2. Technologies Used

| Category | Technology |
|---|---|
| Frontend | React, Vite |
| Backend | Node.js, Express |
| Database | PostgreSQL |
| Containerization | Docker, Docker Compose |
| Orchestration | Kubernetes, Kind |
| CI/CD | GitHub Actions |
| Infrastructure as Code | Terraform |
| Cloud Platform | AWS (planned final deployment) |
| Version Control | Git, GitHub |

## 3. Project Architecture

The application follows a three-tier architecture:

1. Frontend – Provides the user interface.
2. Backend – Handles API requests and application logic.
3. Database – Stores application data using PostgreSQL.

Docker containers package the application components. Kubernetes manages their deployment locally, while GitHub Actions automates testing and validation.

## 4. Project Structure

```text
aws-devops-capstone/
├── backend/
├── frontend/
├── database/
├── docker/
├── docs/
├── kubernetes/
├── scripts/
├── terraform/
├── tests/
└── .github/
    └── workflows/
```

## 5. Key Implementations

- Developed REST API endpoints.
- Integrated the backend with PostgreSQL.
- Containerized application components using Docker.
- Configured Kubernetes Deployments and Services.
- Implemented ConfigMaps, Secrets, persistent storage, and health probes.
- Configured GitHub Actions workflows.
- Added automated backend API tests.
- Created Terraform configuration for AWS networking.

## 6. Testing and Validation

- Backend API tests executed successfully.
- Frontend and backend integration verified locally.
- PostgreSQL connectivity verified.
- Kubernetes application tested using Kind.
- Terraform formatting and validation checks passed.
- GitHub Actions workflows executed successfully.

## 7. AWS Infrastructure

Terraform configuration currently defines:

- AWS Virtual Private Cloud (VPC)
- Public and private subnets
- Internet Gateway
- Route tables
- Route table associations

AWS deployment is planned for the final stage of the project.

## 8. Security Practices

- Backend container runs as a non-root user.
- Database credentials are managed using Kubernetes Secrets.
- Sensitive files and Terraform state are excluded from Git.
- Database is not intended to be exposed publicly.

## 9. Project Status

- [x] Application development
- [x] Docker containerization
- [x] Local Kubernetes deployment
- [x] Backend API testing
- [x] GitHub Actions workflows
- [x] Terraform configuration and validation
- [ ] Complete documentation
- [ ] Final AWS deployment

## 10. Author

**Kushi Jeej**

AWS and DevOps Capstone Project
