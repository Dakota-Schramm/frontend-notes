'use client'

import { useState, useEffect } from "react";

import { faker } from '@faker-js/faker';

const debounce = function (fn, delay) {
  let timer
  return function () {
    let context = this
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(context, arguments)
    }, delay)
  }
}

// generate a list of 100 names
const names = Array.from({ length: 100 }, () => faker.person.fullName() )

const InputData = ({ data }) => {
  if (!data?.length) {
    return <section>
      {names.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </section>
  }
  return <section>
    {data.map((name, index) => (
      <p key={index}>{name}</p>
    ))}
  </section>

}

const Debounce = () => {
  const [input, setInput] = useState('')
  const [data, setData] = useState<string[]>([])
  const [timesRendered, setTimesRendered] = useState(0)

  useEffect(() => {
    setTimesRendered(t => t + 1)
  })

  return (
    <div className="flex flex-col items-center">
      <h1>Debounce</h1>
      <p>Times rendered: {timesRendered}</p>
      <input
        className="text-black border-2 border-black p-1"
        value={input}
        onChange={(e) => {
          setInput(e.target.value)
        }}
        onKeyUp={(e) => {
          debounce(() => {
            const filteredNames = names.filter((name) =>
              name.toLowerCase().includes(input.toLowerCase())
            )
            console.log(filteredNames)
            setData(filteredNames)
          }, 1000)
        }}
      />
      <InputData data={data} />
    </div>
  )
}

export default Debounce; 
