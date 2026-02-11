"use client"
import { useEffect, useState } from "react";
import Image from "next/image";

export default function CatFav() {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favs")) || [];
    setFavs(stored);
  }, []);

  if (favs.length === 0) {
    return (
      <div className="flex items-center justify-center w-full h-full text-white text-xl">
        Go choose your favorite cats! 😺
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-4 p-10 w-full h-full place-items-center overflow-y-auto">
        {favs.map(cat => (
          <div className="w-35 h-25">
            <Image
              key={cat.id}
              src={cat.url}
              alt="fav cat"
              width={300}
              height={300}
              className="rounded-xl w-full h-full"
            />
          </div>
        ))}
      </div>
    </>
  );
}