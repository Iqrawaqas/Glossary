const Template = document.querySelector("[data-template]")
const Container = document.querySelector("[data-container]")
const searchInput = document.querySelector("[data-search]")
const Alphabet_selection = document.querySelector("[button-search]")
const Class_selection = document.querySelector("[data-class]")

let glossary = [];

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  glossary.forEach(product => {
    const isVisible = product.name.toLowerCase().includes(value)
      product.element.classList.toggle("hide", !isVisible)
  })
})

Alphabet_selection.addEventListener("click", e => {
  const value = e.target.innerHTML.toLowerCase()
  glossary.forEach(product => {
    const isVisible = product.name.toLowerCase().includes(value)
      product.element.classList.toggle("hide", !isVisible)
  })
})

Class_selection.addEventListener('input', e=>{
  debugger
  const value = e.target.value
  console.log('You selected: ', value);
  glossary.forEach(product => {
    const isVisible = product.cl.toString().includes(value)
      product.element.classList.toggle("hide", !isVisible)
  })
});

glossary = data.map(product => {
  debugger
      const card = Template.content.cloneNode(true).children[0]
      const Term = card.querySelector("[data-term]")
      const Class = card.querySelector("[data-class]")
      const Definition = card.querySelector("[data-definition]")
      const Tag = card.querySelector("[data-tag]")
      Term.textContent = product.term;
      Class.textContent = product.class;
      Definition.textContent = product.definition;
      Tag.textContent = product.tags
      Container.append(card)
      return { name: product.term, cl: product.class, def: product.definition, tg:product.tags, element: card }
    })