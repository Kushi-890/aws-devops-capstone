AWS DevOps Capstone – Testing Documentation

1. Overview

Testing is performed to verify the functionality, reliability, and integration of the application components.

2. Backend API Testing

The backend includes automated API tests.

The tests verify:

GET / returns the API status.

POST /api/users rejects requests with missing name or email.

To run the backend tests:

cd backend
npm test

3. Database Testing

PostgreSQL connectivity is verified through the backend health endpoint.

The endpoint checks:

Backend availability.

Database connectivity.

4. Frontend Integration Testing

The React frontend communicates with the backend API.

The application was tested locally to verify that user data retrieved from PostgreSQL is displayed in the frontend.

5. Docker Testing

Docker containers were checked to verify that the application services start and run correctly.

Useful command:

docker ps

6. Kubernetes Testing

The application was deployed to a local Kind cluster.

The following resources were inspected:

Pods

Deployments

Services

PersistentVolumeClaims

Health probes were configured to monitor application availability.

7. CI/CD Testing

GitHub Actions automatically runs application validation and Terraform checks.

The latest application CI/CD and Terraform validation workflows completed successfully.

8. Terraform Testing

Terraform formatting and validation checks were completed successfully.

These checks do not create AWS infrastructure.

9. Conclusion

Local application testing, backend API testing, Kubernetes validation, and Terraform validation have been completed successfully.

Final AWS deployment testing remains pending.