\# AWS DevOps Capstone – Testing Documentation



\## 1. Overview



Testing is performed to verify the functionality, reliability, and integration of the application components.



\## 2. Backend API Testing



The backend includes automated API tests.



The tests verify:



\- `GET /` returns the API status.

\- `POST /api/users` rejects requests with missing name or email.



To run the backend tests:



```bash

cd backend

npm test

```



Both automated backend API tests passed successfully.



\## 3. Database Testing



PostgreSQL connectivity is verified through the backend health endpoint.



The endpoint checks:



\- Backend availability.

\- Database connectivity.



The health-check endpoint returned a healthy status with a successful database connection.



\## 4. Frontend Integration Testing



The React frontend communicates with the backend API.



The application was tested locally to verify that user data retrieved from PostgreSQL is displayed in the frontend.



The frontend successfully displayed the application status and demo user information.



\## 5. Docker Testing



Docker containers were checked to verify that the application services start and run correctly.



Useful command:



```bash

docker ps

```



Docker images for the frontend and backend were built successfully and published to Amazon ECR.



\## 6. Kubernetes Testing



The application was deployed to a local Kind cluster.



The following resources were inspected:



\- Pods

\- Deployments

\- Services

\- PersistentVolumeClaims



Health probes were configured to monitor application availability.



The frontend, backend, and PostgreSQL components were successfully verified in the local Kubernetes environment.



\## 7. CI/CD Testing



GitHub Actions automatically runs application validation and Terraform checks.



The following validations were completed successfully:



\- Backend API tests.

\- Frontend build checks.

\- Terraform formatting checks.

\- Terraform initialization and validation.



The Jenkins pipeline was also executed successfully to automate Docker image builds for the frontend and backend.



\## 8. Terraform Testing



Terraform formatting and validation checks were completed successfully.



The following commands were used:



```bash

terraform fmt -check -recursive

terraform validate

```



These checks validate Terraform configurations and do not create or modify AWS infrastructure.



\## 9. AWS Infrastructure Testing



AWS infrastructure was provisioned using Terraform.



The EKS cluster and managed node group were successfully created and later destroyed to avoid ongoing infrastructure costs.



Docker images were successfully published to Amazon ECR.



Final end-to-end application verification on AWS EKS remains incomplete.



\## 10. Conclusion



Local application testing, backend API testing, database connectivity testing, Docker validation, Kubernetes deployment verification, CI/CD validation, and Terraform validation were completed successfully.



The application was verified end-to-end on a local Kind Kubernetes cluster.



Final AWS EKS application deployment and end-to-end testing remain pending.

