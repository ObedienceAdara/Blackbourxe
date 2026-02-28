# Google Analytics 4 Setup Guide

## Overview
Your Blackbourxe website is now configured with Google Analytics 4 (GA4) tracking. This guide will help you complete the setup.

## What's Already Done ✓

1. **Installed Dependencies**: `react-ga4` package (you need to run the install command)
2. **Created Analytics Utility**: `frontend/src/utils/analytics.js` with tracking functions
3. **Integrated GA4 in App**: Page view tracking on route changes
4. **Added Event Tracking**:
   - Newsletter signups (inline and page)
   - Consultation form submissions
   - Blog post views

## Setup Steps

### Step 1: Install the Package

Run this command in your `frontend` directory:

```bash
npm install react-ga4
```

### Step 2: Create Google Analytics 4 Property

1. Go to [Google Analytics](https://analytics.google.com)
2. Sign in with your Google account
3. Click "Admin" (gear icon in bottom left)
4. Click "Create Property"
5. Enter property details:
   - Property name: "Blackbourxe"
   - Time zone: Select your timezone
   - Currency: Select your currency
6. Click "Next" and complete the setup wizard
7. Choose "Web" as the platform
8. Enter your website URL and stream name
9. Click "Create stream"
10. **Copy your Measurement ID** (format: G-XXXXXXXXXX)

### Step 3: Add Your Measurement ID

Create a `.env` file in the `frontend` directory:

```bash
# frontend/.env
REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID from Step 2.

**Important**: Add `.env` to your `.gitignore` file to keep your ID private:

```bash
# In frontend/.gitignore
.env
.env.local
```

### Step 4: Test Your Setup

1. Start your development server:
   ```bash
   npm start
   ```

2. Open your browser to `http://localhost:3000`

3. In Google Analytics:
   - Go to Reports → Realtime
   - You should see your visit appear within 30 seconds

4. Test events by:
   - Navigating between pages (page views)
   - Subscribing to newsletter (newsletter signup event)
   - Submitting consultation form (consultation submit event)
   - Viewing blog posts (blog post view event)

### Step 5: Deploy with Environment Variable

When deploying to production (Netlify, Vercel, etc.), add the environment variable:

**Netlify:**
1. Go to Site settings → Build & deploy → Environment
2. Add variable: `REACT_APP_GA_MEASUREMENT_ID` = `G-XXXXXXXXXX`

**Vercel:**
1. Go to Project Settings → Environment Variables
2. Add variable: `REACT_APP_GA_MEASUREMENT_ID` = `G-XXXXXXXXXX`

## What Gets Tracked

### Automatic Tracking
- **Page Views**: Every route change is tracked with the page path and title
- **User Sessions**: GA4 automatically tracks sessions and user engagement

### Custom Events
- **Newsletter Signups**:
  - Category: "Newsletter"
  - Action: "Signup"
  - Label: "inline_newsletter" or "newsletter_page"

- **Consultation Submissions**:
  - Category: "Consultation"
  - Action: "Submit"
  - Label: Service name (e.g., "AI Strategy Session")

- **Blog Post Views**:
  - Category: "Blog"
  - Action: "View"
  - Label: Post title

## Viewing Your Data

### Real-time Reports
- Go to Reports → Realtime to see current visitors

### Standard Reports
- **Acquisition**: Where users come from
- **Engagement**: Page views, events, and user behavior
- **Monetization**: If you add e-commerce tracking later
- **Retention**: User retention and lifetime value

### Custom Reports
You can create custom reports for:
- Most popular blog posts
- Newsletter conversion rate by source
- Consultation request funnel

## Privacy Considerations

GA4 is GDPR-compliant by default, but consider:

1. **Cookie Consent**: Add a cookie consent banner if required in your region
2. **Privacy Policy**: Update your privacy policy to mention GA4 usage
3. **IP Anonymization**: GA4 anonymizes IPs by default
4. **Data Retention**: Configure in GA4 Admin → Data Settings

## Troubleshooting

### Events Not Showing Up
- Check browser console for errors
- Verify Measurement ID is correct
- Ensure `.env` file is in the `frontend` directory
- Restart development server after adding `.env`

### Page Views Not Tracking
- Check that `initGA()` is called before navigation
- Verify React Router is working correctly
- Check browser network tab for GA4 requests

### Production Not Tracking
- Verify environment variable is set in hosting platform
- Check that build includes the environment variable
- Test with production build locally: `npm run build && npx serve -s build`

## Additional Resources

- [GA4 Documentation](https://support.google.com/analytics/answer/10089681)
- [react-ga4 GitHub](https://github.com/codler/react-ga4)
- [GA4 Event Reference](https://developers.google.com/analytics/devguides/collection/ga4/events)

## Support

If you need help with GA4 setup or custom tracking, refer to the Google Analytics Help Center or the react-ga4 documentation.
