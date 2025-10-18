function showSection(id) {
  // پنهان کردن همه‌ی بخش‌ها
  document.querySelectorAll('main section').forEach(sec => sec.classList.remove('active'));

  // نمایش بخشی که کاربر انتخاب کرده
  document.getElementById(id).classList.add('active');

  // به‌روزرسانی دکمه‌های منو
  document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
}
