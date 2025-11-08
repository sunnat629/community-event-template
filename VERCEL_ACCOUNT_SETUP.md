# 🔐 Vercel Account Connection Guide

## Your Account: sunnat629labs.com

---

## 📋 Prerequisites

- ✅ Your Vercel Account Email
- ✅ GitHub Account: `sunnat629`
- ✅ Domain: `sunnat629labs.com`
- ✅ Subdomain: `templates.sunnat629labs.com`

---

## 🎯 Step-by-Step Account Connection

### **Step 1: Login to Vercel**

1. Go to: https://vercel.com/login
2. Use your Vercel account credentials
3. Or login with GitHub (recommended for easy integration)

---

### **Step 2: Connect GitHub Repository**

#### **Option A: From Vercel Dashboard**

1. Click **"Add New"** → **"Project"**
2. If not connected, click **"Import Git Repository"**
3. Click **"Add GitHub Account"** or **"Add GitHub Org"**
4. Select: **sunnat629**
5. Authorize Vercel to access your repositories
6. Find: `community-event-template`
7. Click **"Import"**

#### **Option B: GitHub Integration**

If you need to add GitHub integration:

1. Go to: https://vercel.com/dashboard/integrations
2. Find **"GitHub"**
3. Click **"Add"** or **"Configure"**
4. Select repositories:
    - Option 1: **All repositories** (recommended)
    - Option 2: **Only select repositories** → Choose `community-event-template`
5. Click **"Install"**

---

### **Step 3: Configure Project Settings**

After importing, Vercel will auto-detect:

```
Project Name: community-event-template
Framework Preset: Vite ✅
Root Directory: ./
Build Command: npm run build
Output Directory: dist
Install Command: npm install
Node.js Version: 18.x
```

**Leave these as-is** - they're correct!

---

### **Step 4: Get Your Project IDs**

After creating the project, you'll need these IDs:

#### **How to Find Your IDs:**

1. Go to Project Settings: `Settings` → `General`
2. Scroll down to find:

```
Organization ID (orgId): team_xxxxxxxxxxxxx
Project ID (projectId): prj_xxxxxxxxxxxxx
```

#### **Update `.vercel/project.json`:**

```json
{
  "orgId": "team_xxxxxxxxxxxxx",  // Copy from Vercel dashboard
  "projectId": "prj_xxxxxxxxxxxxx", // Copy from Vercel dashboard
  "settings": {
    "framework": "vite",
    "outputDirectory": "dist",
    "buildCommand": "npm run build",
    "installCommand": "npm install",
    "devCommand": "npm run dev"
  }
}
```

---

### **Step 5: Add Custom Domain**

#### **In Vercel Dashboard:**

1. Go to your project
2. Click **"Settings"** → **"Domains"**
3. Click **"Add"**
4. Enter: `templates.sunnat629labs.com`
5. Click **"Add"**

#### **Vercel Will Provide DNS Records:**

You'll see something like:

```
Type: CNAME
Name: templates
Value: cname.vercel-dns.com
```

OR

```
Type: A
Name: templates
Value: 76.76.21.21
```

---

### **Step 6: Configure DNS**

#### **Where to Configure:**

Go to your DNS provider for `sunnat629labs.com`:

- Cloudflare
- Namecheap
- GoDaddy
- Route53
- Or wherever you manage `sunnat629labs.com`

#### **Add DNS Record:**

**Option 1: CNAME (Recommended)**

```
Type: CNAME
Host/Name: templates
Value/Target: cname.vercel-dns.com
TTL: 3600 (or Auto)
```

**Option 2: A Record**

```
Type: A
Host/Name: templates
Value: 76.76.21.21
TTL: 3600
```

---

### **Step 7: Wait for Verification**

