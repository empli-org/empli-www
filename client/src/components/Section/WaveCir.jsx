export const WaveCir = ({ color }) => {
  return (
    <svg
      width="284"
      height="198"
      viewBox="0 0 284 198"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: color }}
    >
      <path
        d="M55 165L70.7143 149L86.4286 165L102.143 149L117.857 165L133.571 149"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M167 56L182.714 40L198.429 56L214.143 40L229.857 56L245.571 40L261.571 56L277.571 40"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <circle cx="35.5" cy="35.5" r="35.5" fill="currentColor" />
      <mask
        id="mask0_9_193"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="85"
        y="26"
        width="164"
        height="164"
      >
        <circle cx="167" cy="108" r="82" fill="currentColor" />
      </mask>
      <g mask="url(#mask0_9_193)">
        <path
          d="M159.192 198.24L20.9758 49.8354"
          stroke="currentColor"
          strokeWidth="5"
        />
        <path
          d="M203.176 177.213L64.9597 28.8091"
          stroke="currentColor"
          strokeWidth="5"
        />
        <path
          d="M247.16 157.335L108.943 8.93103"
          stroke="currentColor"
          strokeWidth="5"
        />
        <path
          d="M291.144 136.309L152.927 -12.0956"
          stroke="currentColor"
          strokeWidth="5"
        />
        <path
          d="M181.184 191.404L42.9677 43.0001"
          stroke="currentColor"
          strokeWidth="5"
        />
        <path
          d="M269.152 150.5L130.935 2.0957"
          stroke="currentColor"
          strokeWidth="5"
        />
        <path
          d="M225.168 170.952L86.9516 22.548"
          stroke="currentColor"
          strokeWidth="5"
        />
      </g>
    </svg>
  )
}
