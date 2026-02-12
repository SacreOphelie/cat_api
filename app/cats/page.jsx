"use client" // ici on utilise use client car il y a un useEffect, un useState et un fetch

import { useEffect, useState } from "react";
import {toast} from "react-toastify";
import CatNav from "@/components/CatNav";
import Image from "next/image";
import CatFav from "@/components/CatFav";

/**
 * Page API, cette page peut servir de page 404 
 * @returns 
 */
export default function CatsPage() {
  const [cat, setCat] = useState(null);

  // Gérer le chargement de l'image
  const [imgLoad, setImgLoad] = useState(true);

  // Gérer le bouton (photo suivante)
  const fetchCat = () => {
    setImgLoad(true); // relance le loader

    fetch("https://api.thecatapi.com/v1/images/search?limit=1", {
      headers: {
        "x-api-key": "TA_CLE_API"
      }
    })
      .then(res => res.json())
      .then(data => setCat(data[0]));
  }

  // au chargement de la page
  useEffect(() => {
    fetchCat();
  }, []);

  // Gestion des favoris
  const [showFavs, setShowFavs] = useState(false);

  const addToFavs = () => {
    if (!cat) return;

    const storeFavs = JSON.parse(localStorage.getItem("favs")) || [];

    // éviter les doublons (même id)
    const alreadyFav = storeFavs.find(f => f.id === cat.id);
    if (alreadyFav) {
      toast("Already in favorites 😺");
      return;
    }

    storeFavs.push(cat);

    localStorage.setItem("favs", JSON.stringify(storeFavs));

    toast("Meow ! I'm in your favorites now !");
  };


  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-130 h-125 rounded-2xl !p-5 bg-fuchsia-800 flex flex-col items-center justify-center gap-5 !mx-5 !mt-50 !mb-25 md:!mt-25 md:!mb-0">
        <CatNav 
          onShowFavs={() => setShowFavs(true)} 
          onShowCats={() => setShowFavs(false)} 
        />
        {showFavs ? (
          <CatFav />
        ) : (
          <>
            <div className=" w-full h-80 rounded-2xl overflow-hidden">
              {/* Gérer le chargement de l'image */}
              {imgLoad && (
                <div className=" w-full h-full flex justify-center items-center">
                  <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              {cat && (
                <>
                  <Image
                    key={cat.id}
                    src={cat.url}
                    alt="Cat"
                    width={640}
                    height={480}
                    className="object-cover w-full h-full"
                    onLoad={() => setImgLoad(false)}
                  />
                </>
              )}
            </div>
            <div className=" flex items-center justify-between !p-2 w-full">
              {/* Mettre en favoris */}
              <svg className="w-10 h-8 cursor-pointer text-white hover:text-pink-200 hover:scale-110" version="1.0" id="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" onClick={addToFavs} >
                <g>
                  {/* le currentColor va prendre la couleur du texte parent => permettra au hover de fonctionner */}
                  <path fill="currentColor" d="M48,6c-4.418,0-8.418,1.791-11.313,4.687l-3.979,3.961c-0.391,0.391-1.023,0.391-1.414,0
                  c0,0-3.971-3.97-3.979-3.961C24.418,7.791,20.418,6,16,6C7.163,6,0,13.163,0,22c0,3.338,1.024,6.436,2.773,9
                  c0,0,0.734,1.164,1.602,2.031s24.797,24.797,24.797,24.797C29.953,58.609,30.977,59,32,59s2.047-0.391,2.828-1.172
                  c0,0,23.93-23.93,24.797-24.797S61.227,31,61.227,31C62.976,28.436,64,25.338,64,22C64,13.163,56.837,6,48,6z M58.714,30.977
                  c0,0-0.612,0.75-1.823,1.961S33.414,56.414,33.414,56.414C33.023,56.805,32.512,57,32,57s-1.023-0.195-1.414-0.586
                  c0,0-22.266-22.266-23.477-23.477s-1.823-1.961-1.823-1.961C3.245,28.545,2,25.424,2,22C2,14.268,8.268,8,16,8
                  c3.866,0,7.366,1.566,9.899,4.101l0.009-0.009l4.678,4.677c0.781,0.781,2.047,0.781,2.828,0l4.678-4.677l0.009,0.009
                  C40.634,9.566,44.134,8,48,8c7.732,0,14,6.268,14,14C62,25.424,60.755,28.545,58.714,30.977z"></path>
                  <path fill="currentColor" d="M48,12c-0.553,0-1,0.447-1,1s0.447,1,1,1c4.418,0,8,3.582,8,8c0,0.553,0.447,1,1,1s1-0.447,1-1
                  C58,16.478,53.522,12,48,12z"></path>
                </g>
              </svg>
              {/* Image suivante */}
              <svg id="Next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155.21 307.47" className="w-10 h-8 cursor-pointer text-white hover:text-pink-200 hover:scale-110" onClick={fetchCat}>
                <g>
                  <path fill="currentColor" d="M154.11,150.98s-.02-.02-.02-.02l-2.78-2.86L10,2.98l-1.42-1.46C6.66-.46,3.49-.51,1.51,1.42c-1.01.98-1.51,2.28-1.51,3.58v297.48c0,1.3.51,2.6,1.51,3.57,1.98,1.93,5.15,1.9,7.07-.08l1.42-1.46,141.33-145.15,2.76-2.83s0-.02.02-.03c1.46-1.52,1.46-4.01,0-5.52ZM140,156.66L13.42,286.65c-1.25,1.28-3.42.4-3.42-1.39V22.47c0-1.89,2.29-2.82,3.61-1.47l126.39,129.8c1.59,1.63,1.59,4.22,0,5.85Z"/>
                  <path fill="currentColor" d="M65.11,99.61c-1.28,0-2.56-.49-3.54-1.46L26.99,63.57c-1.95-1.95-1.95-5.12,0-7.07,1.95-1.95,5.12-1.95,7.07,0l34.58,34.58c1.95,1.95,1.95,5.12,0,7.07-.98.98-2.26,1.46-3.54,1.46Z"/>
                </g>
              </svg>
            </div>
          </>
        )}

      </div>
    </div>
  );
}
