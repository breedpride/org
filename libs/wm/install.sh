#!/bin/bash

# Check if Windmill services are already running
if docker ps --filter "name=windmill" --filter "status=running" | grep -q "windmill"; then
  echo "Windmill services are already running. No need to restart."
else
  echo "Windmill services are not running. Starting them now..."
  docker-compose up -d
fi