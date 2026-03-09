**PROMPT MASTER — PROJETO RPG DE TEXTO PARA APRENDER JAVASCRIPT**

Quero desenvolver um **RPG de texto simples utilizando JavaScript**, com o objetivo principal de **praticar lógica de programação e conceitos fundamentais da linguagem**.

Este projeto será usado como **exercício prático para aprender e aplicar**:

* funções
* arrays
* objetos
* estruturas condicionais (`if / else`)
* `switch`
* loops (`while` e `do...while`)
* manipulação de lógica de jogo por turnos

O jogo será baseado em **combate por turnos** entre o jogador e inimigos gerados no jogo.

---

# Estrutura do jogo

O jogador deverá escolher **uma classe inicial**, cada classe terá **atributos próprios**.

## Classes do jogador

### Guerreiro

* Ataque: 20
* Vida: 200
* Magia: 0

Características:

* Especialista em **dano físico**
* Não possui dano mágico inicialmente
* Pode obter **dano mágico através de itens**

---

### Mago

* Ataque: 8
* Vida: 180
* Magia: 20

Características:

* Especialista em **dano mágico**
* Possui ataque físico baixo

---

# Sistema de combate

O combate será **baseado em turnos**.

Fluxo do combate:

1. Jogador ataca
2. O inimigo recebe dano dependendo das regras de resistência
3. Se o inimigo sobreviver, ele contra-ataca
4. O turno termina
5. O combate continua até alguém morrer

---

# Sistema de inimigos (mobs)

Os inimigos possuem **tipos diferentes**, e cada tipo reage de maneira diferente ao tipo de dano recebido.

## Anti-Mago

* Vida: 80
* Ataque: 12
* Magia: 0

Características:

* **Imune a dano mágico**
* Só recebe **dano físico**

---

## Slime Físico

* Vida: 60
* Ataque: 12
* Magia: 0

Características:

* Recebe **dano físico e mágico normalmente**

---

## Espírito

* Vida: 50
* Ataque: 0
* Magia: 12

Características:

* Criatura mágica
* Só recebe **dano mágico**

---

# Regras de dano

O sistema de dano seguirá esta lógica:

| Tipo de inimigo | Recebe dano físico | Recebe dano mágico |
| --------------- | ------------------ | ------------------ |
| Slime físico    | Sim                | Sim                |
| Espírito        | Não                | Sim                |
| Anti-mago       | Sim                | Não                |

Isso obrigará o jogador a **pensar estrategicamente dependendo da classe escolhida**.

---

# Sistema de itens (planejado)

O jogo também terá **itens que modificam atributos do personagem**.

Exemplo:

Item especial dropado por monstros:

Cajado mágico:

* +8 de dano mágico

Esse item permitirá que:

* O **Guerreiro ganhe dano mágico**
* O jogador tenha **mais opções estratégicas**

---

# Sistema de drop

Alguns inimigos poderão **dropar itens após serem derrotados**.

Esse sistema será usado para aprender:

* probabilidade
* geração aleatória
* manipulação de arrays

---

# Estrutura técnica do projeto

O objetivo do projeto é aplicar os seguintes conceitos de JavaScript:

## Objetos

Representar entidades do jogo:

* jogador
* inimigos
* itens

Exemplo de estrutura:

* atributos
* vida
* ataque
* magia
* tipo

---

## Arrays

Usados para armazenar:

* lista de inimigos possíveis
* inventário
* itens dropados
* histórico de batalha

---

## Funções

Funções serão usadas para organizar a lógica do jogo:

Exemplos:

* criar jogador
* gerar inimigo
* executar ataque
* calcular dano
* verificar morte
* registrar mensagens de combate

---

## Condicionais

Uso de:

* `if`
* `else`
* `switch`

Para verificar:

* tipo de inimigo
* tipo de dano
* escolha de classe
* eventos de combate

---

## Loops

Uso de:

* `while`
* `do...while`

Para controlar:

* combate contínuo
* geração de inimigos
* modo sobrevivência

---

# Estrutura lógica do jogo

Fluxo básico do jogo:

1. Jogador escolhe classe
2. Um inimigo aleatório aparece
3. O combate começa
4. O jogador ataca
5. O inimigo contra-ataca
6. O sistema verifica vida de ambos
7. Se o inimigo morrer, pode dropar item
8. Um novo inimigo aparece
9. O ciclo continua

---

# Objetivo educacional do projeto

Este projeto tem como objetivo ensinar:

* lógica de programação
* estruturação de código
* organização de funções
* manipulação de objetos e arrays
* controle de fluxo
* criação de sistemas baseados em regras
* construção de um sistema de combate simples

Além disso, servirá como base para evoluir posteriormente com novos sistemas, como:

* inventário
* experiência e níveis
* chefes (boss)
* habilidades
* sistema de equipamentos
* sistema de progressão

---

Este projeto será desenvolvido **passo a passo**, começando com a lógica básica e evoluindo para sistemas mais complexos, permitindo aprender JavaScript de forma prática através da construção de um jogo.
