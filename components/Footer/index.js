import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by{" "}
        <Link href="#">
          <a className="underline underline-offset-1">Mirac Can Yılmaz</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
