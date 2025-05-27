let checkInterval = setInterval(() => {
  const element = document.getElementById("thosijulio-timer");
  const buttonPlay = document.getElementById("button-play");
  const buttonClose = document.getElementById("thosijulio-close");

  if (element !== null && buttonClose !== null && buttonPlay !== null) {
    clearInterval(checkInterval); // Para de verificar

    function timer() {
      try {
        function updateTimer() {
          const now = new Date();
          const endOfDay = new Date();
          endOfDay.setHours(23, 59, 59, 999);

          const diff = endOfDay - now;

          if (diff <= 0) {
            element.innerHTML = "O tempo acabou.";
            clearInterval(interval);
            return;
          }

          const hours = Math.floor(diff / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diff % (1000 * 60)) / 1000);

          element.innerHTML =
            `${hours.toString().padStart(2, "0")}h` +
            `${minutes.toString().padStart(2, "0")}m` +
            `${seconds.toString().padStart(2, "0")}s`;
        }

        updateTimer(); // atualiza imediatamente ao carregar
        const interval = setInterval(updateTimer, 1000);
      } catch (error) {}
    }

    timer();
  }
}, 500);
