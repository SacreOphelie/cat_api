"use client"

import NavBar from "./NavBar";

/**
 * Cette fonction permet d'intégrer NavBar sans conflits
 * @param {*} param0 
 * @returns 
 */
export default function Header({children})
{
    return(
        <NavBar />
    )
}