# YTLyrics Website

Professional landing website for the YTLyrics Chrome extension. Built with Next.js, deployed on Vercel.

## 🚀 Features

- **SEO-Optimized**: Proper meta tags, Open Graph, Twitter Cards
- **Vercel Analytics**: Built-in analytics tracking
- **Mobile Responsive**: Works perfectly on all devices
- **Fast & Modern**: Next.js 15 with App Router
- **AdSense Ready**: Placeholder components for future monetization
- **Chrome Web Store Compliant**: Privacy policy and terms included

## 📁 Project Structure

```
ytlyrics-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata & analytics
│   ├── page.tsx            # Landing page
│   ├── globals.css         # Global styles
│   ├── privacy/
│   │   └── page.tsx        # Privacy policy (Chrome Web Store compliant)
│   ├── terms/
│   │   └── page.tsx        # Terms of service
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   └── AdPlaceholder.tsx   # Reusable AdSense component
├── public/                 # Static assets (add og-image.png here)
├── package.json
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## 🛠️ Local Development

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Setup Instructions

1. **Navigate to project directory:**
   ```bash
   cd ytlyrics-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open browser:**
   Visit `http://localhost:3000`

### Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deploy to Vercel

### Step 1: Push to GitHub

1. Create a new repository on GitHub
2. Initialize git and push:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: YTLyrics website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ytlyrics-website.git
   git push -u origin main
   ```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Import your `ytlyrics-website` repository
5. Configure project:
   - **Framework Preset:** Next.js
   - **Root Directory:** ./
   - **Build Command:** `npm run build`
   - **Output Directory:** Leave default
6. Click "Deploy"

Your site will be live at: `https://ytlyrics-website.vercel.app`

### Step 3: Enable Vercel Analytics

1. Go to your project dashboard on Vercel
2. Click "Analytics" tab
3. Click "Enable Analytics"
4. Analytics is now active! (Already integrated in the code)

## 🔗 Custom Domain Setup (ytlyrics.com)

### Step 1: Purchase Domain

Purchase `ytlyrics.com` from:
- Namecheap
- GoDaddy
- Google Domains
- Cloudflare

### Step 2: Add Domain to Vercel

1. In Vercel project dashboard, go to "Settings"
2. Click "Domains"
3. Enter `ytlyrics.com` and click "Add"
4. Also add `www.ytlyrics.com` (recommended)

### Step 3: Configure DNS

Vercel will provide DNS records. Add these to your domain registrar:

#### For Root Domain (ytlyrics.com):
```
Type: A
Name: @
Value: 76.76.21.21
```

#### For WWW Subdomain (www.ytlyrics.com):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Step 4: Verify & Wait

1. Click "Verify" in Vercel
2. DNS propagation takes 24-48 hours (usually faster)
3. Vercel automatically provisions SSL certificate
4. Your site will be live at `https://ytlyrics.com`

### DNS Configuration Example (Namecheap):

1. Log into Namecheap
2. Go to "Domain List" → Select your domain
3. Click "Manage" → "Advanced DNS"
4. Add the A and CNAME records above
5. Wait for DNS propagation

## 💰 Google AdSense Setup

### Prerequisites for Approval

1. **Domain Requirements:**
   - Custom domain (ytlyrics.com) ✓
   - Domain ownership verified
   - HTTPS enabled ✓

2. **Content Requirements:**
   - Original, valuable content ✓
   - Privacy policy page ✓
   - Terms of service ✓
   - Contact page ✓

3. **Traffic Requirements:**
   - Consistent organic traffic (wait for 2-4 weeks after launch)
   - Quality user engagement

### Application Process

1. **Apply for AdSense:**
   - Visit [google.com/adsense](https://www.google.com/adsense)
   - Sign up with Google account
   - Add your website: `https://ytlyrics.com`
   - Submit application

2. **Add Verification Code:**
   - Google provides a verification code
   - Add it to `app/layout.tsx` in the `<head>` section:
   ```tsx
   <script
     async
     src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
     crossOrigin="anonymous"
   ></script>
   ```

3. **Wait for Approval:**
   - Usually takes 1-2 weeks
   - Google reviews your site
   - You'll receive email notification

### Enable Ads After Approval

1. **Get Ad Code:**
   - Log into AdSense dashboard
   - Create ad units
   - Copy ad code

2. **Update AdPlaceholder Component:**
   - Edit `components/AdPlaceholder.tsx`
   - Uncomment the real ad code section
   - Replace placeholder IDs with your actual:
     - `data-ad-client="ca-pub-XXXXXXXXXX"` (your publisher ID)
     - `data-ad-slot="XXXXXXXXXX"` (your ad slot ID)
   - Set `showPlaceholder = false`

3. **Deploy Changes:**
   ```bash
   git add .
   git commit -m "Enable Google AdSense"
   git push
   ```

## 🔍 SEO Optimization Checklist

### Current Implementation ✓

- [x] Proper `<title>` tags on all pages
- [x] Meta descriptions
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] One H1 per page
- [x] Semantic HTML
- [x] Mobile responsive
- [x] Fast loading (Vercel CDN)
- [x] SSL/HTTPS

