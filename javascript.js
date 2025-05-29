// Укажи дату свадьбы (формат: 'ГГГГ-ММ-ДД')
const weddingDate = new Date('2024-09-15T00:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = weddingDate - now;

  // Рассчёт дней, часов, минут, секунд
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Вставка значений в HTML
  document.getElementById('days').textContent = days.toString().padStart(2, '0');
  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

  // Если дата наступила
  if (diff < 0) {
    clearInterval(timer);
    document.getElementById('countdown').innerHTML = '<h2>🎉 Ура! Сегодня свадьба!</h2>';
  }
}

// Обновляем таймер каждую секунду
const timer = setInterval(updateCountdown, 1000);
updateCountdown(); // Запуск сразу