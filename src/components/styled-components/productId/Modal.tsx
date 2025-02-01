import React, { useState } from "react";
import StyledModal from "./Modal.style";

/**
 * Props for the Modal component.
 * @interface ModalProps
 * @property {boolean} isOpen - Determines whether the modal is visible or not.
 * @property {() => void} onClose - A function to close the modal.
 * @property {(data: { dateFrom: string; dateTo: string; guests: number }) => void} onSubmit - A function to handle the submission of the form data, which includes the selected dates and number of guests.
 * @property {number} maxGuests - The maximum number of guests allowed for booking.
 */
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { dateFrom: string; dateTo: string; guests: number }) => void;
  maxGuests: number;
}

/**
 * Modal component.
 * Displays a booking form within a modal that allows users to select booking dates and the number of guests. 
 * The modal is conditionally rendered based on the `isOpen` prop and can be closed using the `onClose` function.
 * 
 * @component
 * @param {ModalProps} props - The props for this component, including modal visibility, close function, submit function, and maximum guests.
 * @returns {JSX.Element} The rendered modal component containing the booking form.
 */
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit, maxGuests }) => {
  /**
   * State variable for form data.
   * @type {Object}
   * @property {string} dateFrom - The starting date of the booking.
   * @property {string} dateTo - The ending date of the booking.
   * @property {number} guests - The number of guests for the booking (limited by `maxGuests`).
   */
  const [formData, setFormData] = useState<{ dateFrom: string; dateTo: string; guests: number }>({
    dateFrom: '',
    dateTo: '',
    guests: 1
  });

  /**
   * Handles form input change events.
   * Updates the state with the input values. If the `guests` field is updated, it ensures the value is within the allowed range of 1 to `maxGuests`.
   * 
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event for the input fields.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === 'guests' ? Math.min(Number(value), maxGuests) : value,  
    }));
  };

  /**
   * Handles the form submission.
   * Prevents the default form submission behavior, calls the `onSubmit` function with the current form data, and then closes the modal.
   * 
   * @param {React.FormEvent} e - The form submission event.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();  
  };

  return (
    <StyledModal $isOpen={isOpen}>
      <div className="modalContent">
        <button className="closeButton" onClick={onClose}>X</button>
        <h2>Booking Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="dateFrom">From</label>
            <input
              type="date"
              name="dateFrom"
              id="dateFrom"
              value={formData.dateFrom}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="dateTo">To</label>
            <input
              type="date"
              name="dateTo"
              id="dateTo"
              value={formData.dateTo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="guests">Guests</label>
            <input
              type="number"
              name="guests"
              id="guests"
              min="1"
              max={maxGuests}  
              value={formData.guests}
              onChange={handleChange}
              required
            />
            <p>Max guests: {maxGuests}</p>
          </div>
          <button type="submit" id="bookNow">Submit</button>
        </form>
      </div>
    </StyledModal>
  );
};

export default Modal;
