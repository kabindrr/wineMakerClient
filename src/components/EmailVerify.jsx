import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { emailVerifyAxios } from "../features/user/userAxios";
import { Button, Spinner } from "react-bootstrap";

export const EmailVerify = () => {
  const [response, setResponse] = useState();

  const [searchParams] = useSearchParams();
  const ukey = searchParams.get("ukey");
  const e = searchParams.get("e");

  useEffect(() => {
    const handleOnVerify = async () => {
      const verifyObj = { ukey, e };
      const res = await emailVerifyAxios(verifyObj);
      res && setResponse(res);
    };
    handleOnVerify();
  }, [e, ukey]);

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      {response?.status === "success" ? (
        <div>
          <h1>Account verified,Login Now</h1>
          <Link to={"/login"}>
            <Button variant="danger">Login Now</Button>
          </Link>
        </div>
      ) : (
        <Spinner variant="danger" />
      )}
    </div>
  );
};
export default EmailVerify;
