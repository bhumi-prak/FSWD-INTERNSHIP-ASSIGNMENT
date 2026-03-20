import React, { useState, useEffect } from 'react';
import PasswordStrength from './PasswordStrength';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [passwordMetrics, setPasswordMetrics] = useState({
    score: 0,
    level: 'None',
    color: '#9ca3af',
    checks: { length: false, upper: false, lower: false, number: false, special: false },
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Calculate password strength & checks
  const calculatePasswordMetrics = (pwd) => {
    if (!pwd) {
      return {
        score: 0,
        level: 'None',
        color: '#9ca3af',
        checks: { length: false, upper: false, lower: false, number: false, special: false },
      };
    }

    const checks = {
      length: pwd.length >= 8,
      upper: /[A-Z]/.test(pwd),
      lower: /[a-z]/.test(pwd),
      number: /[0-9]/.test(pwd),
      special: /[^A-Za-z0-9]/.test(pwd),
    };

    const score = Object.values(checks).filter(Boolean).length;

    let level = 'Weak';
    let color = '#ef4444';
    if (score === 5) {
      level = 'Strong';
      color = '#16a34a';
    } else if (score >= 3) {
      level = 'Medium';
      color = '#f59e0b';
    }

    return { score, level, color, checks };
  };

  // Live password strength
  useEffect(() => {
    const metrics = calculatePasswordMetrics(formData.password);
    setPasswordMetrics(metrics);
  }, [formData.password]);

  // Live format validation (only when user has typed something)
  useEffect(() => {
    const newErrors = {};

    if (formData.fullName.trim() && formData.fullName.length < 3) {
      newErrors.fullName = 'Full name must be at least 3 characters';
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (formData.password && formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (formData.confirmPassword && formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValid = () => {
    const hasAllFields = formData.fullName.trim() &&
                         formData.email.trim() &&
                         formData.password &&
                         formData.confirmPassword;

    const noErrors = Object.keys(errors).length === 0;
    const goodStrength = passwordMetrics.score >= 3;

    return hasAllFields && noErrors && goodStrength;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValid()) return;

    // Success!
    setIsSubmitted(true);
    console.log('✅ Account created:', formData);
  };

  const resetForm = () => {
    setFormData({ fullName: '', email: '', password: '', confirmPassword: '' });
    setErrors({});
    setPasswordMetrics({
      score: 0,
      level: 'None',
      color: '#9ca3af',
      checks: { length: false, upper: false, lower: false, number: false, special: false },
    });
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="signup-card success-screen">
        <h2>🎉 Account Created Successfully!</h2>
        <p>Welcome, <strong>{formData.fullName}</strong>!</p>
        <p>You can now sign in with <strong>{formData.email}</strong></p>
        <button className="reset-btn" onClick={resetForm}>
          Create Another Account
        </button>
      </div>
    );
  }

  return (
    <div className="signup-card">
      <h1>Smart Signup</h1>
      <p className="subtitle">Create your account in seconds</p>

      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        {/* Password */}
        <div className="form-group">
          <label>Password</label>
          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              className="toggle-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
          {errors.password && <p className="error">{errors.password}</p>}

          {/* Smart Strength Indicator */}
          {formData.password && (
            <PasswordStrength metrics={passwordMetrics} />
          )}
        </div>

        {/* Confirm Password */}
        <div className="form-group">
          <label>Confirm Password</label>
          <div className="input-group">
            <input
              type={showConfirm ? 'text' : 'password'}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              className="toggle-btn"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? '🙈' : '👁️'}
            </button>
          </div>
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </div>

        <button
          type="submit"
          className="submit-btn"
          disabled={!isValid()}
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;