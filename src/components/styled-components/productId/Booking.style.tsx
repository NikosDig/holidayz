import styled from 'styled-components';

const StyledBookings = styled.div`
  .bookingSection {
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 8px;
    margin-top: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .orangeContainer {
    padding: 10px;
    background-color: #ffcc00;
    border-radius: 8px;
    margin-top: 20px;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
    color: var(--color-light-orange);
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    margin: 1rem;
  }

  .react-calendar {
    width: 100%;
    border: none;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
  }

  .react-calendar__navigation {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .react-calendar__navigation button {
    min-width: 44px;
    background: var(--color-light-orange);
    border: none;
    font-size: 16px;
    cursor: pointer;
    color: var(--color-blue);
  }

  .react-calendar__navigation button.react-calendar__navigation__label {
    flex-grow: 1;
  }

  .react-calendar__navigation button.react-calendar__navigation__arrow {
    flex-grow: 0;
  }

  .react-calendar__month-view__weekdays {
    display: flex;
    justify-content: space-between;
    text-align: center;
    font-weight: bold;
    padding: 0.5em 0;
  }

  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: repeat(7, 1fr); 
    gap: 5px;
  }

  .react-calendar__tile {
    padding: 10px;
    font-size: 12px;
    text-align: center;
    max-width: 100%;
    height: auto;
    box-sizing: border-box;
    pointer-events: none;
  }

  .react-calendar__tile.booked {
    background: red;
    color: white;
  }

  .react-calendar__tile.free {
    background: green;
    color: white;
  }

  .react-calendar__tile--now {
    background: #ffcc00;
  }

  .react-calendar__tile--hasActive {
    background: #ffcc00;
  }

  @media (max-width: 550px) {
    .bookingSection {
      padding: 10px;
    }

    h2 {
      font-size: 20px;
      margin-bottom: 8px;
    }

    p {
      font-size: 14px;
      margin: 0.5rem;
    }

    .react-calendar__navigation button {
      font-size: 12px;
      min-width: 30px;
    }

    .react-calendar__month-view__weekdays {
      font-size: 12px;
    }

    .react-calendar__tile {
      padding: 5px;
      font-size: 12px;
    }
  }

  @media (max-width: 480px) {
    .bookingSection {
      padding: 5px;
    }

    h2 {
      font-size: 18px;
      margin-bottom: 6px;
    }

    p {
      font-size: 12px;
      margin: 0.25rem;
    }

    .react-calendar__navigation button {
      font-size: 10px;
      min-width: 25px;
    }

    .react-calendar__month-view__weekdays {
      font-size: 10px;
    }

    .react-calendar__tile {
      padding: 3px;
      font-size: 10px;
      max-width: 40px;
      height: 40px; 
    }
  }

  @media (max-width: 410px) {
    .bookingSection {
      padding: 5px;
    }

    h2 {
      font-size: 18px;
      margin-bottom: 6px;
    }

    p {
      font-size: 12px;
      margin: 0.25rem;
    }

    .react-calendar__navigation button {
      font-size: 10px;
      min-width: 25px;
    }

    .react-calendar__month-view__weekdays {
      font-size: 10px;
    }

    .react-calendar__tile {
      padding: 3px;
      max-width: 40px; 
      height: 40px; 
    }
  }
`;

export default StyledBookings;