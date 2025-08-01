# 📘 E-ducando

Repositório do projeto **E-ducando**, uma aplicação web educacional desenvolvida colaborativamente por Matheus Dalbone e Genison Leal. Este guia descreve o fluxo de trabalho com Git para garantir organização e eficiência no desenvolvimento.

---

## 🚀 Workflow Git Colaborativo

### 📁 Branches principais

- `main`: versão estável, pronta para produção.
- `develop` (opcional): versão de integração de funcionalidades.
- `feature/*`: novas funcionalidades.
- `bugfix/*`: correções de bugs.
- `hotfix/*`: correções urgentes direto no `main`.

---

### ✅ Como contribuir

#### 1. Clonar o repositório

```bash
git clone https://github.com/matheusdalbone/e-ducando.git
cd e-ducando
```

#### 2. Criar uma nova branch

```bash
git checkout -b feature/nome-da-feature
```

> Exemplo: `feature/login-usuario` ou `bugfix/validacao-email`

#### 3. Trabalhar e fazer commits

```bash
git add .
git commit -m "Implementa funcionalidade X com validação"
```

#### 4. Manter sua branch atualizada

```bash
git checkout main
git pull origin main
git checkout feature/nome-da-feature
git merge main
```

> Resolva os conflitos, se houver, e faça novo commit.

#### 5. Enviar sua branch para o remoto

```bash
git push origin feature/nome-da-feature
```

#### 6. Criar Pull Request (PR)

- Acesse: https://github.com/matheusdalbone/e-ducando
- Crie um PR da sua branch para `main` (ou `develop`, se aplicável)
- Peça revisão (ou combine com o time para revisar juntos)

#### 7. Finalizar (após o merge)

```bash
git branch -d feature/nome-da-feature
git push origin --delete feature/nome-da-feature
```

---

## 🧠 Boas práticas

- Commits pequenos, claros e frequentes.
- Sempre `pull` antes de iniciar novas tarefas.
- Combine mudanças estruturais com o time.
- Use nomes de branch e commits descritivos e padronizados.

---

## 👥 Colaboradores

- [@matheusdalbone](https://github.com/matheusdalbone)
- [@genisonleal](https://github.com/genisonleal)

---

📄 Última atualização: 31/07/2025