1. **DNS Propagation**: 5-60 minutes
2. **Vercel Verification**: Automatic
3. **SSL Certificate**: Auto-generated (Let's Encrypt)
4. **Status**: Check in Vercel dashboard

You'll see:

```
templates.sunnat629labs.com ✅ Valid Configuration
```

---

## 🔧 Vercel CLI Setup (Optional)

### **Install Vercel CLI:**

```bash
npm install -g vercel
```

### **Login:**

```bash
vercel login
```

Choose your login method:

- Email
- GitHub (recommended)
- GitLab
- Bitbucket

### **Link Project:**

```bash
# In your project directory
cd /Users/mohi/IdeaProjects/community-event-template

# Link to Vercel project
vercel link
```

This will:

1. Ask for your team/organization
2. Ask if you want to link to existing project
3. Create `.vercel` folder with project settings

### **Deploy from CLI:**

```bash
# Preview deployment
vercel

# Production deployment
vercel --prod

# With custom domain alias
vercel --prod --alias templates.sunnat629labs.com
```

---

## 📊 Your Vercel Account Structure

```
Vercel Account (sunnat629labs.com)
├── Organization/Team
│   ├── Org ID: team_xxxxxxxxxxxxx
│   └── Members: You
├── Projects
│   └── community-event-template
│       ├── Project ID: prj_xxxxxxxxxxxxx
│       ├── GitHub: sunnat629/community-event-template
│       ├── Production: templates.sunnat629labs.com
│       └── Vercel: community-event-template.vercel.app
└── Domains
    └── sunnat629labs.com
        ├── templates → Vercel project
        └── Other subdomains...
```

---

## 🔑 Environment Variables (If Needed)

If you need to add environment variables:

1. Go to: `Settings` → `Environment Variables`
2. Add variables:

```
Variable Name: VITE_API_URL (example)
Value: https://api.example.com
Environments: Production, Preview, Development
```

**Note:** For this template, no environment variables are needed!

---

## 🎯 Deployment Workflow

### **After Setup:**

```
1. Push to GitHub (main branch)
   ↓
2. Vercel auto-detects push
   ↓
3. Runs: npm install && npm run build
   ↓
4. Deploys to production
   ↓
5. ✅ Live at: https://templates.sunnat629labs.com
```

**Time:** ~2-3 minutes per deployment

---

## ✅ Verification Checklist

### **After Connecting:**

- [ ] GitHub repository connected to Vercel
- [ ] Project imported and configured
- [ ] First deployment successful
- [ ] Vercel URL working (community-event-template.vercel.app)
- [ ] Custom domain added (templates.sunnat629labs.com)
- [ ] DNS records configured
- [ ] Domain verified by Vercel
- [ ] SSL certificate issued (HTTPS working)
- [ ] All routes tested
- [ ] Mobile responsive verified

---

## 🐛 Troubleshooting

### **Issue: GitHub Not Connected**

**Solution:**

1. Go to: https://vercel.com/dashboard/integrations
2. Add GitHub integration
3. Authorize access
4. Retry import

### **Issue: Domain Not Verifying**

**Solution:**

1. Check DNS records are correct
2. Wait 5-60 minutes for propagation
3. Use `dig templates.sunnat629labs.com` to check
4. Contact your DNS provider if stuck

### **Issue: Build Failing**

**Solution:**

1. Check build logs in Vercel dashboard
2. Verify `npm run build` works locally
3. Check Node.js version (should be 18.x)
4. Verify all dependencies installed

### **Issue: 404 on Routes**

**Solution:**
✅ Already fixed! `vercel.json` has SPA routing configured

---

## 📞 Vercel Support

- **Dashboard:** https://vercel.com/dashboard
- **Docs:** https://vercel.com/docs
- **Support:** https://vercel.com/support
- **Status:** https://vercel-status.com

---

## 🎯 Quick Reference

### **Your URLs:**

```
Production:    https://templates.sunnat629labs.com
Vercel:        https://community-event-template.vercel.app
Preview:       https://community-event-template-{branch}.vercel.app
Dashboard:     https://vercel.com/sunnat629/community-event-template
```

### **Important Settings:**

```
Framework:     Vite
Build:         npm run build
Output:        dist
Node:          18.x
Region:        iad1 (US East, default)
```

---

## 🔐 Security Notes

- ✅ HTTPS automatically enabled
- ✅ SSL certificate auto-renewed
- ✅ DDoS protection included
- ✅ Edge network security
- ✅ No sensitive data exposed (static site)

---

## 🎉 You're Ready!

### **Next Steps:**

1. ✅ Login to Vercel
2. ✅ Import GitHub repository
3. ✅ Deploy first version
4. ✅ Add custom domain
5. ✅ Configure DNS
6. ✅ Verify and test

**Your site will be live at:**
🌐 **https://templates.sunnat629labs.com**

---

**Account:** Your Vercel Account  
**Project:** community-event-template  
**Status:** Ready to Connect  
**Action Required:** Follow steps above
