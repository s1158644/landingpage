import { IContactData } from './types';

export const sendContactEmail = async (data: IContactData) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
