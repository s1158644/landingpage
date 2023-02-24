import { Input, Modal, Spacer } from '@nextui-org/react';
import React, { useState } from 'react';

export interface IContactModal {}

const ContactModal: React.FC<IContactModal> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //validate email
    const isValid = validateEmail(email);
    if (!isValid) {
      return;
    }
    //send email
    console.log(name, email, company);
  };

  //validate email
  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const helper = React.useMemo(() => {
    if (!email.length) {
      return {
        text: '',
        color: 'primary',
      };
    } else {
      const isValid = validateEmail(email);
      return {
        text: isValid ? 'Email is valid' : 'Enter is a valid email',
        color: isValid ? 'success' : 'error',
      };
    }
  }, [email]);

  return (
    <>
      <button
        onClick={handleOpen}
        className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
      >
        <span className="relative text-base font-semibold text-white">
          Contact Us
        </span>
      </button>
      <Modal
        closeButton
        blur
        open={isOpen}
        onClose={handleClose}
        className="w-full max-w-md dark:bg-gray-800"
      >
        <Modal.Header>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-white">
            Contact Us
          </h2>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <Spacer y={0.5} />
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              labelPlaceholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-label="Name"
              status="success"
              required={true}
            ></Input>
            <Spacer y={0.5} />
            <Input
              clearable
              bordered
              fullWidth
              //color="primary"
              size="lg"
              labelPlaceholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email"
              status="success"
              required={true}
              color={helper.color as any}
              helperColor={helper.color as any}
              helperText={helper.text}
            ></Input>
            <Spacer y={0.8} />
            <Input
              clearable
              bordered
              fullWidth
              color="primary"
              size="lg"
              labelPlaceholder="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              aria-label="Company"
              status="success"
            ></Input>
          </Modal.Body>
          <Modal.Footer>
            <div className="flex flex-wrap justify-center gap-y-4 gap-x-6">
              <button
                type="submit"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white">
                  Send
                </span>
              </button>
              <button
                onClick={handleClose}
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
              >
                <span className="relative text-base font-semibold text-primary dark:text-white">
                  Cancel
                </span>
              </button>
            </div>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default ContactModal;
