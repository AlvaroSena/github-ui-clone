import { useState } from 'react'
import { Overlay, Dialog, Form, SearchBox, SearchIcon, TextField } from './styles'

export function SearchModal({ isOpen, closeModal, openModal }) {
  const isActive = JSON.stringify(isOpen)
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const formatedQuery = query.toLocaleLowerCase()

    window.location.href = `/${formatedQuery}`
  }

  return (
    <>
      <Dialog open={isOpen}>
        <Form onSubmit={handleSubmit}>
          <SearchBox>
            <SearchIcon />
            <TextField value={query} onChange={e => setQuery(e.target.value)} autoFocus/>
          </SearchBox>
        </Form>
      </Dialog>
      <Overlay className={`overlay ${isActive}`} onClick={closeModal} />
    </>
  )
}
