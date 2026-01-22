@echo off
REM Next.js Server Startup Script for Static IP Deployment (Windows)
REM This script builds and starts the Next.js application bound to all network interfaces

echo Building Next.js application...
call npm run build

echo Starting Next.js server on 0.0.0.0:3000...
call npm run start:host
