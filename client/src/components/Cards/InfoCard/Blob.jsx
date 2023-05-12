export const Blob = () => {
  return (
    <>
      <svg
        id="sw-js-blob-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop
              id="stop1"
              stopColor="rgba(6, 255, 209, 0.21)"
              offset="0%"
            ></stop>
            <stop
              id="stop2"
              stopColor="rgba(255, 221, 0, 0.36)"
              offset="100%"
            ></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient)"
          d="M20,-32C25.3,-27.6,28.6,-21.1,31.5,-14.4C34.4,-7.8,37,-1.1,36.9,5.9C36.8,12.8,33.9,19.9,28.6,23.3C23.3,26.7,15.5,26.5,8.4,28.6C1.3,30.7,-5.2,35.1,-11.3,35C-17.5,34.8,-23.3,30,-29,24.5C-34.6,19,-40,12.8,-40.8,6C-41.6,-0.8,-37.8,-8.2,-32.9,-13.4C-28,-18.7,-22.1,-22,-16.5,-26.2C-10.8,-30.4,-5.4,-35.7,1,-37.2C7.3,-38.7,14.7,-36.4,20,-32Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          // style="transition: all 0.3s ease 0s;"
          strokeWidth="0"
        ></path>
      </svg>
    </>
  )
}
