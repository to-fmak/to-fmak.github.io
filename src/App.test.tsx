import { act, render, screen } from '@testing-library/react';
import i18n from './i18n';
import App from './App';

beforeEach(async () => {
  await i18n.changeLanguage('en');
});

test('renders the home page', () => {
  render(<App />);
  expect(screen.getByText('Wenzhang')).toBeInTheDocument();
  expect(screen.getByText('Software Engineer')).toBeInTheDocument();
});

test('switches to Chinese and remembers the choice', async () => {
  render(<App />);
  await act(async () => {
    await i18n.changeLanguage('zh');
  });
  expect(screen.getByText('软件工程师')).toBeInTheDocument();
  expect(localStorage.getItem('i18nextLng')).toBe('zh');
});
