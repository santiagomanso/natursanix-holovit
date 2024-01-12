import Image from 'next/image'
import { Inter } from 'next/font/google'
import product from '@/assets/producto.png'
import DisplayPrice from '@/components/display-price'
import { useState } from 'react'
import BuyingButtons from '@/components/buying-buttons'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [selectedItem, setSelectedItem] = useState({
    amount: 3,
    discount: 0.15,
    originalPrice: 89.95,
  })

  const handleChangeItem = (amount: number, discount: number) => {
    setSelectedItem((prev) => {
      return {
        ...prev,
        amount: amount,
        discount: discount,
      }
    })
  }

  return (
    <main
      className={`flex bg-white min-h-screen flex-col items-center gap-10 justify-start pt-20 ${inter.className}`}
    >
      <header className='text-center'>
        <h1 className='text-[#70AD47] text-5xl font-extrabold'>
          Holovit Pureway-C Liposomal​{' '}
        </h1>
        <h3 className='text-[#555555] text-3xl'>
          Biodisponibilidad mejorada que aporta niveles óptimos de vitamina C
        </h3>
      </header>
      <section className='grid grid-cols-2  text-[#555555] px-32'>
        <article className='relative flex flex-col justify-center items-center'>
          <img alt='nada' className='w-1/5' src={product.src} />
          <div>
            <p className='mt-5'>
              Biodisponibilidad mejorada que aporta niveles óptimos de vitamina
              C:
            </p>
            <ul className='mt-4 list-disc flex flex-col gap-2'>
              <li>
                La vitamina C es conocida por su capacidad para fortalecer el
                sistema inmunológico.
              </li>
              <li>
                Ayuda a disminuir el cansancio y fatiga y a regenerar la forma
                reducida de la vitamina E.
              </li>
              <li>Estimulación neuronal saludable.</li>
              <li>
                Contribuye a la formación de colágeno, que es esencial para la
                salud de la piel, huesos, cartílagos, encías, cabello y uñas.
              </li>
            </ul>
          </div>
        </article>
        <article className='flex flex-col items-center gap-5 self-start pt-20'>
          <BuyingButtons handleChangeItem={handleChangeItem} />
          <div className='shadow-md shadow-[#003883] w-2/3'>
            <DisplayPrice item={selectedItem} />
          </div>
        </article>
      </section>
    </main>
  )
}
