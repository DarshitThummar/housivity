"use client";
import { disLikeAction, getAllCategoriesAction } from "@/redux/categories";
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { CiLocationOn } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { FiActivity } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";

const SavedItems = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategoriesAction());
  }, []);
  const { getAllCategories } = useSelector((state) => state.categories);

  const disLikeItem = (id) => {
    dispatch(disLikeAction(id));
  };

  return (
    <div className="container py-5">
      <div className="mb-5 text-orange border-activity">
        <h3>
          {" "}
          <FiActivity /> My Activity
        </h3>
      </div>
      <div>
        <div className="d-flex">
          <FaHeart color="#f09a22" size={22} className="me-2 cursor-pointer" />
        </div>
      </div>
      <div className="row">
        {getAllCategories &&
          getAllCategories?.propertyList?.map(
            ({ id, name, address, displayPrice, images }) => {
              return (
                localStorage.getItem("likeeItems")?.includes(id) && (
                  <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card red pb">
                      <div className="image-container">
                        {/* <Swiper
                          pagination={true}
                          modules={[Pagination]}
                          className="mySwiper"
                        >
                          {images?.map((image) => {
                            <SwiperSlide>
                              <Image src={image} alt="Your Image" />
                            </SwiperSlide>;
                          })}
                        </Swiper> */}
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
                            <IoMdHome
                              color="#ffffff"
                              size={22}
                              className="me-2 "
                            />
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
                                <FaHeart
                                  color="#f09a22"
                                  size={22}
                                  className="me-2 cursor-pointer"
                                  onClick={() => disLikeItem(id)}
                                />
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
                )
              );
            }
          )}
      </div>
    </div>
  );
};

export default SavedItems;
