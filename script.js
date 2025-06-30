document.getElementById("submitBtn").addEventListener("click", function () {
  const phone = document.getElementById("phone").value.trim();
  const agreement = document.getElementById("agreement").checked;

  if (!phone) {
    alert("Пожалуйста, введите номер телефона.");
    return;
  }

  if (!agreement) {
    alert("Необходимо принять условия соглашения.");
    return;
  }

  // Здесь можно отправить форму (например, через fetch/AJAX)
  alert("Заявка отправлена!");
});
