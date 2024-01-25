import Image from 'next/image'
import { Inter } from 'next/font/google'
import product from '@/assets/producto.png'
import DisplayPrice from '@/components/display-price'
import { useContext, useState } from 'react'
import BuyingButtons from '@/components/buying-buttons'
import { ItemsContext } from '@/context/items-context'
import Container from '@/components/container'
import { MoreInfo } from '@/components/more-info'
import GridIcons from '@/components/grid-icons'
import FooterPrincipal from '@/components/footer-principal'
import HeaderPrincipal from '@/components/header-principal'
import { NextPage } from 'next'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {
  const { selectedItem } = useContext(ItemsContext)

  return (
    <Head>
      <title>Natursanix - Holovit Liposomal Pureway</title>
      <meta
        name='description'
        content='Conoce el nuevo Holovit Liposomal Pureway, con su presentacion en 3 unidades tienes un 15% de descuento! consíguelo ahora!'
      />
      <main className={` ${inter.className}`}>
        <Container justifyCenter>
          <HeaderPrincipal />
          <section className='grid grid-cols-1 lg:grid-cols-2 lg:gap-20 place-content-between w-full  text-secondaryGrey'>
            <article className='relative flex flex-1 h-full flex-col justify-center items-center group'>
              <div className='w-1/5 relative'>
                <span className='absolute -top-4 -left-7 lg:-left-10 z-10 rounded-full h-[35px] w-[35px] lg:w-[55px] lg:h-[55px] text-xl flex items-center justify-center text-white font-bold bg-accentBlue'>
                  <div className='flex gap-0 flex-col items-center justify-center'>
                    <span className='text-sm lg:text-xl'>
                      x {selectedItem.amount}
                    </span>
                  </div>
                </span>

                <div className='h-48 md:h-72 md:w-32 lg:h-60 lg:w-28 relative'>
                  <Image
                    src={product.src}
                    alt='Picture of the author'
                    layout='fill' // required
                    objectFit='cover' // change to suit your needs
                    className='w-full drop-shadow-[0_5px_15px_rgba(112,173,71.25)]' // just an example
                  />
                </div>
              </div>
              <div className='hidden md:block'>
                <h2 className='font-bold lg:text-2xl text-accentBlue px-5 lg:px-0'>
                  Beneficios
                </h2>
                <article className='ml-5 lg:mt-5'>
                  <ul className='mt-4 flex flex-col gap-2 '>
                    <li className='flex items-center gap-2 text-pretty text-sm lg:text-xl'>
                      <span className='font-extrabold text-primaryGreen  lg:text-2xl'>
                        ✓
                      </span>
                      Biodisponibilidad mejorada que aporta niveles óptimos de
                      vitamina C:
                    </li>
                    <li className='flex items-center gap-2 text-pretty text-sm lg:text-xl'>
                      <span className='font-extrabold text-primaryGreen  lg:text-2xl'>
                        ✓
                      </span>
                      La vitamina C es conocida por su capacidad para fortalecer
                      el sistema inmunológico.
                    </li>
                    <li className='flex items-center gap-2 text-pretty text-sm lg:text-xl'>
                      <span className='font-extrabold text-primaryGreen  lg:text-2xl'>
                        ✓
                      </span>
                      Ayuda a disminuir el cansancio y fatiga y a regenerar la
                      forma reducida de la vitamina E.
                    </li>
                    <li className='flex items-center gap-2 text-pretty text-sm lg:text-xl'>
                      <span className='font-extrabold text-primaryGreen  lg:text-2xl'>
                        ✓
                      </span>
                      Estimulación neuronal saludable.
                    </li>
                    <li className='flex items-center gap-2 text-pretty text-sm lg:text-xl'>
                      <span className='font-extrabold text-primaryGreen  lg:text-2xl'>
                        ✓
                      </span>
                      Contribuye a la formación de colágeno, que es esencial
                      para la salud de la piel, huesos, cartílagos, encías,
                      cabello y uñas.
                    </li>
                  </ul>
                </article>
              </div>
            </article>
            <article className='w-full h-full mb-10 lg:mb-0'>
              <BuyingButtons />
              <div className='shadow-lg  mx-auto max-w-[400px] md:max-w-full lg:px-0 mt-5 shadow-accentBlue w-full'>
                <DisplayPrice />
              </div>
            </article>
          </section>
        </Container>

        <Container bgGradientInverted opt='px-5 lg:px-0'>
          <div className='block md:hidden'>
            <h2 className='font-bold lg:text-2xl text-accentBlue px-5 lg:px-0'>
              Beneficios
            </h2>
            <article className='ml-5 lg:mt-5'>
              <ul className='mt-4 flex flex-col gap-2 '>
                <li className='flex items-center gap-2 text-pretty text-sm lg:text-xl'>
                  <span className='font-extrabold text-primaryGreen  lg:text-2xl'>
                    ✓
                  </span>
                  Biodisponibilidad mejorada que aporta niveles óptimos de
                  vitamina C:
                </li>
                <li className='flex items-center gap-2 text-pretty text-sm lg:text-xl'>
                  <span className='font-extrabold text-primaryGreen  lg:text-2xl'>
                    ✓
                  </span>
                  La vitamina C es conocida por su capacidad para fortalecer el
                  sistema inmunológico.
                </li>
                <li className='flex items-center gap-2 text-pretty text-sm lg:text-xl'>
                  <span className='font-extrabold text-primaryGreen  lg:text-2xl'>
                    ✓
                  </span>
                  Ayuda a disminuir el cansancio y fatiga y a regenerar la forma
                  reducida de la vitamina E.
                </li>
                <li className='flex items-center gap-2 text-pretty text-sm lg:text-xl'>
                  <span className='font-extrabold text-primaryGreen  lg:text-2xl'>
                    ✓
                  </span>
                  Estimulación neuronal saludable.
                </li>
                <li className='flex items-center gap-2 text-pretty text-sm lg:text-xl'>
                  <span className='font-extrabold text-primaryGreen  lg:text-2xl'>
                    ✓
                  </span>
                  Contribuye a la formación de colágeno, que es esencial para la
                  salud de la piel, huesos, cartílagos, encías, cabello y uñas.
                </li>
              </ul>
            </article>
          </div>
          <MoreInfo />
          <GridIcons />
        </Container>
        <FooterPrincipal />
      </main>
    </Head>
  )
}

