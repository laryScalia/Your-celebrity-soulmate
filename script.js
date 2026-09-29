// ============================================================
// PERSONALIZE AQUI
// ============================================================

// Nome que aparece depois que ela clicar em OK:
const SEU_NOME = "Laryssa Scalia";

// Mensagem depois de encontrar:
const MENSAGEM = "Eu encontrei você. ❤️";

// ============================================================

const nomeDela = document.getElementById("nomeDela");
const btnOk = document.getElementById("btnOk");
const btnContinuar = document.getElementById("btnContinuar");
const coracao = document.getElementById("coracao");
const mensagemResultado = document.getElementById("mensagemResultado");
const historia = document.getElementById("historia");
const inicio = document.getElementById("inicio");

btnOk.addEventListener("click", encontrarAlmaGemea);

nomeDela.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    encontrarAlmaGemea();
  }
});

function encontrarAlmaGemea() {
  const nome = nomeDela.value.trim();

  if (!nome) {
    nomeDela.focus();
    nomeDela.placeholder = "Digite seu nome primeiro ❤️";
    return;
  }

  btnOk.disabled = true;
  nomeDela.disabled = true;

  coracao.classList.remove("girando");
  void coracao.offsetWidth;
  coracao.classList.add("girando");

  mensagemResultado.className = "";
  mensagemResultado.textContent = "Procurando sua alma gêmea...";

  setTimeout(() => {
    coracao.textContent = "♥";
    mensagemResultado.className = "nome-encontrado";
    mensagemResultado.innerHTML = `${SEU_NOME} ❤️<br><small>${MENSAGEM}</small>`;

    btnContinuar.disabled = false;
    btnOk.disabled = false;
  }, 1600);
}

btnContinuar.addEventListener("click", () => {
  inicio.style.display = "none";
  historia.classList.remove("escondido");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  ativarAnimacoes();
});

function ativarAnimacoes() {
  const memorias = document.querySelectorAll(".memoria");

  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visivel");
      }
    });
  }, {
    threshold: 0.15
  });

  memorias.forEach((memoria) => observer.observe(memoria));
}

// Para testar o site sem colocar todas as fotos,
// mostra um fundo bonito quando a imagem ainda não existe.
document.querySelectorAll(".foto img").forEach((img) => {
  img.addEventListener("error", () => {
    img.style.display = "none";
    img.parentElement.style.background =
      "linear-gradient(145deg, #eadde0, #f8e6e9)";
  });
});
