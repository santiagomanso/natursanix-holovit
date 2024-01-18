import Image from 'next/image'
import { Inter } from 'next/font/google'
import product from '@/assets/producto.png'
import DisplayPrice from '@/components/display-price'
import { useContext, useState } from 'react'
import BuyingButtons from '@/components/buying-buttons'
import { ItemsContext } from '@/context/items-context'
import Container from '@/components/container'
import { MoreInfo } from '@/components/more-info'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { selectedItem } = useContext(ItemsContext)

  return (
    <main className={` ${inter.className}`}>
      <Container justifyCenter>
        <header className='text-center mb-10'>
          <h1 className='text-primaryGreen text-5xl font-extrabold'>
            Holovit Pureway-C Liposomal
          </h1>
          <h3 className='text-secondaryGrey text-2xl italic tracking-wide'>
            Biodisponibilidad mejorada que aporta niveles óptimos de vitamina C
          </h3>
        </header>
        <section className='grid grid-cols-2 place-content-between w-full  text-secondaryGrey'>
          <article className='relative flex flex-1 h-full flex-col justify-center items-center group'>
            <div className='w-1/5 relative'>
              <span className='absolute -top-4 -left-10 z-10 rounded-full w-[55px] h-[55px] text-xl flex items-center justify-center text-white font-bold bg-accentBlue'>
                <div className='flex gap-0 flex-col items-center justify-center'>
                  <span className='text-xl'>x {selectedItem.amount}</span>
                  {/* <span className='text-sm'>x</span> */}
                </div>
              </span>

              <div className='h-60 w-28 relative'>
                <Image
                  src={product.src}
                  alt='Picture of the author'
                  layout='fill' // required
                  objectFit='cover' // change to suit your needs
                  className='w-full drop-shadow-[0_5px_15px_rgba(112,173,71.25)]' // just an example
                />
              </div>
            </div>
            <div>
              <h2 className='font-bold text-2xl text-accentBlue'>Beneficios</h2>
              <article className='ml-5 mt-5'>
                <ul className='mt-4 flex flex-col gap-2 '>
                  <li className='flex items-center gap-2 text-pretty'>
                    <span className='font-extrabold text-primaryGreen text-2xl'>
                      ✓
                    </span>
                    Biodisponibilidad mejorada que aporta niveles óptimos de
                    vitamina C:
                  </li>
                  <li className='flex items-center gap-2 text-pretty'>
                    <span className='font-extrabold text-primaryGreen text-2xl'>
                      ✓
                    </span>
                    La vitamina C es conocida por su capacidad para fortalecer
                    el sistema inmunológico.
                  </li>
                  <li className='flex items-center gap-2 text-pretty'>
                    <span className='font-extrabold text-primaryGreen text-2xl'>
                      ✓
                    </span>
                    Ayuda a disminuir el cansancio y fatiga y a regenerar la
                    forma reducida de la vitamina E.
                  </li>
                  <li className='flex items-center gap-2 text-pretty'>
                    <span className='font-extrabold text-primaryGreen text-2xl'>
                      ✓
                    </span>
                    Estimulación neuronal saludable.
                  </li>
                  <li className='flex items-center gap-2 text-pretty'>
                    <span className='font-extrabold text-primaryGreen text-2xl'>
                      ✓
                    </span>
                    Contribuye a la formación de colágeno, que es esencial para
                    la salud de la piel, huesos, cartílagos, encías, cabello y
                    uñas.
                  </li>
                </ul>
              </article>
            </div>
          </article>
          <article className='w-full h-full'>
            <BuyingButtons />
            <div className='shadow-lg shadow-accentBlue w-full'>
              <DisplayPrice />
            </div>
          </article>
        </section>
      </Container>

      <Container bgGradientInverted>
        <MoreInfo />
      </Container>
    </main>
  )
}
