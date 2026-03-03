import { useState, useEffect } from "react";
import { T } from '../../constants/designTokens';
import { trackNewsletterSignup } from '../../utils/analytics';

const NewsletterInline = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cooldownSeconds, setCooldownSeconds] = useState(0);

  // Rate limiting key
  const RATE_LIMIT_KEY = 'newsletter_inline_submission_time';
  const COOLDOWN_PERIOD = 60000; // 60 seconds in milliseconds

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    setError("");
    
    // Check rate limit
    const lastSubmissionTime = localStorage.getItem(RATE_LIMIT_KEY);
    if (lastSubmissionTime) {
      const timeSinceLastSubmission = Date.now() - parseInt(lastSubmissionTime);
      if (timeSinceLastSubmission < COOLDOWN_PERIOD) {
        const remainingSeconds = Math.ceil((COOLDOWN_PERIOD - timeSinceLastSubmission) / 1000);
        setError(`Please wait ${remainingSeconds} second${remainingSeconds !== 1 ? 's' : ''} before submitting again`);
        return;
      }
    }
    
    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    
    // Send data to Make.com webhook
    const webhookUrl = process.env.REACT_APP_WEBHOOK_NEWSLETTER;
    if (!webhookUrl) {
      setError("Configuration error. Please try again later.");
      setIsSubmitting(false);
      return;
    }

    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.trim(),
        source: 'inline_newsletter',
        timestamp: new Date().toISOString(),
      }),
    })
    .then(response => {
      if (response.ok) {
        // Store submission time
        localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString());
        setSubmitted(true);
        trackNewsletterSignup('inline_newsletter');
        
        // Start 5-second button cooldown
        setCooldownSeconds(5);
        const cooldownInterval = setInterval(() => {
          setCooldownSeconds(prev => {
            if (prev <= 1) {
              clearInterval(cooldownInterval);
              setIsSubmitting(false);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      } else {
        setError("Something went wrong. Please try again.");
        setIsSubmitting(false);
      }
    })
    .catch(error => {
      console.error('[Newsletter Inline Submission Error]');
      setError("Network error. Please check your connection.");
      setIsSubmitting(false);
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return !submitted ? (
    <div>
      <div style={{ 
        display: "flex", 
        gap: "0", 
        maxWidth: "480px",
        flexDirection: isMobile ? "column" : "row",
      }}>
        <input
          value={email}
          onChange={e => {
            setEmail(e.target.value);
            setError("");
          }}
          onKeyPress={handleKeyPress}
          placeholder="your@email.com"
          type="email"
          style={{
            flex: 1, background: T.surface2, 
            border: `1px solid ${error ? T.red : T.border}`,
            borderRight: isMobile ? "1px solid" : "none",
            borderColor: isMobile ? (error ? T.red : T.border) : (error ? T.red : T.border),
            padding: "12px 16px", color: T.text,
            fontFamily: "'DM Mono', monospace", fontSize: "13px", 
            outline: "none",
            boxSizing: "border-box",
          }}
        />
        <button
          onClick={handleSubmit}
          disabled={isSubmitting || cooldownSeconds > 0}
          style={{
            background: isSubmitting || cooldownSeconds > 0 ? T.muted : T.accent,
            color: isSubmitting || cooldownSeconds > 0 ? 'rgba(255,255,255,0.3)' : T.bg,
            border: 'none',
            padding: '12px 20px',
            cursor: isSubmitting || cooldownSeconds > 0 ? 'not-allowed' : 'pointer',
            fontFamily: "'Syne', sans-serif", fontWeight: 700,
            fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase',
            width: isMobile ? '100%' : 'auto',
            marginTop: isMobile ? '8px' : '0',
            opacity: isSubmitting || cooldownSeconds > 0 ? 0.6 : 1,
            transition: 'all 0.2s',
          }}
        >{cooldownSeconds > 0 ? `${cooldownSeconds}s` : isSubmitting ? "..." : "Subscribe"}</button>
      </div>
      {error && (
        <div style={{ 
          fontSize: "11px", 
          color: T.red, 
          marginTop: "8px",
          fontFamily: "'DM Mono', monospace"
        }}>
          {error}
        </div>
      )}
    </div>
  ) : (
    <div style={{ fontSize: "13px", color: T.green, letterSpacing: "0.05em" }}>
      ✓ You're in. First brief lands in your inbox this week.
    </div>
  );
};

export default NewsletterInline;
