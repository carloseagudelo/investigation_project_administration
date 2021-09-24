pipeline {
  agent {
    docker { image 'node:14-alpine' }
  }
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
        echo "Aquí debería enviar a deploy with codepipeli code"
      }
    }
  }
}