
import React, { useState } from "react";
import StyledModal from "./Modal.style";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { dateFrom: string; dateTo: string; guests: number }) => void;
  maxGuests: number;  // Pass the maxGuests value
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit, maxGuests }) => {
  const [formData, setFormData] = useState<{ dateFrom: string; dateTo: string; guests: number }>({
    dateFrom: '',
    dateTo: '',
    guests: 1
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === 'guests' ? Math.min(Number(value), maxGuests) : value,  
    }));
  };

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