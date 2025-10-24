// ===== Scroll suave para links internos =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== Máscaras para inputs na página de cadastro =====
const cpfInput = document.getElementById('cpf');
const telefoneInput = document.getElementById('telefone');
const cepInput = document.getElementById('cep');

if(cpfInput){
    cpfInput.addEventListener('input', e => {
        e.target.value = e.target.value
            .replace(/\D/g, "")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    });
}

if(telefoneInput){
    telefoneInput.addEventListener('input', e => {
        e.target.value = e.target.value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{5})(\d{4})$/, "$1-$2");
    });
}

if(cepInput){
    cepInput.addEventListener('input', e => {
        e.target.value = e.target.value
            .replace(/\D/g, "")
            .replace(/(\d{5})(\d{3})$/, "$1-$2");
    });
}

// ===== Validação e envio do formulário =====
const cadastroForm = document.getElementById('cadastroForm');

if(cadastroForm){
    cadastroForm.addEventListener('submit', function(e){
        e.preventDefault();
        if(cadastroForm.checkValidity()){
            alert('Cadastro enviado com sucesso! Nossa equipe entrará em contato.');
            cadastroForm.reset();
        } else {
            alert('Por favor, preencha todos os campos obrigatórios corretamente.');
        }
    });
}

// ===== Menu ativo automático =====
const currentPath = window.location.pathname.split("/").pop();
document.querySelectorAll('nav ul li a').forEach(link => {
    if(link.getAttribute('href') === currentPath){
        link.classList.add('active');
    }
});
