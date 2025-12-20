# PA Turismo & Task Manager

Um ecossistema digital completo que combina um **Portal de Turismo** para a cidade de Paulo Afonso-BA com um **Gerenciador de Tarefas (Task Manager)** robusto, focado em performance e experiência do usuário.

## 🚀 Tecnologias Utilizadas

### **Frontend (Web App)**

* **Next.js 16 (App Router)** – Framework React de última geração com suporte a Turbopack.
* **TypeScript** – Garantia de tipagem e código escalável.
* **Tailwind CSS** – Estilização moderna, responsiva e baseada em utilitários.
* **Lucide React** – Conjunto de ícones leves e modernos.
* **Next Font** – Otimização de fontes locais (BBH Bartle) e Google Fonts para melhor performance (SEO).

### **Backend (API)**

* **Node.js & Express** – API REST segura e escalável.
* **TypeScript** – Melhor organização e manutenção do lado do servidor.
* **SQLite** – Banco de dados relacional leve para persistência de dados ágil.
* **JWT & Bcrypt** – Autenticação via tokens e criptografia de senhas.

---

## 🎨 Design e Identidade Visual

O projeto foi personalizado para refletir a identidade de Paulo Afonso:
* **Tipografia:** Uso da fonte **BBH Bartle** em títulos para um aspecto geométrico e moderno.
* **Componentização:** Desenvolvimento de componentes modulares como `PACardHome`, `PAHeader` e `PAMain`.
* **UX Turística:** Interface rica em imagens com efeitos de *overlay* e *zoom hover* nos cards de destinos.

---

## 📂 Estrutura do Projeto

### **Frontend**

```bash
/frontend
  ├── src
  │   ├── app
  │   │   ├── fonts/          # Fontes personalizadas (.woff2)
  │   │   ├── types/          # Definições de interfaces (cardProps, etc)
  │   │   ├── components/     # Componentes de UI (Header, Card, Main)
  │   │   ├── layout.tsx      # Configuração de Layout e Fontes globais
  │   │   └── page.tsx        # Landing Page do Portal de Turismo
  ├── public/image            # Assets e fotografias de Paulo Afonso
  ├── tailwind.config.ts      # Extensão de temas e variáveis de fonte
  └── eslint.config.mjs       # Configuração de regras do TypeScript/Next.js

  
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/e8c66ec7-efee-4d17-a547-ecf0bdaac2b8" />
