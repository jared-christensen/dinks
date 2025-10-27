import * as React from "react";

export function MembershipTierCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="card">Basic</div>
      <div className="card">Gold</div>
      <div className="card">VIP</div>
    </div>
  );
}
