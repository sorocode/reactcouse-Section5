import { useState } from "react";

export default function UserInput({ userInput, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            name="userInput"
            onChange={(e) => onChange("initialInvestment", e.target.value)}
            value={userInput.initialInvestment}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            onChange={(e) => onChange("annualInvestment", e.target.value)}
            required
            name="userInput"
            value={userInput.annualInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            name="userInput"
            onChange={(e) => onChange("expectedReturn", e.target.value)}
            value={userInput.expectedReturn}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            name="userInput"
            onChange={(e) => onChange("duration", e.target.value)}
            value={userInput.duration}
          />
        </p>
      </div>
    </section>
  );
}
