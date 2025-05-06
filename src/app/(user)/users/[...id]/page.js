import React from "react";

export default async function page({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const data = await res.json();
  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <p>Website: {data.website}</p>
      <p>Address:</p>
      <p>Street: {data.address.street}</p>
      <p>Suite: {data.address.suite}</p>
      <p>City: {data.address.city}</p>
      <p>Zipcode: {data.address.zipcode}</p>
      <p>Company:</p>
      <p>Name: {data.company.name}</p>
      <p>CatchPhrase: {data.company.catchPhrase}</p>
      <p>Bs: {data.company.bs}</p>
    </div>
  );
}
