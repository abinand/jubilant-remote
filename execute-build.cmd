docker build -t assignment1 .
docker run -p 39900:8000 -d --name assign1_container assignment1
explorer "http://192.168.99.100:39900"