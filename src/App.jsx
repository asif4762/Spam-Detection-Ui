import React, { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle, Loader, Send, Sparkles } from 'lucide-react';
import './App.css';

const API_URL = 'https://spam-detection-e1hd.onrender.com';

export default function App() {
  const [message, setMessage] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const checkSpam = async () => {
    if (!message.trim()) {
      setError('Please enter a message to check');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch(`${API_URL}/predict`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: message }),
      });

      if (!response.ok) throw new Error('Failed to check message');

      const data = await response.json();
      setResult(data.spam);
    } catch (err) {
      setError('Failed to connect to API. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setMessage('');
    setResult(null);
    setError('');
  };

  return (
    <div className="app-container">
      {/* Animated background elements */}
      <div className="background-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="content-wrapper">
        {/* Header */}
        <div className="header">
          <div className="icon-wrapper">
            <Shield className="shield-icon" size={80} />
            <Sparkles className="sparkles-icon" size={32} />
          </div>
          <h1 className="title">Spam Detector</h1>
          <p className="subtitle">AI-powered message verification in seconds</p>
        </div>

        {/* Main Card */}
        <div className="card">
          <div className="input-group">
            <label className="label">Enter Message to Check</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type or paste your message here..."
              rows="6"
              className="textarea"
            />
          </div>

          {error && (
            <div className="alert alert-error">
              <AlertTriangle size={20} />
              <p>{error}</p>
            </div>
          )}

          {result !== null && (
            <div className={`alert ${result ? 'alert-spam' : 'alert-safe'}`}>
              <div className="alert-content">
                {result ? (
                  <AlertTriangle className="alert-icon" size={48} />
                ) : (
                  <CheckCircle className="alert-icon" size={48} />
                )}
                <div>
                  <h3 className="alert-title">
                    {result ? '⚠️ Spam Detected' : '✓ Message is Safe'}
                  </h3>
                  <p className="alert-text">
                    {result
                      ? 'This message appears to be spam'
                      : 'This message looks legitimate'}
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="button-group">
            <button
              onClick={checkSpam}
              disabled={loading}
              className="btn btn-primary"
            >
              {loading ? (
                <>
                  <Loader className="spinner" size={20} />
                  Analyzing...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Check Message
                </>
              )}
            </button>

            {result !== null && (
              <button onClick={reset} className="btn btn-secondary">
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <p>Powered by Machine Learning & Natural Language Processing</p>
        </div>
      </div>
    </div>
  );
}