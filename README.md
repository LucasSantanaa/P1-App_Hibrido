# SaborExpress — Mock de app híbrido (Expo)

Mock de um app de delivery de comida, feito em **React Native + Expo**, como
trabalho da disciplina de Aplicativos Híbridos.

## Requisitos do trabalho atendidos

- [x] App escolhido e "mocado" (recriado visualmente) do zero em Expo.
- [x] 7 telas (mínimo pedido era 6):
  1. Onboarding (boas-vindas)
  2. Login
  3. Home (listagem + categorias)
  4. Detalhes do produto
  5. Carrinho
  6. Confirmação de pedido
  7. Perfil
- [x] Mais de 20 commits, cada um representando uma etapa do desenvolvimento
      (ver `git log --oneline`).
- [x] Projeto em um único repositório.

## Como rodar o projeto

Pré-requisitos: Node.js LTS instalado e o app **Expo Go** no celular
(ou um emulador Android/iOS configurado).

```bash
# 1. Instale as dependências
npm install

# 2. Alinhe as dependências com o SDK instalado
npx expo install --fix

# 3. Rode o projeto
npx expo start
```

Depois é só escanear o QR Code com o app **Expo Go** (Android) ou a câmera
(iOS), ou apertar `a` / `i` no terminal para abrir em um emulador.

> **Erro de versão incompatível no Expo Go?** O Expo Go instalado no celular
> precisa ser compatível com o SDK do projeto (`57`). Atualize o Expo Go ou
> use uma versão do projeto compatível com o aplicativo instalado. Para
> reinstalar as dependências, remova apenas `node_modules`, rode `npm install`
> e depois `npx expo install --fix`.

> **Erro `Cannot read properties of undefined (reading 'transformFile')`?**
> Confira se `babel-preset-expo` está instalado e se as dependências estão
> alinhadas com o SDK 57. Execute `npm install` e, em seguida,
> `npx expo install --fix`. O projeto já inclui o `metro.config.js` padrão
> exigido pelo Expo.

## Estrutura do projeto

```
app-hibrido-mock/
├── App.js                        # ponto de entrada do app
├── app.json                      # configurações do Expo (ícone, splash, etc.)
├── assets/                       # ícones e splash screen
└── src/
    ├── theme/colors.js           # paleta de cores do app
    ├── data/mockData.js          # dados fake de produtos/categorias
    ├── context/CartContext.js    # estado global do carrinho (Context API)
    ├── components/FoodCard.js    # card reutilizável de produto
    ├── screens/                  # todas as telas do app
    │   ├── OnboardingScreen.js
    │   ├── LoginScreen.js
    │   ├── HomeScreen.js
    │   ├── DetailsScreen.js
    │   ├── CartScreen.js
    │   ├── OrderConfirmationScreen.js
    │   └── ProfileScreen.js
    └── navigation/                # configuração de rotas
        ├── HomeStack.js
        ├── CartStack.js
        ├── MainTabs.js
        └── AppNavigator.js
```

##  Fluxo de navegação

```
Onboarding → Login → MainTabs (abas inferiores)
                        ├── HomeTab (Home → Details)
                        ├── CartTab (Cart → OrderConfirmation)
                        └── ProfileTab
```

## Enviando para o GitHub

```bash
git branch -M main
git push -u origin main
```


## Aluno

- Aluno: Lucas de Santana Pulcherio