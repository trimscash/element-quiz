# element-quiz
Every day Element Quiz!

React, Express, prisma

<img src="https://github.com/trimscash/element-quiz/assets/42578480/de1d5ac9-f063-4643-980f-6a125e1370e5" width="60%" />


# deploy

### env parameters example
```
#front/.env
REACT_APP_API_URL="http://api:4000"
REACT_APP_PUBLIC_URL="http://localhost"
REACT_APP_GTAG="G-XXXXX"
TZ=UTC
```

```
#api/.env
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

```
#/.env
POSTGRES_PASSWORD="passW0rd"
PUBLIC_API_URL="your server url"
PUBLIC_URL="your server url"
POSTGRES_DB="mydns"
POSTGRES_USER="postgres"
```


### docker command
```
docker compose -f production.yaml up -d
```

# todo
- Use styled-components
- SSL
- Implement survival mode
- Design for mobile 
