pipeline {
  agent any
  stages {
    stage('Install dependencies') {
      steps {
        sh "npm install"
      }
    }
    stage('Run unit test') {
      steps {
        sh "npm test"
      }
    }
    stage('Run deploy') {
      steps {
        echo "Aquí debería enviar a deploy with codepipeline"
      }
    }
  }
}