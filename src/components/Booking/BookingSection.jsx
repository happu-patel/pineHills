import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './booking.css';
import arrow_down from '../../assets/image/down_arrow.svg';

const BookingSection = () => {
    const [startDate, setStartDate] = useState(null);
    const datePickerRef = useRef(null);

    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);

    const incrementAdults = () => setAdults(adults + 1);
    const decrementAdults = () => adults > 0 && setAdults(adults - 1);

    const incrementChildren = () => setChildren(children + 1);
    const decrementChildren = () => children > 0 && setChildren(children - 1);

    const openCalendar = () => {
        if (datePickerRef.current) {
            datePickerRef.current.setFocus();
        }
    };

    return (
        <div className="booking-container">
            <div className="booking-row">
                {/* Date Picker */}
                <div className="booking-item">
                    <label>CHECK-IN/CHECK-OUT</label>
                    <div className="date-input-wrapper" onClick={openCalendar}>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            placeholderText="Select Date"
                            className="select-date"
                            ref={datePickerRef}
                        />
                        <img className="dropdown-icon" src={arrow_down} alt="dropdown icon" />
                    </div>
                </div>

                {/* Adults Counter */}
                <div className="booking-item">
                    <label>ADULTS</label>
                    <div className="counter">
                        <button onClick={decrementAdults}>-</button>
                        <span>{String(adults).padStart(2, '0')}</span>
                        <button onClick={incrementAdults}>+</button>
                    </div>
                </div>

                {/* Children Counter */}
                <div className="booking-item">
                    <label>CHILDREN</label>
                    <div className="counter">
                        <button onClick={decrementChildren}>-</button>
                        <span>{String(children).padStart(2, '0')}</span>
                        <button onClick={incrementChildren}>+</button>
                    </div>
                </div>

                {/* Book Now Button */}
                <div className="booking-item">
                    <button className="book-now-btn">BOOK NOW</button>
                </div>
            </div>
        </div>
    );
};

export default BookingSection;
