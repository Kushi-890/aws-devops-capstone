AWS DevOps Capstone – Deployment Guide

1. Overview

This guide describes the local deployment of the application using Docker Compose and Kubernetes (Kind).

AWS deployment will be documented separately after the final cloud deployment.

2. Prerequisites

The following tools are required:

Git

Node.js and npm

Docker Desktop

Kubernetes Kind

kubectl

Terraform

3. Docker Compose Deployment

Docker Compose is used to run the application components locally.

The services include:

Frontend

Backend

PostgreSQL database

From the project root, use:

docker compose up -d --build

To check running containers:

docker ps

To stop the services:

docker compose down

Note: Do not use docker compose down -v unless you intentionally want to remove the database volume and its stored data.

4. Kubernetes Deployment

The application was also deployed locally using a Kind Kubernetes cluster.

The Kubernetes configuration includes:

Frontend Deployment and Service

Backend Deployment and Service

PostgreSQL Deployment and Service

ConfigMap and Secret

PersistentVolumeClaim

Health probes

To inspect the resources:

kubectl get pods -n capstone
kubectl get services -n capstone
kubectl get deployments -n capstone

To access the frontend locally using port forwarding:

kubectl port-forward -n capstone service/frontend 8081:5173

Then open:

http://127.0.0.1:8081

5. Terraform Validation

Terraform configuration is maintained in the terraform directory.

To format the configuration:

terraform -chdir=terraform fmt -recursive

To initialize Terraform:

terraform -chdir=terraform init

To validate the configuration:

terraform -chdir=terraform validate

These commands validate the configuration and do not deploy AWS infrastructure.

6. AWS Deployment

AWS account setup and infrastructure deployment are reserved for the final project stage.

