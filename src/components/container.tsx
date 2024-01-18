interface Props {
  children: React.ReactNode
  bgGradientInverted?: boolean
  justifyCenter?: boolean
  justifyStart?: boolean
  justifyEnd?: boolean
}

export default function Container({
  children,
  bgGradientInverted,
  justifyCenter,
  justifyEnd,
  justifyStart,
}: Props) {
  return (
    <section
      className={`min-h-screen w-full from-green-100 via-white to-white flex flex-col 
      ${bgGradientInverted ? 'bg-gradient-to-tl' : 'bg-gradient-to-bl'}
      ${justifyCenter && 'justify-center'}
      ${justifyStart && 'justify-start'}
      ${justifyEnd && 'justify-end'}
      `}
    >
      <div className=' w-full max-w-7xl mx-auto'> {children}</div>
    </section>
  )
}
