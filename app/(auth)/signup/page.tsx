"use client";

import { useState, FormEvent } from "react";
import "./signstyle.css";
import Link from "next/link";
import Image from "next/image";

export default function RegisterPage() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [role, setRole] = useState<"researcher" | "university" | "medical">();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [institutionEmail, setInstitutionEmail] = useState("");
  const [password, setPassword] = useState("");

  const [institutionName, setInstitutionName] = useState("");
  const [fieldOfResearch, setFieldOfResearch] = useState("");
  const [institutionId, setInstitutionId] = useState("");
  const [verificationFile, setVerificationFile] = useState<File | null>(null);

  const [heardFrom, setHeardFrom] = useState<string[]>([]);
  const [useCase, setUseCase] = useState<string[]>([]);

  const toggleInArray = (
    value: string,
    current: string[],
    setter: (v: string[]) => void
  ) => {
    if (current.includes(value)) {
      setter(current.filter((v) => v !== value));
    } else {
      setter([...current, value]);
    }
  };

  const handleRoleSelect = (value: "researcher" | "university" | "medical") => {
    setRole(value);
    setStep(2);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setVerificationFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const payload = {
      role,
      firstName,
      lastName,
      country,
      institutionEmail,
      password,
      institutionName,
      fieldOfResearch,
      institutionId,
      verificationFileName: verificationFile?.name,
      heardFrom,
      useCase,
    };
    console.log("Final payload:", payload);
  };

  const StepIndicator = () => (
    <nav className="steps">
      <div
        className={`step-item ${step === 1 ? "current" : ""} ${
          step > 1 ? "completed" : ""
        }`}
      >
        <div className="step-main">
          <span className="step-icon">
            {step == 1 || step > 1 ? (
              <img
                src="./dummy/tick.png"
                alt="Completed"
                style={{ height: "22px" }}
              />
            ) : (
              <img
                src="./dummy/Loader.png"
                alt="Completed"
                style={{ height: "25px" }}
              />
            )}
          </span>
          <div
            className={`step-text-wrapper ${step > 1 ? "is-completed" : ""}`}
          >
            <div className="step-title">Select your Profile</div>
            <div className="step-subtitle">
              Select the profile that suits you the best
            </div>
          </div>
        </div>
        <span className="step-arrow">
          {" "}
          {step == 1 || step > 1 ? (
            <img
              src="./dummy/arrow.png"
              alt="arrow"
              style={{ height: "22px" }}
            />
          ) : (
            <img
              src="./dummy/garrow.png"
              alt="arrow"
              style={{ height: "22px" }}
            />
          )}
        </span>
      </div>
      <div
        className={`step-item ${step === 2 ? "current" : ""} ${
          step > 2 ? "completed" : ""
        } ${step < 2 ? "disabled" : ""}`}
      >
        <div className="step-main">
          <span className="step-icon">
            {step == 2 || step > 2 ? (
              <img
                src="./dummy/tick.png"
                alt="Completed"
                style={{ height: "22px" }}
              />
            ) : (
              <img
                src="./dummy/Loader.png"
                alt="Completed"
                style={{ height: "25px" }}
              />
            )}
          </span>
          <div
            className={`step-text-wrapper ${step > 2 ? "is-completed" : ""}`}
          >
            <div className="step-title">Basic Information</div>
            <div className="step-subtitle">
              Organization details &amp; account setup
            </div>
          </div>
        </div>
        <span className="step-arrow">
          {" "}
          {step == 2 || step > 2 ? (
            <img
              src="./dummy/arrow.png"
              alt="arrow"
              style={{ height: "22px" }}
            />
          ) : (
            <img
              src="./dummy/garrow.png"
              alt="arrow"
              style={{ height: "22px" }}
            />
          )}
        </span>
      </div>

      <div
        className={`step-item ${step === 3 ? "current" : ""} ${
          step > 3 ? "completed" : ""
        } ${step < 3 ? "disabled" : ""}`}
      >
        <div className="step-main">
          <span className="step-icon">
            {step == 3 || step > 3 ? (
              <img
                src="./dummy/tick.png"
                alt="Completed"
                style={{ height: "22px" }}
              />
            ) : (
              <img
                src="./dummy/Loader.png"
                alt="Completed"
                style={{ height: "25px" }}
              />
            )}
          </span>
          <div
            className={`step-text-wrapper ${step > 3 ? "is-completed" : ""}`}
          >
            <div className="step-title">Additional Verification</div>
            <div className="step-subtitle">Provide verification of account</div>
          </div>
        </div>
        <span className="step-arrow">
          {" "}
          {step == 3 || step > 3 ? (
            <img
              src="./dummy/arrow.png"
              alt="arrow"
              style={{ height: "22px" }}
            />
          ) : (
            <img
              src="./dummy/garrow.png"
              alt="arrow"
              style={{ height: "22px" }}
            />
          )}
        </span>
      </div>

      <div
        className={`step-item ${step === 4 ? "current" : ""} ${
          step > 4 ? "completed" : ""
        } ${step < 4 ? "disabled" : ""}`}
      >
        <div className="step-main">
          <span className="step-icon">
            {step == 4 || step > 4 ? (
              <img
                src="./dummy/tick.png"
                alt="Completed"
                style={{ height: "22px" }}
              />
            ) : (
              <img
                src="./dummy/Loader.png"
                alt="Completed"
                style={{ height: "25px" }}
              />
            )}
          </span>
          <div
            className={`step-text-wrapper ${step > 4 ? "is-completed" : ""}`}
          >
            <div className="step-title">Discovery Questions</div>
            <div className="step-subtitle">How you&apos;ll use NationCite</div>
          </div>
        </div>
        <span className="step-arrow">
          {" "}
          {step == 4 || step > 4 ? (
            <img
              src="./dummy/arrow.png"
              alt="arrow"
              style={{ height: "22px" }}
            />
          ) : (
            <img
              src="./dummy/garrow.png"
              alt="arrow"
              style={{ height: "22px" }}
            />
          )}
        </span>
      </div>
    </nav>
  );

  return (
    <>
      {/* Navbar */}
      <nav className="auth-navbar">
        <Link href="/" className="auth-logo">
          <img src="/logos/pcLogo.png" alt="NationCite" />
        </Link>
        <div className="auth-nav-right">
          <span className="auth-nav-text">Already have an account?</span>
          <Link href="/signin" className="auth-nav-link">
            Sign in
          </Link>
        </div>
      </nav>

      <div className="page">
        <aside className="sidebar">
          <div>
            <h2 className="sidebar-title">Complete these steps</h2>
            <StepIndicator />
          </div>
        </aside>

        <main className="content">
          {step === 1 && (
            <div className="auth-content">
              <h1 className="title">Lorem ipsum dolor self amet consectetur</h1>
              <p className="subtitle">
                Lorem ipsum dolor sit amet, consectetur elite
              </p>

              <div className="card-list">
                <button
                  className="role-card"
                  onClick={() => handleRoleSelect("researcher")}
                >
                  <img src="./dummy/researcher.jpg" className="role-thumb" />
                  <div className="role-text">
                    <div className="role-title">Researcher</div>
                    <div className="role-desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                  </div>
                </button>

                <button
                  className="role-card"
                  onClick={() => handleRoleSelect("university")}
                >
                  <img src="./dummy/university.jpg" className="role-thumb" />
                  <div className="role-text">
                    <div className="role-title">University / Organisation</div>
                    <div className="role-desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                  </div>
                </button>

                <button
                  className="role-card"
                  onClick={() => handleRoleSelect("medical")}
                >
                  <img src="./dummy/medical.jpg" className="role-thumb" />
                  <div className="role-text">
                    <div className="role-title">Medical Professional</div>
                    <div className="role-desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                  </div>
                </button>
                <div className="role-desc">
                  Lorem ipsum dolor sit amet, consectetur{" "}
                  <span style={{ color: "#FF8D28" }}>adipiscing elit…</span>
                </div>
              </div>

              <p className="foot-note">
                <span className="foot-note-strong">Do you know: </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit…
              </p>
            </div>
          )}

          {step === 2 && role === "researcher" && (
            <div className="auth-content">
              <h1 className="auth-title">
                Lorem ipsum dolor self amet (Researcher)
              </h1>
              <p className="subtitle">
                Lorem ipsum dolor sit amet, consectetur elite
              </p>

              <form
                className="auth-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setStep(3);
                }}
              >
                <label className="field">
                  <span className="field-label">First Name</span>
                  <input
                    type="text"
                    placeholder="Enter your First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </label>
                <label className="field">
                  <span className="field-label">Last Name</span>
                  <input
                    type="text"
                    placeholder="Enter your Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </label>
                <label className="field">
                  <span className="field-label">Country / Region</span>
                  <input
                    type="text"
                    placeholder="Enter your Country / Region"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  />
                </label>

                <label className="field">
                  <span className="field-label">Your Institutional Email</span>
                  <input
                    type="email"
                    placeholder="Placeholder"
                    value={institutionEmail}
                    onChange={(e) => setInstitutionEmail(e.target.value)}
                    required
                  />
                </label>

                <label className="field">
                  <span className="field-label">
                    Password (6 or more characters)
                  </span>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </label>

                <label className="checkbox-field">
                  <input type="checkbox" required />
                  <span>
                    I agree to the <a href="#">Terms of Service</a> and
                    acknowledge the <a href="#">Privacy Policy</a>.
                  </span>
                </label>

                <button type="submit" className="primary-btn">
                  Continue to Sign up
                </button>

                <p className="bottom-inline">
                  Already on NationCite?{" "}
                  <Link href="/signin" className="link-btn">
                    Sign in here
                  </Link>
                </p>
              </form>
            </div>
          )}

          {step === 3 && role === "researcher" && (
            <div className="auth-content">
              <h1 className="addtitle">Additional Information</h1>

              <form
                className="auth-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setStep(4);
                }}
              >
                <label className="field">
                  <span className="field-label">
                    Institution / Organization Name
                  </span>
                  <input
                    type="text"
                    placeholder="Placeholder"
                    value={institutionName}
                    onChange={(e) => setInstitutionName(e.target.value)}
                    required
                  />
                </label>

                <label className="field">
                  <span className="field-label">Field of Research</span>
                  <input
                    type="text"
                    placeholder="Placeholder"
                    value={fieldOfResearch}
                    onChange={(e) => setFieldOfResearch(e.target.value)}
                    required
                  />
                </label>

                <label className="field">
                  <span className="field-label">
                    Institution ID / Registration Number
                  </span>
                  <input
                    type="text"
                    placeholder="Placeholder"
                    value={institutionId}
                    onChange={(e) => setInstitutionId(e.target.value)}
                  />
                </label>

                <label className="field">
                  <span className="field-label">Email</span>
                  <input
                    type="email"
                    placeholder="Email"
                    disabled
                    value={institutionEmail}
                  />
                </label>

                <div className="upload-block">
                  <p className="upload-title">
                    Upload one of the following documents:
                  </p>
                  <ul className="upload-list">
                    <li>Institutional ID card</li>
                    <li>Researcher appointment letter</li>
                    <li>Proof of ongoing research (project letter)</li>
                    <li>Published paper (PDF or link)</li>
                    <li>ResearchGate / Google Scholar link</li>
                  </ul>

                  <label className="dropzone">
                    <input type="file" onChange={handleFileChange} />
                    <div className="box-upload">
                      <img
                        src="./dummy/upload-icon.png"
                        alt=""
                        style={{ height: "15px", textAlign: "center" }}
                      />
                    </div>
                    <span>Drop your File here or click here to Upload</span>
                  </label>
                </div>

                <button type="submit" className="primary-btn">
                  Continue
                </button>
              </form>
            </div>
          )}

          {step === 4 && role === "researcher" && (
            <div className="auth-content">
              <h1 className="addtitle">Finish Signing Up</h1>
              <form className="auth-form" onSubmit={handleSubmit}>
                <div className="pill-group">
                  <p className="field-label">Where did you hear about us?</p>
                  {[
                    "Social Media (Instagram/Twitter/LinkedIn)",
                    "Google Search",
                    "Recommendation from a colleague/friend",
                    "University/institution referral",
                    "Conference",
                    "Advertisement",
                    "Other",
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={`pill ${
                        heardFrom.includes(item) ? "pill-active" : ""
                      }`}
                      onClick={() =>
                        toggleInArray(item, heardFrom, setHeardFrom)
                      }
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <div className="pill-group">
                  <p className="field-label">
                    What will you use NationCite for?
                  </p>
                  {[
                    "Conducting research",
                    "Managing citations",
                    "Publishing papers",
                    "University account management",
                    "Accessing datasets",
                    "General exploration",
                    "Student project or assignment",
                    "Other",
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={`pill ${
                        useCase.includes(item) ? "pill-active" : ""
                      }`}
                      onClick={() => toggleInArray(item, useCase, setUseCase)}
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <button type="submit" className="primary-btn full-width">
                  Sign up
                </button>
              </form>
            </div>
          )}
          {step === 2 && role === "university" && (
            <div className="auth-content">
              <h1 className="auth-title">
                Lorem ipsum dolor self amet (University)
              </h1>
              <p className="subtitle">
                Lorem ipsum dolor sit amet, consectetur elite
              </p>

              <form
                className="auth-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setStep(3);
                }}
              >
                <label className="field">
                  <span className="field-label">
                    Enter your Organization / University
                  </span>
                  <input
                    type="text"
                    placeholder="Placeholder"
                    value={institutionName}
                    onChange={(e) => setInstitutionName(e.target.value)}
                    required
                  />
                </label>

                <label className="field">
                  <span className="field-label">Country / Region</span>
                  <input
                    type="text"
                    placeholder="Enter the Country / Region"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  />
                </label>

                <div className="field">
                  <span className="field-label">
                    Select your institution&apos;s governance type
                  </span>
                  <div className="radio-row">
                    <label className="radio-item">
                      <input
                        type="radio"
                        name="govType"
                        value="private"
                        defaultChecked
                      />
                      <span>Private</span>
                    </label>
                    <label className="radio-item">
                      <input type="radio" name="govType" value="public" />
                      <span>Government / Public</span>
                    </label>
                  </div>
                </div>

                <label className="field">
                  <span className="field-label">
                    Password (6 or more characters)
                  </span>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </label>

                <label className="checkbox-field">
                  <input type="checkbox" required />
                  <span>
                    I agree to the <a href="#">Terms of Service</a> and
                    acknowledge the <a href="#">Privacy Policy</a>.
                  </span>
                </label>

                <button type="submit" className="primary-btn">
                  Continue to Sign up
                </button>

                <p className="bottom-inline">
                  Already on NationCite?{" "}
                  <Link href="/signin" className="link-btn">
                    Sign in here
                  </Link>
                </p>
              </form>
            </div>
          )}

          {step === 3 && role === "university" && (
            <div className="auth-content">
              <h1 className="addtitle">Additional Information</h1>

              <form
                className="auth-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setStep(4);
                }}
              >
                <label className="field">
                  <span className="field-label">Representative Name</span>
                  <input
                    type="text"
                    placeholder="Placeholder"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </label>

                <label className="field">
                  <span className="field-label">Job Title</span>
                  <input
                    type="text"
                    placeholder="Placeholder"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </label>

                <label className="field">
                  <span className="field-label">Institution Email</span>
                  <input
                    type="email"
                    placeholder="Email"
                    value={institutionEmail}
                    onChange={(e) => setInstitutionEmail(e.target.value)}
                    required
                  />
                </label>

                <label className="field">
                  <span className="field-label">Official Website URL</span>
                  <input
                    type="url"
                    placeholder="Enter your Organization's Official Website URL"
                    value={institutionName}
                    onChange={(e) => setInstitutionName(e.target.value)}
                  />
                </label>

                <label className="field">
                  <span className="field-label">
                    Organization / University ID
                  </span>
                  <input
                    type="text"
                    placeholder="Enter your ID / Tag"
                    value={institutionId}
                    onChange={(e) => setInstitutionId(e.target.value)}
                  />
                </label>

                <div className="upload-block">
                  <span className="field-label">
                    Official Letter of Authorization
                  </span>
                  <label className="dropzone">
                    <input type="file" onChange={handleFileChange} />
                    <div className="box-upload">
                      <img
                        src="./dummy/upload-icon.png"
                        alt=""
                        style={{ height: "15px" }}
                      />
                    </div>
                    <span>Drop your File here or click here to Upload</span>
                  </label>
                </div>

                <button type="submit" className="primary-btn">
                  Continue
                </button>
              </form>
            </div>
          )}

          {step === 4 && role === "university" && (
            <div className="auth-content">
              <h1 className="addtitle">Finish Signing Up</h1>
              <form className="auth-form" onSubmit={handleSubmit}>
                <div className="pill-group">
                  <p className="field-label">Where did you hear about us?</p>
                  {[
                    "Social Media (Instagram/Twitter/LinkedIn)",
                    "Google Search",
                    "Recommendation from a colleague/friend",
                    "University/institution referral",
                    "Conference",
                    "Advertisement",
                    "Other",
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={`pill ${
                        heardFrom.includes(item) ? "pill-active" : ""
                      }`}
                      onClick={() =>
                        toggleInArray(item, heardFrom, setHeardFrom)
                      }
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <div className="pill-group">
                  <p className="field-label">
                    What will you use NationCite for?
                  </p>
                  {[
                    "Conducting research",
                    "Managing citations",
                    "Publishing papers",
                    "University account management",
                    "Accessing datasets",
                    "General exploration",
                    "Student project or assignment",
                    "Other",
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={`pill ${
                        useCase.includes(item) ? "pill-active" : ""
                      }`}
                      onClick={() => toggleInArray(item, useCase, setUseCase)}
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <button type="submit" className="primary-btn full-width">
                  Sign up
                </button>
              </form>
            </div>
          )}
          {step === 2 && role === "medical" && (
            <div className="auth-content">
              <h1 className="auth-title">
                Lorem ipsum dolor self amet (Doctor)
              </h1>
              <p className="subtitle">
                Lorem ipsum dolor sit amet, consectetur elite
              </p>

              <form
                className="auth-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setStep(3);
                }}
              >
                <label className="field">
                  <span className="field-label">
                    First Name (As per Medical Licence)
                  </span>
                  <input
                    type="text"
                    placeholder="Enter your First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </label>

                <label className="field">
                  <span className="field-label">Last Name</span>
                  <input
                    type="text"
                    placeholder="Enter your Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </label>

                <label className="field">
                  <span className="field-label">Country / Region</span>
                  <input
                    type="text"
                    placeholder="Enter your Country / Region"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                  />
                </label>

                <label className="field">
                  <span className="field-label">
                    Medical Registration Number
                  </span>
                  <input
                    type="text"
                    placeholder="Registration Number"
                    value={institutionId}
                    onChange={(e) => setInstitutionId(e.target.value)}
                    required
                  />
                </label>

                <label className="field">
                  <span className="field-label">
                    Password (6 or more characters)
                  </span>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </label>

                <label className="checkbox-field">
                  <input type="checkbox" required />
                  <span>
                    I agree to the <a href="#">Terms of Service</a> and
                    acknowledge the <a href="#">Privacy Policy</a>.
                  </span>
                </label>

                <button type="submit" className="primary-btn">
                  Continue to Sign up
                </button>

                <p className="bottom-inline">
                  Already on NationCite?{" "}
                  <Link href="/signin" className="link-btn">
                    Sign in here
                  </Link>
                </p>
              </form>
            </div>
          )}
          {step === 3 && role === "medical" && (
            <div className="auth-content">
              <h1 className="addtitle">Additional Information</h1>

              <form
                className="auth-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  setStep(4);
                }}
              >
                <label className="field">
                  <span className="field-label">Issuing Medical Council</span>
                  <input
                    type="text"
                    placeholder="Placeholder"
                    value={institutionName}
                    onChange={(e) => setInstitutionName(e.target.value)}
                    required
                  />
                </label>

                <label className="field">
                  <span className="field-label">Specialization</span>
                  <input
                    type="text"
                    placeholder="Placeholder"
                    value={fieldOfResearch}
                    onChange={(e) => setFieldOfResearch(e.target.value)}
                    required
                  />
                </label>

                <div className="upload-block">
                  <p className="upload-title">
                    Upload one of the following documents:
                  </p>
                  <ul className="upload-list">
                    <li>Medical license / registration certificate</li>
                    <li>Doctor ID (hospital/clinic)</li>
                    <li>Degree certificate (MBBS/MD/MS etc.)</li>
                    <li>Practice certificate</li>
                  </ul>

                  <label className="dropzone">
                    <input type="file" onChange={handleFileChange} />
                    <div className="box-upload">
                      <img
                        src="./dummy/upload-icon.png"
                        alt=""
                        style={{ height: "15px" }}
                      />
                    </div>
                    <span>Drop your File here or click here to Upload</span>
                  </label>
                </div>

                <button type="submit" className="primary-btn">
                  Continue
                </button>
              </form>
            </div>
          )}
          {step === 4 && role === "medical" && (
            <div className="auth-content">
              <h1 className="addtitle">Finish Signing Up</h1>
              <form className="auth-form" onSubmit={handleSubmit}>
                <div className="pill-group">
                  <p className="field-label">Where did you hear about us?</p>
                  {[
                    "Social Media (Instagram/Twitter/LinkedIn)",
                    "Google Search",
                    "Recommendation from a colleague/friend",
                    "University/institution referral",
                    "Conference",
                    "Advertisement",
                    "Other",
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={`pill ${
                        heardFrom.includes(item) ? "pill-active" : ""
                      }`}
                      onClick={() =>
                        toggleInArray(item, heardFrom, setHeardFrom)
                      }
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <div className="pill-group">
                  <p className="field-label">
                    What will you use NationCite for?
                  </p>
                  {[
                    "Conducting research",
                    "Managing citations",
                    "Publishing papers",
                    "Accessing datasets",
                    "General exploration",
                    "Student project or assignment",
                    "Other",
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={`pill ${
                        useCase.includes(item) ? "pill-active" : ""
                      }`}
                      onClick={() => toggleInArray(item, useCase, setUseCase)}
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <button type="submit" className="primary-btn full-width">
                  Sign up
                </button>
              </form>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
