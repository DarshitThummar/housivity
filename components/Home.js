"use client";
import {
  addLikeAction,
  // getAllCategoriesAction,
  disLikeAction,
} from "@/redux/categories";
import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { IoShareSocialOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { Button } from "react-bootstrap";
import { IoMdHome } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";

const HomePage = () => {
  const dispatch = useDispatch();

  const [page, setPage] = React.useState(1);
  const [cardData, setCardData] = useState([]);

  const getCardData = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/property?page=${page}`
    ).then((res) => res.json());
    setCardData((pre) => [...pre, ...res?.propertyList]);
  };

  const handelInfiniteScroll = () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((pre) => pre + 1);
      }
    } catch (error) {
    }
  };

  useEffect(() => {
    getCardData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);

    return () => {
      window.removeEventListener("scroll", handelInfiniteScroll);
    };
  }, []);

  const { getAllCategories } = useSelector((state) => state.categories);

  const addLikeItem = (id) => {
    dispatch(addLikeAction(id));
  };

  const disLikeItem = (id) => {
    dispatch(disLikeAction(id));
  };

  return (
    <div className="container">
      <div>Home PG (Paying Guest)</div>
      <div className="row">
        {cardData &&
          cardData?.map(({ id, name, address, displayPrice }) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card red pb">
                  <div className="image-container">
                    <img
                      src="https://media.istockphoto.com/id/1255835530/photo/modern-custom-suburban-home-exterior.jpg?s=1024x1024&w=is&k=20&c=4TmxYMrPLVb8u09dT5amw1vBsAVbHCxMWZIXqoy-I34="
                      className="img"
                      alt="Your Image"
                    />
                    <div className="button-wrapper">
                      <Button className="button button-top">
                        Food Available
                      </Button>
                      <Button className="button button-bottom">
                        <IoMdHome color="#ffffff" size={22} className="me-2" />
                        <span>For Girls Pg</span>
                      </Button>
                    </div>
                  </div>
                  <div classNameName="card-body">
                    <div className="p-2">
                      <div className="mb-2">
                        <div className="d-flex justify-content-between">
                          <h5 className="card-title">{name}</h5>
                          <div>
                            {localStorage
                              .getItem("likeeItems")
                              ?.includes(id) ? (
                              <FaHeart
                                color="#f09a22"
                                size={22}
                                className="me-2 cursor-pointer"
                                onClick={() => disLikeItem(id)}
                              />
                            ) : (
                              <FaRegHeart
                                color="#f09a22"
                                size={22}
                                className="me-2 cursor-pointer"
                                onClick={() => addLikeItem(id)}
                              />
                            )}
                            {/* {<FaHeart />} */}
                            <IoShareSocialOutline
                              color="#f09a22"
                              size={22}
                              className="me-2"
                            />
                          </div>
                        </div>
                        <p className="card-text">
                          <CiLocationOn
                            color="#f09a22"
                            size={20}
                            className="me-2"
                          />
                          <span className="" style={{ color: "grey" }}>
                            {`${address?.area} - ${address?.city?.name}`}
                          </span>
                        </p>
                        <p className="card-text fw-bold">
                          {`₹${displayPrice?.priceRange?.from} - ₹${displayPrice?.priceRange?.to}`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default HomePage;
