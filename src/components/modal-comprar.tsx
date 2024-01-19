import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Item } from '@/types/interfaces'
// import { Input } from "@/components/ui/input"

interface Props {
  item: Item
}

export function ModalComprar({ item }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='submit' size='xl'>
          Comprar
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-screen sm:max-w-[1000px] p-0 lg:p-6'>
        <DialogHeader>
          <DialogTitle>Completar Pago</DialogTitle>
          {/* <DialogDescription>
            Rellene los campos del formulario para proceder con el pago
          </DialogDescription> */}
        </DialogHeader>
        <div className='grid gap-4 py-4 w-[400px] h-[500px] lg:w-[950px] lg:h-[400px]'>
          <iframe
            className='w-full h-full'
            aria-label='Consigue Holovit PureWay-C Liposomal de Equisalud al mejor precio'
            src={item.url}
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  )
}