### Post-Launch SEO Tasks

1. **Submit to Search Engines:**
   - [Google Search Console](https://search.google.com/search-console)
   - [Bing Webmaster Tools](https://www.bing.com/webmasters)

2. **Add Sitemap:**
   - Create `public/sitemap.xml`
   - Submit to Google Search Console

3. **Verify Ownership:**
   - Add Google Search Console verification code to `app/layout.tsx`:
   ```tsx
   verification: {
     google: "your-verification-code-here",
   }
   ```

4. **Create robots.txt:**
   - Add `public/robots.txt`:
   ```
   User-agent: *
   Allow: /
   
   Sitemap: https://ytlyrics.com/sitemap.xml
   ```

## 💡 Affiliate Marketing Integration

### Where to Add Affiliate Links

The main landing page (`app/page.tsx`) has a dedicated "Recommended Music Tools" section with placeholders for affiliate links.

### Example Affiliate Programs

1. **Music Streaming:**
   - Spotify Affiliate Program
   - Apple Music Affiliate Program
   - YouTube Music

2. **Audio Equipment:**
   - Amazon Associates (headphones, speakers)
   - Audio-Technica
   - Bose

3. **Music Learning:**
   - Coursera
   - Udemy
   - MasterClass

### Implementation

Replace the placeholder `href="#"` with your actual affiliate links:

```tsx
<a 
  href="https://www.amazon.com/your-affiliate-link?tag=YOUR_TAG" 
  target="_blank" 
  rel="noopener noreferrer sponsored"
  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
>
  Learn more →
</a>
```

**Important:** Always add `rel="sponsored"` to affiliate links for SEO compliance.

## 📊 Analytics & Monitoring

### Vercel Analytics (Built-in)

Already integrated! View metrics at:
- Dashboard: `https://vercel.com/YOUR_USERNAME/ytlyrics-website/analytics`

Tracks:
- Page views
- Unique visitors
- Geographic distribution
- Device types
- Referral sources

### Optional: Google Analytics 4

To add GA4:

1. Create GA4 property
2. Get measurement ID
3. Add to `app/layout.tsx`:
```tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

## 🎨 Customization

### Update Chrome Web Store Link

Replace placeholder links with your actual Chrome Web Store URL:

```tsx
// In app/page.tsx and other pages
href="https://chrome.google.com/webstore/detail/YOUR_EXTENSION_ID"
```

### Add OG Image

1. Create a 1200x630px image for social sharing
2. Save as `public/og-image.png`
3. Already configured in metadata

### Update Contact Email

Replace `support@ytlyrics.com` with your actual email in:
- `app/contact/page.tsx`
- Privacy policy
- Terms of service

## 🚀 Future Enhancements

### Phase 1 (Launch)
- [x] Basic landing page
- [x] Privacy & Terms pages
- [x] Contact page
- [x] SEO optimization
- [x] Vercel deployment

### Phase 2 (Growth)
- [ ] Blog section for SEO
- [ ] FAQ page
- [ ] User testimonials
- [ ] Video demo
- [ ] Newsletter signup

### Phase 3 (Premium)
- [ ] Premium features page
- [ ] Pricing comparison
- [ ] Payment integration
- [ ] User dashboard
- [ ] API documentation

## 📝 Important Notes

### Chrome Web Store Requirements

✓ Privacy Policy - Compliant
✓ Clear data collection statement
✓ User rights explained
✓ Contact information provided

### AdSense Requirements

✓ Original content
✓ Privacy policy
✓ Terms of service
✓ Custom domain
✓ Proper navigation
✓ Contact page
⏳ Organic traffic (build over time)

### Performance

- Lighthouse Score Target: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s

Vercel's global CDN ensures fast loading worldwide.

## 🐛 Troubleshooting

### Build Fails on Vercel

Check:
- Node version (should be 18+)
- All dependencies in package.json
- No TypeScript errors

### Custom Domain Not Working

- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Check domain registrar settings
- Use [DNS Checker](https://dnschecker.org) to verify

### Analytics Not Showing

- Wait 24 hours for data to appear
- Make sure Analytics is enabled in Vercel
- Check browser ad blockers aren't blocking it

## 📞 Support

For questions or issues:
- Email: support@ytlyrics.com
- GitHub Issues: [Your Repo]/issues

## 📄 License

Private project - All rights reserved.

---

**Built with ❤️ for the YTLyrics community**
