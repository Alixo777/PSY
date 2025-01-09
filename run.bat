docker stop node-app 
docker rm node-app
docker build -t node-app .
docker run --name node-app -d --rm -p 3003:3003 node-app