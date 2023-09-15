import React from 'react'

const textContent = "nemo suscipitarchitectodeserunt vero, eveniet soluta deleniti alias dolor illum praesentium ipsa minus"
// TODO: Create visual examples with components on this page to illustrate concepts
const Sizing = () => {
  return (
    <main className='flex flex-col items-center'>
      <h1>Sizing</h1>

      <h2>Sizing with Containers for Text</h2>
      <section className='w-full flex flex-col items-center'>
        <h3>Fixed width, height</h3>
        <p>{'Fixed width, height => width and height are set to a fixed value'}</p>
        <p className='w-[200px] h-[200px] border border-red-500'>{textContent}</p>
      </section>
      <section className='w-full flex flex-col items-center'>
        <h3>Min-Content</h3>
        <p>{'Min-content => width is length of longest word'}</p>
        <div className='w-min border border-purple-500'>{textContent}</div>
      </section>
      <section className='w-full flex flex-col items-center'>
        <h3>Max-Content</h3>
        <p>{'Max-content => width for full sentence, always stays that size'}</p>
        <p className='w-max border border-blue-600'>{textContent}</p>
      </section>
      <section className='w-full flex flex-col items-center'>
        <h3>Auto</h3>
        <p>{'Auto => width is parent container (full width of parent by default'}</p>
      </section>
      <section className='w-full flex flex-col items-center'>
        <h3>Fit-Content</h3>
        <p>{'Fit => max width but responsive => goes all the way down to min-content'}</p>
        <p className='w-fit border border-yellow-300'>{textContent}</p>
      </section>

      <section>
        <h2>Useful Links</h2>
        <li>
          <ul>https://blog.logrocket.com/understanding-min-content-max-content-fit-content-css/</ul>
        </li>
      </section>
    </main>
  )
}

export default Sizing 