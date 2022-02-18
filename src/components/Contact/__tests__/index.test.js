import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ContactForm from '..'

afterEach(cleanup)
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

describe('Contact component', () => {
    it('renders', () => {
        render(<ContactForm     
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
            />)
    })
    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm 
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
            />)
        expect(asFragment()).toMatchSnapshot();
    })
})

describe('h1 tags', () => {
    it('h1 reads as Contact Me', () => {
        const { getByTestId } = render(<ContactForm 
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
            />)
        expect(getByTestId('contact')).toHaveTextContent('Contact me')
    })
})

describe('submit button', () => {
    it('button is labled submit', () => {
        const { getByTestId } = render(<ContactForm 
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
            />)
        expect(getByTestId('submitBtn')).toHaveTextContent('Submit')
    })
})

describe('h1 tags', () => {
    it('h1 reads as Contact Me', () => {
        const { getByTestId } = render(<ContactForm 
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
            />)
        expect(getByTestId('contact')).toHaveTextContent('Contact me')
    })
})