document.getElementsByName('checkInDate').value = new Date()

const bookingForm = document.querySelector('.booking-form');

bookingForm.addEventListener('submit', async (e) => {
  try {
    e.preventDefault();
    const { id } = e.target.dataset;
    const checkIn = e.target.checkInDate.value;
    const checkOut = e.target.checkOutDate.value;

    if (new Date(checkIn) > new Date(checkOut)) {
      //   display div with message to check dates
    } else {
      const formData = {
        checkIn,
        checkOut,
      };

      const response = await fetch(`/places/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        //change btn to disabled and show new one for payment
      }
    }
  } catch (error) {
    console.error(error);
  }
});
