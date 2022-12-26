import React from "react";

const Disclaimer: React.FC<{}> = () => {
  return (
    <>
      <div className="disclaimer">
        All rights to these resources belong to their respective owners, whose
        legal claims may be found at the provided external location of each.
      </div>
      <hr className="hr-lg" style={{ marginBottom: "3rem", width: "99%" }}></hr>
    </>
  );
};

export default Disclaimer;
