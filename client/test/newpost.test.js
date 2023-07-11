import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NewPost from './NewPost';

describe('NewPost', () => {
  test('renders "Create Post" button', () => {
    render(<NewPost />);
    const createPostButton = screen.getByText('Create Post');
    expect(createPostButton).toBeInTheDocument();
  });

  test('opens the modal when "Create Post" button is clicked', () => {
    render(<NewPost />);
    const createPostButton = screen.getByText('Create Post');
    fireEvent.click(createPostButton);
    const modalTitle = screen.getByText('New Post');
    expect(modalTitle).toBeInTheDocument();
  });

  test('closes the modal when "Close" button is clicked', () => {
    render(<NewPost />);
    const createPostButton = screen.getByText('Create Post');
    fireEvent.click(createPostButton);
    const closeButton = screen.getByText('Close');
    fireEvent.click(closeButton);
    const modalTitle = screen.queryByText('New Post');
    expect(modalTitle).toBeNull();
  });

  test('submits the form when "Submit" button is clicked', () => {
    render(<NewPost />);
    const createPostButton = screen.getByText('Create Post');
    fireEvent.click(createPostButton);
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);

  });
});
