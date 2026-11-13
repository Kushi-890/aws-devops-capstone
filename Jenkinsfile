
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Verify Project') {
            steps {
                bat 'node --version'
                bat 'npm --version'
                bat 'git --version'
                bat 'docker --version'
                bat 'docker info'
            }
        }

        stage('Backend Tests') {
            steps {
                dir('backend') {
                    bat 'npm install'
                    bat 'npm test'
                }
            }
        }
        stage('Docker Image Build') {
            steps {
                bat 'docker build -t capstone-backend:latest ./backend'
                bat 'docker build -t capstone-frontend:latest ./frontend'
            }
        }
    }

    post {
        success {
            echo 'Jenkins pipeline completed successfully!'
        }
        failure {
            echo 'Jenkins pipeline failed. Check the stage logs.'
        }
    }
}
