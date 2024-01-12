interface Props {
  handleChangeItem: (amount: number, discount: number) => void
}

const buttonArray = [
  {
    id: 1,
    amount: 3,
    discount: 0.15,
    text: '3 unidades',
  },
  {
    id: 2,
    amount: 2,
    discount: 0.12,
    text: '2 unidades',
  },
  {
    id: 3,
    amount: 1,
    discount: 0.1,
    text: '1 unidad',
  },
]

export default function BuyingButtons({ handleChangeItem }: Props) {
  return (
    <div className='flex items-center gap-5'>
      {buttonArray.map((item) => {
        return (
          <button
            className='bg-[#70AD47] w-[230px] text-xl font-bold flex flex-col items-center text-white p-2 transition-all duration-75 active:translate-y-2 hover:shadow-md hover:shadow-green-950'
            key={item.id}
            onClick={() => handleChangeItem(item.amount, item.discount)}
          >
            <span>{item.text}</span>
            <span>{`${(item.discount * 100).toFixed(0)}%`} de descuento</span>
          </button>
        )
      })}
    </div>
  )
}
