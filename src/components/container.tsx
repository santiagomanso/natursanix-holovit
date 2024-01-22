interface Props {
  children: React.ReactNode
  bgGradientInverted?: boolean
  justifyCenter?: boolean
  justifyStart?: boolean
  justifyEnd?: boolean
  opt?: string
}

export default function Container({
  children,
  bgGradientInverted,
  justifyCenter,
  justifyEnd,
  justifyStart,
  opt,
}: Props) {
  return (
    <section
      className={`w-full from-green-100 via-white to-white flex flex-col 
      ${bgGradientInverted ? 'bg-gradient-to-tl' : 'bg-gradient-to-bl'}
      ${justifyCenter && 'justify-center'}
      ${justifyStart && 'justify-start'}
      ${justifyEnd && 'justify-end'}
      
      `}
    >
      <div
        className={`w-full max-w-7xl mx-auto scale-100 md:scale-[.85] ${
          opt && opt
        }`}
      >
        {children}
      </div>
    </section>
  )
}
