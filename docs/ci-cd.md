AWS DevOps Capstone – CI/CD Pipeline

1. Overview

This project uses GitHub Actions to automate application testing, build validation, and Terraform configuration validation.

2. CI/CD Tools

GitHub Actions

Git

Docker

Node.js

Terraform

3. Application CI/CD Workflow

The application workflow is maintained in:

.github/workflows/ci-cd.yml

It performs automated checks when code changes are pushed to the repository or submitted through pull requests.

The workflow includes:

Checking out the source code.

Installing dependencies.

Running backend API tests.

Building the frontend.

Validating application changes.

4. Terraform Validation Workflow

The infrastructure validation workflow is maintained in:

.github/workflows/terraform.yml

It performs:

Terraform formatting checks.

Terraform initialization without configuring a remote backend.

Terraform configuration validation.

5. Benefits

Automates repetitive validation tasks.

Helps identify errors early.

Improves code quality.

Supports consistent development workflows.

Reduces manual testing effort.

6. Validation Status

Both GitHub Actions workflows have completed successfully in the repository.

7. Future Improvements

Automate Docker image publishing.

Add deployment automation.

Introduce AWS deployment after infrastructure review.

Add monitoring and logging for the deployed application.

