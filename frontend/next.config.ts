import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      {
        source: "/Home/Home.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/Home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/Gallery/Gallery.html",
        destination: "/gallery",
        permanent: true,
      },
      {
        source: "/LookBook/LookBook.html",
        destination: "/lookbook",
        permanent: true,
      },
      {
        source: "/Events/Events.html",
        destination: "/events",
        permanent: true,
      },
      {
        source: "/Apointment/Apointment.html",
        destination: "/appointment",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
