import React from 'react'
import type { Metadata } from "next";
import Tadarus from './Tadarus'

export const metadata: Metadata = {
    title: "Awas Imsak! - Baca Quran Online",
    description: "Generated by create next app",
  };

const TadarusPage = () => {
  return (
    <div><Tadarus /></div>
  )
}

export default TadarusPage