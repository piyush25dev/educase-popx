import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

function getMissingRules(pwd) {
  const missing = [];
  if (!pwd || pwd.length < 8) missing.push("At least 8 characters");
  if (!pwd || !/[A-Z]/.test(pwd)) missing.push("One uppercase letter");
  if (!pwd || !/[0-9]/.test(pwd)) missing.push("One number");
  if (!pwd || !/[^A-Za-z0-9]/.test(pwd)) missing.push("One special character");
  return missing;
}

export default function SignUpPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "",
  });
  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = useState({});

  const missing = getMissingRules(form.password);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    navigate("/profile", { state: { name: form.fullName, email: form.email } });
  };

  const handleChange = (e) => {
    if (e.target.name === "phone") {
      const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
      setForm({ ...form, phone: digits });
      if (errors.phone) setErrors({ ...errors, phone: "" });
      return;
    }
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required.";
    if (!form.phone.trim()) e.phone = "Phone number is required.";
    else if (form.phone.length !== 10)
      e.phone = "Enter a valid 10-digit phone number.";
    if (!form.email.trim()) e.email = "Email address is required.";
    if (missing.length > 0) e.password = "Password does not meet requirements.";
    if (!form.isAgency) e.isAgency = "Please select an option.";
    return e;
  };

  return (
    <div className="auth-screen">
      <div className="auth-header">
        <h1 className="auth-title">
          Create your
          <br />
          PopX account
        </h1>
      </div>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="float-field">
          <input
            className={`${errors.fullName ? "has-error" : ""}`}
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={form.fullName}
            onChange={handleChange}
          />
          <label className="float-label">
            Full Name <span className="req">*</span>
          </label>
          {errors.fullName && (
            <span className="field-error">{errors.fullName}</span>
          )}
        </div>

        <div className="float-field">
          <input
            className={`${errors.phone ? "has-error" : ""}`}
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={form.phone}
            onChange={handleChange}
            maxLength={10}
          />
          <label className="float-label">
            Phone number <span className="req">*</span>
          </label>
          {errors.phone && <span className="field-error">{errors.phone}</span>}
        </div>

        <div className="float-field">
          <input
            className={`${errors.email ? "has-error" : ""}`}
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
          />
          <label className="float-label">
            Email address <span className="req">*</span>
          </label>
          {errors.email && <span className="field-error">{errors.email}</span>}
        </div>

        <div className="float-field input-wrapper">
          <input
            className={`${errors.password ? "has-error" : ""}`}
            type={showPass ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          <label className="float-label">
            Password <span className="req">*</span>
          </label>
          <button
            type="button"
            className="eye-btn"
            onClick={() => setShowPass(!showPass)}
          >
            {/* your existing SVG icons */}
          </button>
          {errors.password && (
            <span className="field-error">{errors.password}</span>
          )}
        </div>

        <div className="float-field">
          <input
            type="text"
            name="company"
            placeholder="Company name"
            value={form.company}
            onChange={handleChange}
          />
          <label className="float-label">Company name</label>
        </div>

        <div className="field-group">
          <p className="agency-label">
            Are you an Agency?<span> *</span>
          </p>
          <div className="radio-group">
            {["yes", "no"].map((val) => (
              <label key={val} className="radio-option">
                <input
                  type="radio"
                  name="isAgency"
                  value={val}
                  checked={form.isAgency === val}
                  onChange={handleChange}
                />
                <span className="radio-custom" />
                {val.charAt(0).toUpperCase() + val.slice(1)}
              </label>
            ))}
          </div>
          {errors.isAgency && (
            <span className="field-error">{errors.isAgency}</span>
          )}
        </div>

        <div className="submit-area">
          <button type="submit" className="submit-btn active">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}
