pipeline {
  agent any
  stages {
    stage('Install dependencies') {
      steps {
        sh "export PATH=$PATH:/usr/local/bin/npm"
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
        echo "Aquí debería enviar a deploy with codepipeli code"
      }
    }
  }
}