// URL da API simulada (JSON Server)
const apiUrl = "https://trab1-restapi-dqn13lmora1s-backend.onrender.com";

// Referências a elementos do DOM
const form = document.getElementById("aluno-form");
const alunosTbody = document.getElementById("alunos-tbody");
const cursoSelect = document.getElementById("curso");

// Carrega a lista de cursos e preenche o <select>
async function carregarCursos() {
const res = await fetch(`${apiUrl}/cursos`);
  const cursos = await res.json();
  cursoSelect.innerHTML = `<option value="" disabled selected hidden>Selecione um curso</option>`; // Instrução apenas visual

  cursos.forEach(c => {
    const option = document.createElement("option");
    option.value = c.id;
    option.textContent = c.nomeDoCurso;
    cursoSelect.appendChild(option);
  });
}

// Vai buscar todos os alunos e cursos e renderiza a tabela
async function fetchAlunos() {
  const res = await fetch(`${apiUrl}/alunos`);
  const alunos = await res.json();
  renderTabela(alunos);
}

// Mostra a tabela de alunos no HTML
function renderTabela(alunos) {
  alunosTbody.innerHTML = "";

  for (let aluno of alunos) {
    const row = `
      <tr>
        <td>${aluno.nome}</td>
        <td>${aluno.apelido}</td>
        <td>${aluno.curso || "N/A"}</td>
        <td>${aluno.anoCurricular}</td>
        <td>${aluno.idade}</td>
        <td>
          <button onclick="editarAluno(${JSON.stringify(aluno).replace(/"/g, '&quot;')})">✏️</button>
          <button onclick="apagarAluno('${aluno.id}')">🗑️</button>
        </td>
      </tr>
    `;
    alunosTbody.innerHTML += row;
  }
}

// Submissão do formulário (adicionar ou editar aluno)
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Recolha dos dados do formulário
  const id = document.getElementById("aluno-id").value;
  const nome = document.getElementById("nome").value.trim();
  const apelido = document.getElementById("apelido").value.trim();
  const idade = parseInt(document.getElementById("idade").value);
  const curso = parseInt(document.getElementById("curso").value);
  const anoCurricular = parseInt(document.getElementById("anoCurricular").value);

  // Validação de idade e curso
  if (idade < 18 || idade > 24 || curso < 1 || curso > 3) {
    alert("Idade ou curso inválido!");
    return;
  }

  const novoAluno = { nome, apelido, idade, curso, anoCurricular };

  // Atualiza aluno (PUT) ou adiciona novo (POST)
  if (id) {
    await fetch(`${apiUrl}/alunos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoAluno),
    });
  } else {
    // Gerar ID único
    const alunos = await fetch(`${apiUrl}/alunos`).then(r => r.json());
    const novoId = (Math.max(...alunos.map(a => parseInt(a.id))) + 1).toString();

    await fetch(`${apiUrl}/alunos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: novoId, ...novoAluno }),
    });
  }

  // Reset do formulário e recarregar tabela
  form.reset();
  form.style.display = "none";
  fetchAlunos();
});

// Preenche o formulário com os dados do aluno para edição
window.editarAluno = (aluno) => {
  form.style.display = "flex";
  document.getElementById("aluno-id").value = aluno.id;
  document.getElementById("nome").value = aluno.nome;
  document.getElementById("apelido").value = aluno.apelido;
  document.getElementById("idade").value = aluno.idade;
  document.getElementById("curso").value = aluno.curso;
  document.getElementById("anoCurricular").value = aluno.anoCurricular;
};

// Apaga um aluno
window.apagarAluno = async (id) => {
  if (confirm("Tens a certeza que queres apagar este aluno?")) {
    await fetch(`${apiUrl}/alunos/${id}`, { method: "DELETE" });
    fetchAlunos();
  }
};

// Quando clica em "Novo Aluno", limpa e mostra o formulário
document.getElementById("novo-btn").addEventListener("click", () => {
  // Se o formulário estiver visível, esconder e limpar
  if (form.style.display === "flex") {
    form.style.display = "none";
    form.reset();
    document.getElementById("aluno-id").value = "";
  } else {
    // Se estiver escondido, mostrar e preparar para novo aluno
    form.style.display = "flex";
    form.reset();
    document.getElementById("aluno-id").value = "";
  }
});

// Pesquisa por nome, apelido, curso ou idade
document.getElementById("procurar-btn").addEventListener("click", async () => {
  const termo = document.getElementById("pesquisa").value.toLowerCase();
  const alunos = await fetch(`${apiUrl}/alunos`).then(r => r.json());
  const cursos = await fetch(`${apiUrl}/cursos`).then(r => r.json());

  const filtrados = alunos.filter(a => {
    const cursoNome = a.curso?.toLowerCase() || "";
    return (
      a.nome.toLowerCase().includes(termo) ||
      a.apelido.toLowerCase().includes(termo) ||
      cursoNome.includes(termo) ||
      a.idade.toString().includes(termo)
    );
  });

  renderTabela(filtrados, cursos);
});

// Inicialização: carregar cursos e alunos
carregarCursos();
fetchAlunos();

