

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
                    bat 'npm ci'
                    bat 'npm test'
                }
            }
        }

        stage('Docker Image Build') {
            steps {
                bat 'docker build -t capstone-backend:v2 ./backend'
                bat 'docker build -t capstone-frontend:production-v1 ./frontend'
            }
        }
    }

    post {
        success {
            echo 'Jenkins CI pipeline completed successfully!'
        }
        failure {
            echo 'Jenkins pipeline failed. Check the stage logs.'
        }
        always {
            echo 'Jenkins pipeline execution finished.'
        }
    }
}
