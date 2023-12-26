"use client";

import { GlobalContext } from "@/context";
import { getAllAdminProducts } from "@/services/product";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Home() {
  const { isAuthUser } = useContext(GlobalContext);

  const [products, setProducts] = useState([]);
  const router = useRouter();

  async function getListOfProducts() {
    const res = await getAllAdminProducts();

    if (res.success) {
      setProducts(res.data);
    }
  }

  useEffect(() => {
    // Play audio when the component mounts
    const audio = new Audio("/christmas.mp3");
    audio.play();

    // Fetch products
    const getListOfProducts = async () => {
      const res = await getAllAdminProducts();
      if (res.success) {
        setProducts(res.data);
      }
    };

    getListOfProducts();

    // Cleanup function to stop the audio when the component unmounts
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []); // Empty dependency array to run the effect only once

  console.log(products);

  return (
    <main className="">
      <img
        className="-mt-10"
        src="https://media.discordapp.net/attachments/1170650328950124618/1188908851316150272/image.png?ex=659c3ca7&is=6589c7a7&hm=9b81ff482159731f1195cdc8e35484da72b002983118db46d8b6f854d6ce1d48&=&format=webp&quality=lossless&width=1440&height=86"
        alt="discount"
      />
      <div className="lg:px-10">
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true} // Use the correct prop name: autoplay
          autoplaySpeed={2300}
        >
          <div>
            <img
              src="https://cdn.discordapp.com/attachments/1165594254970736680/1188891173071356055/image.png?ex=659c2c30&is=6589b730&hm=f092acafdb8fbad10868cb06240a33bd9655db643c50c2374bfd45d8d3356b52&"
              alt="Image 1"
            />
          </div>
          <div>
            <img
              src="https://cdn.discordapp.com/attachments/1170650328950124618/1188892171340890223/image.png?ex=659c2d1e&is=6589b81e&hm=569c95a613917d7a69410ae395000a43b7b68ce8eae2fcb0078b2f99d1d09f2a&"
              alt="Image 2"
            />
          </div>
          <div>
            <img
              src="https://cdn.discordapp.com/attachments/1170650328950124618/1188902025510015046/image.png?ex=659c364b&is=6589c14b&hm=77299ed101b4d081d21e687f2c3600f7451ae5c7ac2e91bf03a2c3c19f3b4e7f&"
              alt="Image 3"
            />
          </div>
        </Slider>
      </div>
      <section className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
              <div className="max-w-md mx-auto text-center lg:text-left">
                <div>
                  <h2 className="text-xl font-bold text-rose-900 sm:text-3xl">
                    Christmas Collection
                  </h2>
                </div>
                <button
                  onClick={() => router.push("/product/listing/all-products")}
                  className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                >
                  Shop ALL
                </button>
              </div>
            </div>
            <div className="lg:col-span-2 lg:py-8">
              <Swiper
                spaceBetween={20}
                slidesPerView={2}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
              >
                {products.map((productItem) => (
                  <SwiperSlide key={productItem._id}>
                    <div
                      onClick={() => router.push(`/product/${productItem._id}`)}
                      className="cursor-pointer"
                    >
                      <img
                        src={productItem.imageUrl}
                        alt="Sale Product Item"
                        className="object-cover w-full rounded aspect-square"
                      />
                      <div className="mt-3">
                        <h3 className="font-medium text-gray-900">
                          {productItem.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-800">
                          ${productItem.price}{" "}
                          <span className="text-red-700">{`(-${productItem.priceDrop}%) Off`}</span>
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <img src="https://cdn.discordapp.com/attachments/1170650328950124618/1188915454274711592/image.png?ex=659c42cd&is=6589cdcd&hm=b293fcf9adfe9beeaaf3ede137f9d122be901948b8db382ce8a4fb4a8b8fdf9c&" />
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-950 sm:text-3xl">
              SHOP BY CATEGORY
            </h2>
          </div>
          <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            <li>
              <div className="relative block group">
                <img
                  src="https://images.unsplash.com/photo-1544220828-842b050ef390?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">KIDS</h3>
                  <button
                    onClick={() => router.push("/product/listing/kids")}
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </li>
            <li>
              <div className="relative block group">
                <img
                  src="https://images.unsplash.com/photo-1598121443852-ff347aff7520?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">MEN</h3>
                  <button
                    onClick={() => router.push("/product/listing/women")}
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </li>
            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <div className="relative block group">
                <img
                  src="https://images.unsplash.com/photo-1542452255191-c85a98f2c5d1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="object-cover w-full aspect-square"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl font-medium text-white">WOMEN</h3>
                  <button
                    onClick={() => router.push("/product/listing/men")}
                    className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
