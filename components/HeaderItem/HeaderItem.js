//importaciones
import React from "react";

//componentes de next
import { useRouter } from "next/router";

const HeaderItem = ({ title, Icon }) => {
  //useRouter
  const router = useRouter();

  return (
    <>
      {title === "Home" ? (
        <div
          onClick={() => router.push("/")}
          className="flex flex-col items-center cursor-pointer group w-12 sm:w-10 hover:text-white"
        >
          <Icon className="h-8 mb-1 group-hover:animate-bounce" />
          <p className="opacity-0 group-hover:opacity-100 hover:opacity-100 tracking-widest">
            {title}
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-10 hover:text-white">
          <Icon className="h-8 mb-1 group-hover:animate-bounce" />
          <p className="opacity-0 group-hover:opacity-100 hover:opacity-100 tracking-widest">
            {title}
          </p>
        </div>
      )}
    </>
  );
};

export default HeaderItem;
