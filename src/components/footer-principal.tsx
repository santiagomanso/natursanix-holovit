import { Separator } from './ui/separator'

export default function FooterPrincipal() {
  return (
    <footer className='bg-accentBlue px-5 py-6 lg:py-0 lg:h-[200px] w-full  text-white flex items-center  justify-center'>
      <section className='grid grid-cols-1 lg:grid-cols-9 gap-5 lg:gap-20 w-full'>
        <article className='col-span-1 lg:col-span-4 flex gap-1 flex-col'>
          <h4>Enlaces</h4>
          <Separator />
          <ul>
            <li>
              <span className='font-medium'>&gt;</span> Política de privacidad
            </li>
            <li>
              <span className='font-medium'>&gt;</span> Política de cookies
            </li>
            <li>
              <span className='font-medium'>&gt;</span> Política de Aviso legal
            </li>
          </ul>
        </article>
        <article className='col-span-1 lg:col-span-4 flex gap-1 flex-col'>
          <h4>Contacto</h4>
          <Separator />

          <h3 className='font-semibold text-lg'>Natursanix</h3>
          <ul>
            <a href='tel:911250923' className='flex items-center gap-1'>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill=''
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='lucide lucide-phone'
                >
                  <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
                </svg>
              </span>
              91 125 09 23
            </a>
            <a
              className='flex items-center gap-1'
              href='mailto:contacto@natursanix.com'
            >
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='lucide lucide-mail'
                >
                  <rect width='20' height='16' x='2' y='4' rx='2' />
                  <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
                </svg>
              </span>
              contacto@natursanix.com
            </a>
            <li>Horario: L-V 9:00 A 14:00, 16:30 a 18:00</li>
          </ul>
        </article>
        <article className='col-span-1 lg:col-span-1 gap-1 items-start flex flex-col'>
          <h4>Siguenos</h4>
          <Separator />
          <div className='flex items-center justify-center gap-3'>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.facebook.com/Natursanix/'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='lucide lucide-facebook'
              >
                <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
              </svg>
            </a>

            <a
              href='https://www.instagram.com/natursanix/'
              target='_blank'
              rel='noreferrer'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
                className='lucide lucide-instagram'
              >
                <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
                <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
                <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
              </svg>
            </a>
          </div>
        </article>
      </section>
    </footer>
  )
}
