"use client";
import { housivity_logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import React from "react";
import { Button } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";

const Header = () => {
  const router = useRouter();
  return (
    <div>
      <nav className="">
        <div className="d-flex justify-content-between header-border px-5 py-2 ">
          <div>
            <Image src={housivity_logo} alt="housivity_logo" />
          </div>
          <div className="d-flex align-items-center">
            <div className="mx-5">
              <p className="fw-bold my-auto">
                For investors <button className="bg-new-button">New</button>
              </p>
            </div>
            <div>
              <Button
                className="bg-saved-button p-2 fw-bold"
                onClick={() => router.push("./my-activity")}
              >
                <FaHeart color="#f09a22" size={22} className="me-2" /> Saved
              </Button>
            </div>
            <Button className=" mx-2 name-button fw-bold px-3 py-2">A</Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
