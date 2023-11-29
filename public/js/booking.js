const bookingForm = document.querySelector('.booking-form');
const paymentBtn = document.querySelector('.payment-btn');

bookingForm?.addEventListener('submit', async (e) => {
  try {
    e.preventDefault();
    const { id } = e.target.dataset;
    const checkInDate = e.target.checkInDate.value;
    const checkOutDate = e.target.checkOutDate.value;

    if (new Date(checkInDate) >= new Date(checkOutDate)) {
      const wrongDates = document.querySelector('.error-feedback');
      wrongDates.style.display = 'block';
      setTimeout(() => {
        wrongDates.style.display = 'none';
      }, 5000);
    } else {
      const formData = {
        checkInDate,
        checkOutDate,
      };

      const response = await fetch(`/booking/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        const data = await response.json();
        const bookingId = data.id;
        bookingForm.children[0].children[2].children[0].style.display = 'none';
        bookingForm.children[0].children[2].children[1].style.display = 'block';
        bookingForm.children[0].children[2].children[1].dataset.id = bookingId;
      }
    }
  } catch (error) {
    console.error(error);
  }
});

paymentBtn?.addEventListener('click', async (e) => {
  try {
    const { id } = e.target.dataset;
    const quantity = 3;
    fetch(`/booking/pay/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: [
          { id: 1, quantity: 3 },
          { id: 2, quantity: 1 },
        ],
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((e) => {
        console.error(e.error);
      });
  } catch (error) {}
});
