import { render, screen } from '@testing-library/react';
import ListItem from './list-item';

describe('ListItem Component', () => {
  it('should render the list item with the correct image and text', () => {
    const props = {
      image: 'https://img.icons8.com/?size=50&id=12402&format=png',
      text: 'Sample text',
    };

    render(< ListItem  {...props}/>)

    const listItemElement = screen.getByText('Sample text');
    expect(listItemElement).toBeInTheDocument();
    const imageElement = screen.getByAltText('check icon');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', props.image);
  });
});
