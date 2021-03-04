#!/usr/bin/env bash

set -e

psql -v --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE DATABASE main ENCODING UTF8;
    CREATE ROLE main LOGIN PASSWORD 'password';
    GRANT ALL PRIVILEGES ON DATABASE main TO main;
    ALTER USER main WITH SUPERUSER;
EOSQL