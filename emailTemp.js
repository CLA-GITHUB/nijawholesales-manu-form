import React from "react";

export default function emailTemp() {
  return (
    <div>
      <div>
        <p>Company name: ${company}</p>
        <p>Manager's name: ${manager}</p>
        <p>Factory address: ${factory_address}</p>
        <p>Admin addess: ${admin_address}</p>
        <p>
          Phone numbers: $
          {req.body.phones.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </p>
        <p>Email</p>
      </div>

      <div>
        <p>Products</p>
        <ul>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
        </ul>
      </div>
    </div>
  );
}
