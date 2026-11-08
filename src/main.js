import './style.css'

const header = document.querySelector('.site-header')
const toggle = document.querySelector('.menu-toggle')
const nav = document.querySelector('.nav')

const onScroll = () => header.classList.toggle('is-solid', window.scrollY > 40)
onScroll()
window.addEventListener('scroll', onScroll, { passive: true })

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open')
  toggle.setAttribute('aria-expanded', String(open))
})
nav.addEventListener('click', (e) => {
  if (e.target.closest('a')) {
    nav.classList.remove('is-open')
    toggle.setAttribute('aria-expanded', 'false')
  }
})
