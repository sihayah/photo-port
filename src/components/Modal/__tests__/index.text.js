import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const mockToggleModal = jest.fn();
const currentPhoto = {
    name: 'Pug smile',
    category: 'portraits',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
  };

afterEach(cleanup);

describe('it renders', () => {
    it('renders', () => {
        render(<Modal 
            currentPhoto = {currentPhoto} 
            />);
    })
    it('Modal matches snapshot', () => {
        const { asFragment } = render(
            <Modal 
            currentPhoto = {currentPhoto} 
            /> 
        )
        expect(asFragment).toMatchSnapshot();
    })
})

describe('Click Event', () => {
    it('call onClose handler', () => {
        const { getByText } = render(<Modal 
            onClose={mockToggleModal}
            currentPhoto = {currentPhoto} 
            />)
        fireEvent.click(getByText('Close this modal'));
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    })
})