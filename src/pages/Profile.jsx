import React from "react";

export default function Profile({ history, location, match }) {
  console.log(history, location, match); // {history, location, match}
  const id = match.params.id;
  console.log(id, typeof id);

  if (id === undefined) {
    return (
      <div>
        <h1>Profile</h1>
      </div>
    );
  }

  // api

  return (
    <div>
      <h1>Profile : {id}</h1>
    </div>
  );
}

<Profile history={{}} location={{}} match={{}} />;