export default Home

// old grid option without hidding benefits description
{
  /* <main className={` ${inter.className}`}>
<Container justifyCenter>
  <HeaderPrincipal />
  <section className='grid grid-cols-1 lg:grid-cols-2 lg:gap-20 place-content-between w-full  text-secondaryGrey'>
    <article className='relative flex flex-1 h-full flex-col justify-center items-center group'>
      <div className='w-1/5 relative'>
        <span className='absolute -top-4 -left-7 lg:-left-10 z-10 rounded-full h-[35px] w-[35px] lg:w-[55px] lg:h-[55px] text-xl flex items-center justify-center text-white font-bold bg-accentBlue'>
          <div className='flex gap-0 flex-col items-center justify-center'>
            <span className='text-sm lg:text-xl'>
              x {selectedItem.amount}
            </span>
          </div>
        </span>

        <div className='h-48 md:h-72 md:w-32 lg:h-60 lg:w-28 relative'>
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
        <h2 className='font-bold lg:text-2xl text-accentBlue px-5 lg:px-0'>
          Beneficios
        </h2>
        <article className='ml-5 lg:mt-5'>
          <ul className='mt-4 flex flex-col gap-2 '>
            <li className='flex items-center gap-2 text-pretty text-sm lg:text-xl'>
              <span className='font-extrabold text-primaryGreen  lg:text-2xl'>
                ✓
              </span>
              Biodisponibilidad mejorada que aporta niveles óptimos de
              vitamina C:
            </li>
            <li className='flex items-center gap-2 text-pretty text-sm lg:text-xl'>
              <span className='font-extrabold text-primaryGreen  lg:text-2xl'>
                ✓
              </span>
              La vitamina C es conocida por su capacidad para fortalecer
              el sistema inmunológico.
            </li>
            <li className='flex items-center gap-2 text-pretty text-sm lg:text-xl'>
              <span className='font-extrabold text-primaryGreen  lg:text-2xl'>
                ✓
              </span>
              Ayuda a disminuir el cansancio y fatiga y a regenerar la
              forma reducida de la vitamina E.
            </li>
            <li className='flex items-center gap-2 text-pretty text-sm lg:text-xl'>
              <span className='font-extrabold text-primaryGreen  lg:text-2xl'>
                ✓
              </span>
              Estimulación neuronal saludable.
            </li>
            <li className='flex items-center gap-2 text-pretty text-sm lg:text-xl'>
              <span className='font-extrabold text-primaryGreen  lg:text-2xl'>
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
    <article className='w-full h-full mb-10 lg:mb-0'>
      <BuyingButtons />
      <div className='shadow-lg  mx-auto max-w-[400px] md:max-w-full lg:px-0 mt-5 shadow-accentBlue w-full'>
        <DisplayPrice />
      </div>
    </article>
  </section>
</Container>

<Container bgGradientInverted opt='px-5 lg:px-0'>
  <MoreInfo />
  <GridIcons />
</Container>
<FooterPrincipal />
</main>
 */
}
