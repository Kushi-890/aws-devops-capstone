\# AWS DevOps Capstone – CI/CD Pipeline



\## 1. Overview



This project uses GitHub Actions and Jenkins to automate application testing, build validation, and Docker image builds as part of the DevOps workflow.



\## 2. CI/CD Tools



\- GitHub Actions

\- Jenkins

\- Git

\- Docker

\- Node.js

\- Terraform



\## 3. GitHub Actions Application Workflow



The application workflow is maintained in:



`.github/workflows/ci-cd.yml`



It performs automated checks when code changes are pushed to the repository or submitted through pull requests.



The workflow includes:



\- Checking out the source code.

\- Installing backend dependencies.

\- Running backend API tests.

\- Building the frontend.

\- Validating application changes.



\## 4. Terraform Validation Workflow



The infrastructure validation workflow is maintained in:



`.github/workflows/terraform.yml`



It performs:



\- Terraform formatting checks.

\- Terraform initialization without configuring a remote backend.

\- Terraform configuration validation.



\## 5. Jenkins CI/CD Pipeline



A Jenkins pipeline is configured in the project using the `Jenkinsfile`.



The pipeline automates Docker image builds for the frontend and backend.



The pipeline was executed successfully after configuring Docker Hub authentication.



\## 6. Docker Image Publishing



Docker images were built and published to Amazon Elastic Container Registry (ECR).



The published images include:



\- Backend: `capstone-backend:v2`

\- Frontend: `capstone-frontend:production-v1`



\## 7. Benefits



\- Automates repetitive validation tasks.

\- Helps identify errors early.

\- Improves code quality.

\- Supports consistent development workflows.

\- Reduces manual testing effort.

\- Automates container image builds.



\## 8. Validation Status



\- GitHub Actions application workflow executed successfully.

\- Terraform validation workflow executed successfully.

\- Backend API tests passed.

\- Frontend build checks passed.

\- Jenkins pipeline executed successfully.

\- Docker images were published to Amazon ECR.



\## 9. Future Improvements



\- Automate deployment to an active AWS EKS cluster.

\- Integrate continuous deployment with the CI/CD pipeline.

\- Add monitoring and centralized logging.

\- Implement automated security and vulnerability scanning.

