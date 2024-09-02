import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './components/LoginForm';

test('renders LoginForm component', () => {
  render(<LoginForm />);
  const emailInput = screen.getByPlaceholderText('Email');
  const passwordInput = screen.getByPlaceholderText('Password');
  const   
 submitButton = screen.getByRole('button',   
 { type: 'submit' });

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();   

});

test('validates email input', () => {
  render(<LoginForm />);
  const emailInput = screen.getByPlaceholderText('Email');
  const submitButton = screen.getByRole('button', { type: 'submit' });

  fireEvent.change(emailInput, { target: { value: 'invalid_email' } });
  fireEvent.click(submitButton);

  const errorMessage = screen.getByText('Invalid email address');
  expect(errorMessage).toBeInTheDocument();
});

// Add more test cases for password validation, form submission, etc.
