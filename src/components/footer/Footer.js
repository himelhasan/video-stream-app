import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="pt-6">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex justify-between gap-2 border-t text-sm text-slate-400">
        <div>Copyright 2022 Himel Hasan.</div>
        <div>
          <Link to="https://himelhasan.com" target="_blank" rel="noreferrer">
            Developed by Himel Hasan
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
