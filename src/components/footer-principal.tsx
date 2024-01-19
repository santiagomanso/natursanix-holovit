export default function FooterPrincipal() {
  return (
    <footer className='bg-accentBlue px-4 h-[200px] w-full  text-white flex items-center  justify-center'>
      <section className='grid grid-cols-5 w-full'>
        <article className='col-span-2 flex flex-col'>
          <h4>Enlaces</h4>
          <ul>
            <li>&gt; Política de privacidad</li>
            <li>&gt; Política de cookies</li>
            <li>&gt; Política de Aviso legal</li>
          </ul>
        </article>
        <article className='col-span-2 flex flex-col'>
          <h4>Contacto</h4>
          <ul>
            <li>&gt; Política de privacidad</li>
            <li>&gt; Política de cookies</li>
            <li>&gt; Política de Aviso legal</li>
          </ul>
        </article>
        <article className='col-span-1 flex flex-col'>
          <h4>Siguenos</h4>
        </article>
      </section>
    </footer>
  )
}
