var Quotes = [`<blockquote>"It's not what happens to you, but how you react to it that matters."</blockquote>
        <p>--Epictetus</p>`,`<blockquote>"Resentment is like drinking poison and waiting for your enemies to die."</blockquote>
        <p>--Nelson Mandela</p>`,`<blockquote>"You miss 100% of the shots you don't take."</blockquote>
        <p>--Wayne Gretzy</p>`,`<blockquote>"Do not take life too seriously. You will not get out alive."</blockquote>
        <p>--Elbert Hubbard</p>`]
function displayQuote(){
    document.getElementById("container").innerHTML=(Quotes[Math.floor(Math.random()*4)])
}
