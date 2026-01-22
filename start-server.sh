#!/bin/bash

# Next.js Server Startup Script for Static IP Deployment
# This script builds and starts the Next.js application bound to all network interfaces

set -e

echo "Building Next.js application..."
npm run build

echo "Starting Next.js server on 0.0.0.0:3000..."
npm run start:host
