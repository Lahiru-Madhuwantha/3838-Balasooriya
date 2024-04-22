pipeline {
  agent any
  triggers{
    githubPush()
  }
  stages {
    stage('build'){
      steps {
        sh 'docker build -t nodeimage/3838-node-app-image .'
      }
    }
    stage('run'){
      steps{
        sh 'docker run -d -p 5000:3000 nodeimage/3838-node-app-image'
      }
    }
    stage('final'){
      steps{
        sh 'docker ps'
      }
    }
  }
}