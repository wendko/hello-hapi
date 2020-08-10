# Work in progress

## Steps:
1) `npm install` in `hapi-server`
2) Start mongodb:
```
docker run -p 27017:27017 --name mongo-test -d mongo:3.6-xenial
```
3) `node server.js` in in `hapi-server`
4) `GET http://localhost:3000/dogs` will return
```
{"dogs":[]}
```