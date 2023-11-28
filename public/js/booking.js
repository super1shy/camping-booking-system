const bookingForm = document.querySelector('.booking-form');
const bookingBtn = document.querySelector('.booking-btn');

bookingForm.addEventListener('submit', async (e) => {
  try {
    e.preventDefault();
    const { id } = e.target.dataset;
    const checkInDate = e.target.checkInDate.value;
    const checkOutDate = e.target.checkOutDate.value;

    if (new Date(checkInDate) >= new Date(checkOutDate)) {
      console.log('Dates are wrong');
    } else {
      const formData = {
        checkInDate,
        checkOutDate,
      };

      const response = await fetch(`/places/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        const data = await response.json();
        const bookingId = data.id;

        bookingBtn.setAttribute('disabled', '');
        const paymentPeriod = setTimeout(async () => {
          const response = await fetch(`/reservation/${bookingId}`);
          const data = response.json();
          if (!data.status) {
            bookingBtn.removeAttribute('disabled', '');
          }
        }, 3000);
      }
    }
  } catch (error) {
    console.error(error);
  }
});
