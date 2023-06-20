import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../App';

describe('App', () => {
  it('renders the heading and image list', () => {
    const {getByText} = render(<App />);
    const headingElement = getByText('Images');
    expect(headingElement).toBeTruthy();

    // Assuming you have two image URLs in the list
    const imageElements = getByText('ImageItem');
    expect(imageElements.length).toBe(2);
  });
});
