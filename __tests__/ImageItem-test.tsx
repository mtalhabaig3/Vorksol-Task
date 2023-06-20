import React from 'react';
import {render} from '@testing-library/react-native';
import ImageItem from '../components/ImageItem';

describe('ImageItem', () => {
  it('renders loading state', () => {
    const {getByText} = render(<ImageItem url="" />);
    const loadingTextElement = getByText('Please wait...');
    expect(loadingTextElement).toBeTruthy();
  });

  it('renders the image after loading', () => {
    const imageUrl = 'https://example.com/image.jpg';
    const {getByTestId} = render(<ImageItem url={imageUrl} />);
    const imageElement = getByTestId('image');
    expect(imageElement.props.source.uri).toBe(imageUrl);
  });
});
