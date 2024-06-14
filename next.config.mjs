/** @type {import('next').NextConfig} */

import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
    dest: "public",
    // disable: process.env.NODE_ENV === "development",
    register: true,
    scope: "/",
    // sw: "service-worker.js",
    fallbacks:{
        document: "/~offline",
    },
    // customWorkerSrc: "service-worker",
    // cacheOnFrontendNav: true,
    // cacheStartUrl: true,
    // dynamicStartUrl: true,

    // publicExcludes: ["globals.css"],
});

export default withPWA({
    // Your Next.js config
});
