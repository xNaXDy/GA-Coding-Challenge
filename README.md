# Coding Challenge

## How To Run

### Docker Mode

First execude the npm command

```
npm run get-docker-ip
```

while in the root folder of the repository. Copy the outputs of the command and insert the IP into the `./challenge-frontend/src/environments/environment.prod.ts` file (there is an existing IP there, just replace it, but be careful not to remove the port that's appended).

Then, simply execute the following command to bring up the entire project in prod mode:

```
npm run docker
```

The frontend will be accessible via `http://localhost:4200` and the backend will be available under `http://localhost:3000`

The swagger documentation will **NOT** be accessible when running the docker containers.

### Dev Mode

Navigate to `./challenge-frontend` and `./challenge-backend` and run `npm install` in both directories.

Afterwards, navigate back to the root folder of the repository and execute `npm run dev`. Both the Nest & Angular applications will be started in watch mode, and a mongodb docker container will be started also.

The frontend will be accessible via `http://localhost:4200` and the backend will be available under `http://localhost:3000`

In dev mode only, there is also a Swagger documentation, accessible under `http://localhost:3000/documentation`

Executing Ctrl+C while either application is running will terminate both. To stop the mongodb docker container, run 
```
docker-compose -f docker-compose.dev.yml down
```