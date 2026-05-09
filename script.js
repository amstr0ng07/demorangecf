const form = document.querySelector('#applyForm');
const note = document.querySelector('#formNote');

const getCheckedValues = (formData, key) => {
  return formData.getAll(key).filter(Boolean);
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  note.classList.remove('success');

  if (!form.checkValidity()) {
    note.textContent = 'Bạn kiểm tra lại các ô bắt buộc trước khi gửi nha.';
    form.reportValidity();
    return;
  }

  const formData = new FormData(form);
  const application = {
    fullName: formData.get('fullName'),
    phone: formData.get('phone'),
    birthday: formData.get('birthday'),
    school: formData.get('school'),
    address: formData.get('address'),
    source: formData.get('source'),
    areas: getCheckedValues(formData, 'area'),
    distance: formData.get('distance'),
    mornings: getCheckedValues(formData, 'morning'),
    positions: getCheckedValues(formData, 'position'),
    experience: formData.get('experience'),
    hobbies: formData.get('hobbies'),
    vehicle: formData.get('vehicle'),
    scheduleChange: formData.get('scheduleChange'),
    startDate: formData.get('startDate'),
    commitment: formData.get('commitment'),
    questions: formData.get('questions'),
    zalo: formData.get('zalo'),
    contactMethod: formData.get('contactMethod'),
    submittedAt: new Date().toISOString(),
  };

  localStorage.setItem('rangeCoffeeApplication', JSON.stringify(application));
  note.textContent = 'Đã nhận thông tin. Range Coffee sẽ liên hệ bạn sớm.';
  note.classList.add('success');
  form.reset();
});
