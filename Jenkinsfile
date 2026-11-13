
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
