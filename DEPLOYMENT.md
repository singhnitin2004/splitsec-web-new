# Deployment Guide for Static IP Server

This guide explains how to deploy your Next.js application on a server with a static IP address.

## Prerequisites

- Node.js 18+ installed on your server
- Static IP address configured on your server
- Firewall configured to allow traffic on your chosen port (default: 3000)

## Quick Start

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Start the server (accessible from static IP):**
   ```bash
   npm run start:host
   ```

   Or using environment variables:
   ```bash
   HOSTNAME=0.0.0.0 PORT=3000 npm start
   ```

## Configuration Options

### Option 1: Using npm scripts (Recommended)

The project includes two new scripts:
- `npm run start:host` - Starts the server bound to all interfaces (0.0.0.0)
- `npm run dev:host` - Development mode bound to all interfaces

### Option 2: Using Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and configure:
   ```env
   HOSTNAME=0.0.0.0
   PORT=3000
   NODE_ENV=production
   ```

3. Start the server:
   ```bash
   npm start
   ```

### Option 3: Direct Command Line

```bash
next start -H 0.0.0.0 -p 3000
```

## Production Deployment with PM2 (Recommended)

For production, use a process manager like PM2 to keep your app running:

1. **Install PM2 globally:**
   ```bash
   npm install -g pm2
   ```

2. **Create a PM2 ecosystem file** (`ecosystem.config.js`):
   ```javascript
   module.exports = {
     apps: [{
       name: 'splitsec',
       script: 'node_modules/next/dist/bin/next',
       args: 'start -H 0.0.0.0 -p 3000',
       instances: 1,
       exec_mode: 'fork',
       env: {
         NODE_ENV: 'production',
         PORT: 3000
       }
     }]
   };
   ```

3. **Start with PM2:**
   ```bash
   pm2 start ecosystem.config.js
   ```

4. **Save PM2 configuration:**
   ```bash
   pm2 save
   pm2 startup
   ```

## Using a Reverse Proxy (Nginx)

For better performance and SSL support, use Nginx as a reverse proxy:

### Nginx Configuration Example

```nginx
server {
    listen 80;
    server_name your-static-ip-or-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Firewall Configuration

### Ubuntu/Debian (UFW)
```bash
sudo ufw allow 3000/tcp
# Or if using Nginx on port 80/443:
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

### CentOS/RHEL (firewalld)
```bash
sudo firewall-cmd --permanent --add-port=3000/tcp
sudo firewall-cmd --reload
```

## Security Considerations

1. **Use HTTPS:** Set up SSL certificates (Let's Encrypt) with Nginx
2. **Firewall:** Only open necessary ports
3. **Environment Variables:** Never commit `.env` files with sensitive data
4. **Rate Limiting:** Configure rate limiting in Nginx
5. **Keep Dependencies Updated:** Regularly update npm packages

## Troubleshooting

### Cannot access from external IP
- Ensure `HOSTNAME=0.0.0.0` is set (not `localhost` or `127.0.0.1`)
- Check firewall rules allow traffic on the port
- Verify the static IP is correctly configured on the server

### Port already in use
- Change the PORT in `.env` or use `-p` flag with a different port
- Check what's using the port: `netstat -tulpn | grep :3000` (Linux) or `netstat -ano | findstr :3000` (Windows)

### App crashes on server restart
- Use PM2 or systemd to auto-restart the application
- Check server logs for errors

## Accessing Your Application

Once deployed, access your application at:
- `http://YOUR_STATIC_IP:3000` (if running directly)
- `http://YOUR_STATIC_IP` (if using Nginx on port 80)
- `https://yourdomain.com` (if using domain with SSL)
