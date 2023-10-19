import React from "react";

const oAuth = true;

export default function authCon(Component) {
  return function () {
    if (!oAuth) {
      return <div>Please Check Auth</div>;
    }
    return <Component />;
  };
}
