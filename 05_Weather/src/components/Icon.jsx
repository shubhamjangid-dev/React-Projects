import React from "react";
const icons = {
  wind: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="4rem"
      height="4rem"
      viewBox="0 0 256 256"
    >
      <path
        fill="currentColor"
        d="M180 184a28 28 0 0 1-28 28c-12.09 0-23.76-7.83-27.75-18.61a4 4 0 1 1 7.5-2.78C134.58 198.24 143.28 204 152 204a20 20 0 0 0 0-40H40a4 4 0 0 1 0-8h112a28 28 0 0 1 28 28M148 72a28 28 0 0 0-28-28c-12.09 0-23.76 7.83-27.75 18.61a4 4 0 0 0 7.5 2.78C102.58 57.76 111.28 52 120 52a20 20 0 0 1 0 40H24a4 4 0 0 0 0 8h96a28 28 0 0 0 28-28m60 4c-12.09 0-23.76 7.83-27.75 18.61a4 4 0 1 0 7.5 2.78C190.58 89.76 199.28 84 208 84a20 20 0 0 1 0 40H32a4 4 0 0 0 0 8h176a28 28 0 0 0 0-56"
      ></path>
    </svg>
  ),
  humidity: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
      >
        <path d="M12 21.5c4.101 0 7.5-3.063 7.5-6.929c0-2.415-1.233-4.859-2.627-6.862c-1.403-2.017-3.022-3.66-3.895-4.491a1.413 1.413 0 0 0-1.956 0c-.873.83-2.492 2.474-3.895 4.491C5.733 9.712 4.5 12.156 4.5 14.571c0 3.866 3.399 6.929 7.5 6.929Z"></path>
        <path
          strokeLinecap="round"
          d="M12 18a4 4 0 0 1-4-4"
        ></path>
      </g>
    </svg>
  ),
  pressure: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      viewBox="0 0 32 32"
    >
      <path
        fill="currentColor"
        d="M26 16a9.9 9.9 0 0 0-1.14-4.618l-1.495 1.496A7.95 7.95 0 0 1 24 16zm-2.586-6L22 8.586L17.285 13.3A3 3 0 0 0 16 13a3 3 0 1 0 3 3a3 3 0 0 0-.3-1.285zM16 17a1 1 0 1 1 1-1a1 1 0 0 1-1 1m0-9a8 8 0 0 1 3.122.635l1.496-1.496A9.986 9.986 0 0 0 6 16h2a8.01 8.01 0 0 1 8-8"
      ></path>
      <path
        fill="currentColor"
        d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4"
      ></path>
    </svg>
  ),
  visibility: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      viewBox="0 0 256 256"
    >
      <path
        fill="currentColor"
        d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.5 133.5 0 0 1 25 128a133.3 133.3 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.5 133.5 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64m0-112a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32"
      ></path>
    </svg>
  ),
  sunrise: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      viewBox="0 0 24 24"
    >
      <g fill="none">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 22h8M5 19h14M2 16h20"
        ></path>
        <path
          stroke="currentColor"
          strokeWidth={1.5}
          d="M12 6a6 6 0 0 0-4.5 9.969h9A6 6 0 0 0 12 6Z"
        ></path>
        <path
          fill="currentColor"
          d="m12 10l.53-.53a.75.75 0 0 0-1.06 0zm1.47 2.53a.75.75 0 1 0 1.06-1.06zm-4-1.06a.75.75 0 1 0 1.06 1.06zM12.75 16v-6h-1.5v6zm-1.28-5.47l2 2l1.06-1.06l-2-2zm0-1.06l-2 2l1.06 1.06l2-2z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth={1.5}
          d="M12 2v1m10 9h-1M3 12H2m17.07-7.07l-.392.393M5.322 5.322l-.393-.393"
        ></path>
      </g>
    </svg>
  ),
  sunset: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 22h8M5 19h14M2 16h20"
        ></path>
        <path d="M12 6a6 6 0 0 0-4.5 9.969h9A6 6 0 0 0 12 6Z"></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v7m0 0l2-2m-2 2l-2-2"
        ></path>
        <path
          strokeLinecap="round"
          d="M12 2v1m10 9h-1M3 12H2m17.07-7.07l-.392.393M5.322 5.322l-.393-.393"
        ></path>
      </g>
    </svg>
  ),
  "feels like": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2.5rem"
      height="2.5rem"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M14.863 13.4V4.939a2.93 2.93 0 0 0-.84-2.03a2.86 2.86 0 0 0-2.23-.82a2.95 2.95 0 0 0-2.66 3l.01 8.28a4.755 4.755 0 0 0 1.9 8.46a5 5 0 0 0 .95.09a4.76 4.76 0 0 0 4.76-4.75a4.68 4.68 0 0 0-1.89-3.769m-.48 6.66a3.78 3.78 0 0 1-3.15.78a3.7 3.7 0 0 1-2.92-2.98a3.75 3.75 0 0 1 1.43-3.69a.96.96 0 0 0 .39-.77V5.089a1.97 1.97 0 0 1 1.73-2a.7.7 0 0 1 .14-.01a1.88 1.88 0 0 1 1.86 1.86V13.4a.96.96 0 0 0 .39.77a3.742 3.742 0 0 1 .13 5.89"
      ></path>
      <path
        fill="currentColor"
        d="M13.893 17.169a1.89 1.89 0 0 1-3.78 0a1.86 1.86 0 0 1 1.39-1.81V5.4a.5.5 0 0 1 1 0v9.96a1.87 1.87 0 0 1 1.39 1.809"
      ></path>
    </svg>
  ),
  "min Temp": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2.5rem"
      height="2.5rem"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m7 10l5 5l5-5"
      ></path>
    </svg>
  ),
  "max Temp": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2.5rem"
      height="2.5rem"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m17 14l-5-5l-5 5"
      ></path>
    </svg>
  ),
  delete: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 40 40"
    >
      <path
        fill="currentColor"
        d="M21.499 19.994L32.755 8.727a1.064 1.064 0 0 0-.001-1.502c-.398-.396-1.099-.398-1.501.002L20 18.494L8.743 7.224c-.4-.395-1.101-.393-1.499.002a1.05 1.05 0 0 0-.309.751c0 .284.11.55.309.747L18.5 19.993L7.245 31.263a1.064 1.064 0 0 0 .003 1.503c.193.191.466.301.748.301h.006c.283-.001.556-.112.745-.305L20 21.495l11.257 11.27c.199.198.465.308.747.308a1.058 1.058 0 0 0 1.061-1.061c0-.283-.11-.55-.31-.747z"
      ></path>
    </svg>
  ),
  search: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M10.25 2a8.25 8.25 0 0 1 6.34 13.53l5.69 5.69a.749.749 0 0 1-.326 1.275a.75.75 0 0 1-.734-.215l-5.69-5.69A8.25 8.25 0 1 1 10.25 2M3.5 10.25a6.75 6.75 0 1 0 13.5 0a6.75 6.75 0 0 0-13.5 0"
      ></path>
    </svg>
  ),
  add: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 256 256"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={16}
      >
        <circle
          cx={128}
          cy={128}
          r={112}
        ></circle>
        <path d="M 79.999992,128 H 176.0001"></path>
        <path d="m 128.00004,79.99995 v 96.0001"></path>
      </g>
    </svg>
  ),
  back: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 1024 1024"
    >
      <path
        fill="currentColor"
        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64"
      ></path>
      <path
        fill="currentColor"
        d="m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312z"
      ></path>
    </svg>
  ),
};
function Icon({ prop }) {
  return icons[prop];
}

export default Icon;
