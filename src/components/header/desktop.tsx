"use client";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import debounce from "lodash/debounce";
import { NormalModal } from "../modal";

export const Desktop = ({ menus }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const [submenu, setSubmenu] = useState<any>({});

  const debouncedSetIsHovered = useCallback(
    debounce((value: boolean) => {
      setIsHovered(value);
    }, 200),
    []
  );

  const handleMouseEnter = (nav: string) => {
    const element = menus.find((ele: any) => ele.name === nav);
    if (element) {
      setSubmenu(element);
      debouncedSetIsHovered(true);
    }
  };

  const gridNumber = () => {
    const length = submenu.nav_sub_categories
      ? submenu.nav_sub_categories.length
      : 5;
    switch (length) {
      case 1:
        return `grid grid-cols-1 place-items-stretch gap-x-4`;
      case 2:
        return `grid grid-cols-2 place-items-stretch gap-x-4`;
      case 3:
        return `grid grid-cols-3 place-items-stretch gap-x-4`;
      case 4:
        return `grid grid-cols-4 place-items-stretch gap-x-4`;
      case 5:
        return `grid grid-cols-5 place-items-stretch gap-x-4`;
      default:
        return `grid grid-cols-6 place-items-stretch gap-x-4`;
    }
  };

  const handleMouseLeave = () => {
    debouncedSetIsHovered(false);
  };

  // console.log("sub--->", menus);

  return (
    <div className="hidden lg:block">
      <div className="flex justify-between items-center">
        <div className=" flex space-x-12 items-center">
          <Link href="/">
            <Image
              src="https://www.guarented.com/assets/images/logo/logo.webp"
              alt="logo"
              width={100}
              height={30}
            />
          </Link>

          <div className="space-x-6 cursor-pointer">
            {menus.map((nav: any, index: number) => {
              return (
                <a
                  target={nav.redirection_type === "new" ? "_blank" : "_self"}
                  href={nav.redirection_link}
                  onMouseOver={() => handleMouseEnter(nav.name)}
                  key={index}
                  className={`${
                    nav.style ? nav.style : "text-black"
                  } inline-flex space-x-2 text-sm focus:outline-none cursor-pointer`}
                >
                  <span>{nav.name}</span>
                  {nav.tags?.some((ele: string) =>
                    ele.includes("New_Arrival")
                  ) && (
                    <Image
                      src="https://www.guarented.com/assets/images/nav/new.webp"
                      height={20}
                      width={20}
                      alt="icon"
                    />
                  )}
                </a>
              );
            })}
          </div>

          {submenu.is_dropdown_enabled && (
            <NormalModal isOpen={isHovered} onClose={() => setIsHovered(false)}>
              <div className={`w-full ${gridNumber()} text-black pb-4`}>
                {submenu["nav_sub_categories"]?.map((submenu: any) => {
                  return (
                    <div key={submenu.name} className="flex flex-col space-y-3">
                      {submenu?.map((nav: any) => {
                        return (
                          <div key={nav.name} className="space-y-1">
                            <a
                              target={
                                nav.redirection_type === "new"
                                  ? "_blank"
                                  : "_self"
                              }
                              href={nav.redirection_link}
                              className="text-xl font-[900]"
                            >
                              {nav.name}
                            </a>
                            {nav.nav_themes?.map((theme: any) => {
                              return (
                                <div key={theme.name} className="space-y-1">
                                  <a className="text-primary">{theme.name}</a>
                                  <ul>
                                    {theme.nav_products.map((product: any) => {
                                      return (
                                        <li
                                          key={product.name}
                                          className="text-sm text-gray-500 inline-flex w-full justify-between items-center lg:pr-4"
                                        >
                                          <a
                                            target={
                                              product.redirection_type === "new"
                                                ? "_blank"
                                                : "_self"
                                            }
                                            href={product.redirection_link}
                                          >
                                            {product.name}
                                          </a>
                                          {product.tags?.some((ele: string) =>
                                            ele.includes("New_Arrival")
                                          ) && (
                                            <Image
                                              src="https://www.guarented.com/assets/images/nav/new-text.webp"
                                              height={10}
                                              width={25}
                                              alt="icon"
                                            />
                                          )}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </NormalModal>
          )}
        </div>
        <div className="flex space-x-10 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="w-5 h-5 text-black"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
              clipRule="evenodd"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="w-5 h-5 text-black"
          >
            <path d="M1 1.75A.75.75 0 0 1 1.75 1h1.628a1.75 1.75 0 0 1 1.734 1.51L5.18 3a65.25 65.25 0 0 1 13.36 1.412.75.75 0 0 1 .58.875 48.645 48.645 0 0 1-1.618 6.2.75.75 0 0 1-.712.513H6a2.503 2.503 0 0 0-2.292 1.5H17.25a.75.75 0 0 1 0 1.5H2.76a.75.75 0 0 1-.748-.807 4.002 4.002 0 0 1 2.716-3.486L3.626 2.716a.25.25 0 0 0-.248-.216H1.75A.75.75 0 0 1 1 1.75ZM6 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
          </svg>

          <button className="bg-primary text-white rounded-full hover:text-black px-8 py-1">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
