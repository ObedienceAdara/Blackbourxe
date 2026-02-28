import { useState } from "react";
import { T } from '../../constants/designTokens';
import { trackNewsletterSignup } from '../../utils/analytics';

const NewsletterInline = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    setError("");
    
    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    
    // Send data to Make.com webhook
    fetch('https://hook.eu2.make.com/exwtidtmqhvpffne6izk9ivix5n9iayw', {
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
        setSubmitted(true);
        trackNewsletterSignup('inline_newsletter');
      } else {
        setError("Something went wrong. Please try again.");
      }
    })
    .catch(error => {
      console.error('Error:', error);
      setError("Network error. Please check your connection.");
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return !submitted ? (
    <div>
      <div style={{ display: "flex", gap: "0", maxWidth: "480px" }}>
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
            borderRight: "none", padding: "12px 16px", color: T.text,
            fontFamily: "'DM Mono', monospace", fontSize: "13px", outline: "none",
          }}
        />
        <button
          onClick={handleSubmit}
          style={{
            background: T.accent, color: T.bg, border: "none",
            padding: "12px 20px", cursor: "pointer",
            fontFamily: "'Syne', sans-serif", fontWeight: 700,
            fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase",
          }}
        >Subscribe</button>
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
