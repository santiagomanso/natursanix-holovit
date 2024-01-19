import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import img_vitamin from '@/assets/email/img_vitamin.png'
import img_run from '@/assets/email/img_run.png'
import img_brain from '@/assets/email/img_brain.png'
import img_hair from '@/assets/email/img_hair.png'
import Image from 'next/image'

export function MoreInfo() {
  return (
    <Accordion type='single' collapsible className='w-full'>
      <AccordionItem value='item-1'>
        <AccordionTrigger>Descripción</AccordionTrigger>
        <AccordionContent className='w-full '>
          <p>
            Holovit PureWay-C Liposomal se basa en una forma avanzada de
            vitamina c que se absorve rápidamente y permanece en el cuerpo
            durante mas tiempo debido a su estructura liposomada, potenciando
            aún más los beneficios que nos aporta esta vitamina.
          </p>
          <section className='grid grid-cols-4 w-full gap-10 text-pretty'>
            <article className='flex flex-col items-center gap-2 justify-start'>
              <div className='h-60 w-52 relative'>
                <Image
                  src={img_vitamin.src}
                  alt='Picture of the author'
                  layout='fill' // required
                  objectFit='cover' // change to suit your needs
                  className='w-full drop-shadow-[0_5px_5px_rgba(112,173,71.25)]' // just an example
                />
              </div>
              <p>
                la vitamina c es conocida por su capacidad para fortalecer el
                sistema inmunológico
              </p>
            </article>
            <article className='flex flex-col items-center gap-2 justify-start'>
              <div className='h-60 w-52 relative'>
                <Image
                  src={img_run.src}
                  alt='Picture of the author'
                  layout='fill' // required
                  objectFit='cover' // change to suit your needs
                  className='w-full drop-shadow-[0_5px_5px_rgba(112,173,71.25)]' // just an example
                />
              </div>
              <p>
                Ayuda a disminuir el cansancio y fatiga y a regenerar la forma
                reducida de la vitamina E
              </p>
            </article>
            <article className='flex flex-col items-center gap-2 justify-start'>
              <div className='h-60 w-52 relative'>
                <Image
                  src={img_brain.src}
                  alt='Picture of the author'
                  layout='fill' // required
                  objectFit='cover' // change to suit your needs
                  className='w-full drop-shadow-[0_5px_5px_rgba(112,173,71.25)]' // just an example
                />
              </div>
              <p>
                la vitamina c es conocida por su capacidad para fortalecer el
                sistema inmunológico
              </p>
            </article>
            <article className='flex flex-col items-center gap-2 justify-start'>
              <div className='h-60 w-52 relative'>
                <Image
                  src={img_hair.src}
                  alt='Picture of the author'
                  layout='fill' // required
                  objectFit='cover' // change to suit your needs
                  className='w-full drop-shadow-[0_5px_5px_rgba(112,173,71.25)]' // just an example
                />
              </div>
              <p>
                Contribuye a la formación de colágeno, que es escencial para la
                salud de la piel, huesos, cartílagos, encias, cabello y uñas
              </p>
            </article>
          </section>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2'>
        <AccordionTrigger>Composición</AccordionTrigger>
        <AccordionContent>
          <p>
            Por cápsula: Liposomal PureWay-C® (vitamina C (como PureWay-C®)
            67-73 %, fosfolípidos 15-18 %, ácidos grasos 5-15 %, bioflavonoides
            cítricos 0,1-1,5 %), 715 mg. Excipientes tecnológicos: celulosa
            microcristalina (agente de carga, c.s.; estearato de magnesio
            (antiaglomerante), c.s. y dióxido de silicio (antiaglomerante), c.s.
            ) Envoltura: polisacárido de origen vegetal (pululano).
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3'>
        <AccordionTrigger>Modo de empleo</AccordionTrigger>
        <AccordionContent>
          <p>Tomar 1 ó 2 cápsulas al día, en cualquier momento.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
