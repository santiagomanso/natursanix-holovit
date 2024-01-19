import { ItemsContext } from '@/context/items-context'
import { useContext } from 'react'
import { ModalComprar } from './modal-comprar'
import FooterPagos from './footer-pagos'
import { Item } from '@/types/interfaces'

interface Props {
  item: {
    amount: number
    discount: number
    originalPrice: number
    bestOffer?: boolean
  }
}

export default function DisplayPrice() {
  const { selectedItem: item } = useContext(ItemsContext)

  const formattedDiscount = `${(item.discount * 100).toFixed(0)}%`

  const newPrice = (
    (item.originalPrice - item.originalPrice * item.discount) *
    item.amount
  ).toFixed(2)

  const savedMoney = (item.originalPrice * item.discount).toFixed(2)

  // const handleNavigation = (item: Item) => {
  //   const url =
  //     'https://forms.zohopublic.eu/univerlifenatursanix/form/Pagolanding/formperma/IGIeJakmYJyR_zzgIRGG9GncBB0h8Nw4opVymAvw7wA?aux_op=1+unidad+con+un+10%25+de+descuento+-+26.96%E2%82%AC'
  //   window.open(url, '_blank')
  // }

  return (
    <>
      <header className='bg-accentBlue w-full text-center h-16 flex items-center justify-center'>
        <h2 className='text-white text-4xl capitalize font-bold'>
          ahorra {savedMoney}€
        </h2>
      </header>
      <div className='text-center py-4 w-full bg-white'>
        <h3 className='text-xl'>
          {item.amount} unidades con un {formattedDiscount} de descuento
        </h3>
        <div className='flex flex-col gap-2'>
          <p className='line-through text-2xl mt-4'>{item.originalPrice}€</p>
          <p className='text-4xl font-medium text-accentRed'>{newPrice}€</p>
          <p className='text-3xl'>Envío gratuito*</p>
          <p className='text-3xl'>Envío express en 24 horas</p>
        </div>
        <div className='flex items-center justify-center gap-4'>
          {/* <button
            onClick={() => handleNavigation(item)}
            className='border-2 rounded-md border-primaryGreen px-10 py-2 mt-7 font-bold text-2xl shadow-md  hover:shadow-primaryGreen'
          >
            Comprar c/ link
          </button> */}
          <ModalComprar item={item} />
        </div>
        <FooterPagos />
      </div>
    </>
  )
}
