'use client';
import { Modal } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { LuBrain } from "react-icons/lu";

function CardProduct({
  image,
  title,
  price,
  soldOut,
}: {
  image: string;
  title: string;
  price: number;
  soldOut: boolean;
}) {
  const formatPrice = (price: number) => {
    return price.toLocaleString("vi-VN"); 
  };
  const [openResponsive, setOpenResponsive] = useState(false);

  return (
    <div className="relative">
      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-800 hover:shadow-blue-300">
        <div className="relative h-full w-full">
          <img
            className={`mx-auto h-full object-cover transition-opacity ${
              soldOut ? "opacity-50" : ""
            }`}
            src={image}
            alt=""
          />
          {soldOut && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 text-white font-semibold">
              Đã hết hàng
            </div>
          )}
        </div>
        <div className="pt-6">
          <Link
            className="uppercase text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
            href="/product-detail"
          >
            {title}
          </Link>

          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className="h-4 w-4 text-yellow-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                </svg>
              ))}
            </div>

            <p className="text-sm font-medium text-gray-900 dark:text-white">
              5.0
            </p>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              (455)
            </p>
          </div>

          <ul className="mt-2 flex items-center gap-4">
            <li className="flex items-center gap-2">
              <AiOutlineClockCircle />
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                30-60
              </p>
            </li>
            <li className="flex items-center gap-2">
              <BsPeople />
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                2-12
              </p>
            </li>
          </ul>

          <ul className="mt-2 flex justify-stretch items-center gap-4">
            <li className="flex items-center gap-2">
              <GoPeople />

              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                12+
              </p>
            </li>
            <li className="flex items-center gap-2">
              <LuBrain />

              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                3.6/5
              </p>
            </li>
          </ul>

          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-2xl font-medium leading-tight text-gray-900 dark:text-white">
            {formatPrice(price)} vnd            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
