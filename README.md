# element-quiz
Every day Element Quiz!
![image](https://github.com/trimscash/element-quiz/assets/42578480/6a539a24-88cc-4ea9-9cf4-f31580a54731)
![image](https://github.com/trimscash/element-quiz/assets/42578480/30614063-b6dd-4fa0-80b6-11060200d5ba)

# deploy

### env parameters example
```front/.env
REACT_APP_API_URL="http://api:4000"
REACT_APP_PUBLIC_URL="http://localhost"
TZ=UTC
```

```api/.env
POSTGRES_PASSWORD="passW0rd"
TZ=UTC
# TZ=Asia/Tokyo


FRONT_URL="http://localhost"
# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings


DATABASE_URL="postgresql://postgres:passW0rd@db:5432/mydb?connect_timeout=300"
```

```/.env
POSTGRES_PASSWORD="passW0rd"
```


### docker command
```
docker compose -f production.yaml up -d
```

# issue
