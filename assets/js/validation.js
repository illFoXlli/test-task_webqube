document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formEl");

  // Функция для отображения текста ошибки
  const showError = (inputId, errorMessage) => {
    const errorElement = document.getElementById(`${inputId}-error`);
    errorElement.textContent = errorMessage;
  };

  // Функция для скрытия текста ошибки
  const hideError = (inputId) => {
    const errorElement = document.getElementById(`${inputId}-error`);
    errorElement.textContent = ""; // Clear the error message
  };

  // Функция для проверки валидации при вводе
  const validateInput = (input, validationFunction, errorMessage) => {
    if (!validationFunction(input.value.trim())) {
      showError(input.getAttribute("id"), errorMessage);
    } else {
      hideError(input.getAttribute("id"));
    }
  };

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Проверка имени
    const nameInput = document.getElementById("name");
    validateInput(
      nameInput,
      (value) => /\d/.test(value),
      "Por favor, ingrese su nombre."
    );

    // Проверка электронной почты
    const emailInput = document.getElementById("email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    validateInput(
      emailInput,
      (value) => emailRegex.test(value),
      "Por favor introduzca su correo electrónico."
    );

    // Проверка темы
    const subjectInput = document.getElementById("subject");
    validateInput(
      subjectInput,
      (value) => value !== "",
      "Por favor, ingrese el asunto."
    );

    // Проверка сообщения
    const messageInput = document.getElementById("message");
    validateInput(
      messageInput,
      (value) => value !== "",
      "Por favor, ingrese su mensaje."
    );

    // Если все проверки прошли, можно отправить форму
    // Здесь вы можете добавить код для отправки формы на сервер или выполнения других действий
    if (
      nameInput.value.trim() !== "" &&
      emailRegex.test(emailInput.value.trim()) &&
      subjectInput.value.trim() !== "" &&
      messageInput.value.trim() !== ""
    ) {
      openModal();
    }
  });

  function openModal() {
    document.getElementById("myModal").style.display = "block";
  }

  // Функция для закрытия модального окна
  //   const closeBtn = document.getElementsByClassName("close-btn");
  let closeBtn = document.querySelector(".close-btn");
  closeBtn.addEventListener("click", () => {
    closeModal();
  });

  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }

  // Добавление обработчиков событий input для каждого поля ввода
  const inputs = form.querySelectorAll("input, textarea");
  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      // Выполняем валидацию при вводе символа
      if (input.getAttribute("id") === "name") {
        validateInput(
          input,
          (value) => /\d/.test(value),
          "Por favor, ingrese su nombre."
        );
      } else if (input.getAttribute("id") === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        validateInput(
          input,
          (value) => emailRegex.test(value),
          "Por favor introduzca su correo electrónico."
        );
      } else if (input.getAttribute("id") === "subject") {
        validateInput(
          input,
          (value) => value !== "",
          "Por favor, ingrese el asunto."
        );
      } else if (input.getAttribute("id") === "message") {
        validateInput(
          input,
          (value) => value !== "",
          "Por favor, ingrese su mensaje."
        );
      }
    });
  });
});
