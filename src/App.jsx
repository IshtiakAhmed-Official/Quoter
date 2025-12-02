import { useEffect, useState } from 'react'

export default function App() {
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")

async function Quote(){
  await  fetch("https://dummyjson.com/quotes/random")
.then(x => {
    return x.json()
})
.then(y => {
setQuote(y.quote);
setAuthor(y.author);

})
}

useEffect(()=>{Quote();},[]);

  return (
    <div class=" h-screen p-5">
      <div class="flex items-center p-5 ">
        <img class="h-15 bg-[#14B8A6]  rounded-2xl" src="quote_logo_high.png" alt="" />
        <h1 class="text-5xl item-middle  pl-3 pb-2 font-bold font-serif text-center ">Quoter</h1>
      </div>
      <div class="flex flex-col p-[5vh]  text-center justify-center items-center">
        <p class="font-bold text-7xl font-serif text-[#4dd7c3] pb-10 ]">“ „</p>
        <h2 class="font-serif text-[#1E293B] text-6xl  mb-12" >{quote}</h2>
        <div class="bg-[#14B8A6] w-30 h-1.5 mb-4 rounded-full "></div>
        <h3 class="text-[#64748B] font-mono mt-5 text-4xl">{author}</h3> 
        <button class="w-70 h-13 rounded-lg font-medium mt-[10vh]   text-white bg-[#14B8A6] hover:bg-[#0D9488] text-2xl" onClick={Quote}>New Quote</button>
      </div>
     
    </div>
  )
}
