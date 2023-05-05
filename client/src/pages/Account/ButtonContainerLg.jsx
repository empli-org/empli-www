import React from 'react'

export const ButtonContainerLg = ({
  activeStep,
  setActiveStep,
  setDirection,
  disabled = false,
}) => {
  return (
    <div
      className={`bg-neutral-White mt-3 hidden w-full items-center lg:flex ${
        activeStep > 1 ? 'justify-between' : 'justify-end'
      }  py-3`}
    >
      {activeStep > 1 && (
        <button
          onClick={() => {
            setActiveStep(prev => prev - 1)
            setDirection(-1)
          }}
          className="rounded bg-hint-of-red px-6 py-4 font-medium  text-blue-whale transition hover:opacity-80"
        >
          Volver
        </button>
      )}

      <button
        disabled={disabled}
        onClick={() => {
          setActiveStep(prev => prev + 1)
          setDirection(1)
        }}
        className={`${
          activeStep === 4
            ? 'bg-primary-Purplish_blue'
            : 'bg-primary-Marine_blue'
        } rounded bg-blue-whale px-6 py-4 font-medium  text-white transition hover:opacity-80 disabled:bg-gray-400`}
      >
        {activeStep === 4 || activeStep === 5 ? 'Confirmar' : 'Siguiente'}
      </button>
    </div>
  )
}
