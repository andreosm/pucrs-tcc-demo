# syntax=docker/dockerfile:1

# Use the base image mysql:latest
FROM mysql:latest

# Set environment variables
ENV MYSQL_DATABASE Geocode
ENV MYSQL_ROOT_PASSWORD BS151bpr$

# Copy custom scripts or configuration files from your host to the container
COPY ./scripts/Geocode_init.sql /docker-entrypoint-initdb.d/