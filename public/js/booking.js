const bookingForm = document.querySelector('.booking-form');
const paymentBtn = document.querySelector('.payment-btn');
const bookedPlacesContainer = document.querySelector(
  '.booked-places-container'
);
const placesContainer = document.querySelector('.places-container');

async function createCheckout(id) {
  fetch(`/booking/checkout/${id}`, {
    method: 'POST',
  })
    .then((res) => {
      if (res.ok) return res.json();
      return res.json().then((json) => Promise.reject(json));
    })
    .then(({ url }) => {
      window.location = url;
    })
    .catch((error) => {
      console.log(error.error);
    });
}

async function changeLikeBtn(id, method) {
  try {
    const response = await fetch(`/favourites/${id}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const resData = await response.json();
    if (resData.status === 200 && method === 'POST') {
      return `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
      </svg>
    `;
    }
    if (resData.status === 200 && method === 'DELETE') {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
    </svg>`;
    }
  } catch (error) {
    console.error(error);
  }
}

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
        const btnGroup = document.querySelector('.line-container');
        bookingForm.children[2].children[0].style.display = 'none';
        btnGroup.style.display = 'block';
        btnGroup.children[0].setAttribute('id', bookingId);
      }
    }
  } catch (error) {
    console.error(error);
  }
});

paymentBtn?.addEventListener('click', async (e) => {
  try {
    const { id } = e.target;
    createCheckout(id);
  } catch (error) {
    console.log(error);
  }
});

bookedPlacesContainer?.addEventListener('click', async (e) => {
  try {
    if (e.target.tagName === 'BUTTON') {
      if (e.target.classList.contains('cancel-btn')) {
        const { id } = e.target.dataset;
        const response = await fetch(`/booking/${id}`, {
          method: 'DELETE',
        });

        if (response.status === 200) {
          bookedPlacesContainer.removeChild(e.target.closest('.card'));
        }
      }

      if (e.target.classList.contains('booking-btn')) {
        const { id } = e.target.dataset;
        await createCheckout(id);
      }
    }
  } catch (error) {
    console.error(error);
  }
});

placesContainer?.addEventListener('click', async (e) => {
  if (e.target.tagName === 'BUTTON') {
    if (e.target.classList.contains('like-btn')) {
      if (e.target.children[0].classList.contains('bi-heart-fill')) {
        const { id } = e.target.dataset;
        e.target.children[0].innerHTML = await changeLikeBtn(id, 'DELETE');
      } else {
        const { id } = e.target.dataset;
        e.target.children[0].innerHTML = await changeLikeBtn(id, 'POST');
      }
    }
  }
});
