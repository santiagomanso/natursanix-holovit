import img_discounts from '@/assets/img_discounts.png'
import img_shippment_free from '@/assets/img_shippment_free.png'
import img_returns from '@/assets/img_returns.png'
import img_shippment_speed from '@/assets/img_shippment_speed.png'
import Image from 'next/image'

export default function GridIcons() {
  return (
    <section className='grid grid-cols-4 pb-5 place-content-between content-between justify-between mt-20'>
      <article className='flex flex-col justify-center items-center '>
        <div className='h-12 w-14 relative'>
          <Image
            src={img_discounts.src}
            alt='Picture of the author'
            layout='fill' // required
            objectFit='cover' // change to suit your needs
            className='w-full drop-shadow-[0_2px_2px_rgba(112,173,71.25)]' // just an example
          />
        </div>
        <h2 className='text-accentBlue font-bold text-xl'>
          Descuentos exclusivos
        </h2>
        <h3 className='text-accentBlue font-medium'>en las mejores marcas</h3>
      </article>
      <article className='flex flex-col justify-center items-center '>
        <div className='h-12 w-14 relative'>
          <Image
            src={img_shippment_free.src}
            alt='Picture of the author'
            layout='fill' // required
            objectFit='cover' // change to suit your needs
            className='w-full drop-shadow-[0_2px_2px_rgba(112,173,71.25)]' // just an example
          />
        </div>
        <h2 className='text-accentBlue font-bold text-xl'>Envío gratis</h2>
        <h3 className='text-accentBlue font-medium'>a partir de 25€</h3>
      </article>
      <article className='flex flex-col justify-center items-center '>
        <div className='h-12 w-14 relative'>
          <Image
            src={img_returns.src}
            alt='Picture of the author'
            layout='fill' // required
            objectFit='cover' // change to suit your needs
            className='w-full drop-shadow-[0_2px_2px_rgba(112,173,71.25)]' // just an example
          />
        </div>
        <h2 className='text-accentBlue font-bold text-xl'>
          Devolución garantizada
        </h2>
        <h3 className='text-accentBlue font-medium'>durante 14 días</h3>
      </article>
      <article className='flex flex-col justify-center items-center '>
        <div className='h-14 w-14 relative'>
          <Image
            src={img_shippment_speed.src}
            alt='Picture of the author'
            layout='fill' // required
            objectFit='cover' // change to suit your needs
            className='w-full -translate-y-[0.15rem] drop-shadow-[0_2px_2px_rgba(112,173,71.25)]' // just an example
          />
        </div>
        <h2 className='text-accentBlue font-bold text-xl'>Envío rápido</h2>
        <h3 className='text-accentBlue font-medium'>24-48 horas</h3>
      </article>
    </section>
  )
}
