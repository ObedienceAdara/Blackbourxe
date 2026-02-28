import ReactGA from "react-ga4";

// Initialize Google Analytics
export const initGA = (measurementId) => {
  if (measurementId) {
    ReactGA.initialize(measurementId);
  }
};

// Track page views
export const logPageView = (path, title) => {
  ReactGA.send({ hitType: "pageview", page: path, title: title });
};

// Track custom events
export const logEvent = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};

// Track newsletter signups
export const trackNewsletterSignup = (source) => {
  logEvent("Newsletter", "Signup", source);
};

// Track consultation form submissions
export const trackConsultationSubmit = (service) => {
  logEvent("Consultation", "Submit", service);
};

// Track blog post views
export const trackBlogPostView = (postTitle) => {
  logEvent("Blog", "View", postTitle);
};
