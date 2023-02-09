<table>
<tr>
<td>
<a href= "https://ael.com.br/"><img src="https://www.ael.com.br/images/ael.png" alt="AEL Sistemas" border="0" width="70%"></a>
</td>
<td><a href= "https://www.inteli.edu.br/"><img src="https://www.inteli.edu.br/wp-content/uploads/2021/08/20172028/marca_1-2.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0" width="30%"></a>
</td>
</tr>
</table>

<font size="+12"><center>
Planejador de trajetórias para voos em baixa altitude
</center></font>

**Conteúdo**

- [Autores](#autores)
- [Visão Geral do Projeto](#visão-geral-do-projeto)
  - [Empresa](#empresa)
    - [AEL Sistemas](#ael-sistemas)
  - [O Problema](#o-problema)
  - [Objetivos](#objetivos)
    - [Objetivos gerais](#objetivos-gerais)
    - [Objetivos específicos](#objetivos-específicos)
  - [Partes interessadas](#partes-interessadas)
- [Análise do Problema](#análise-do-problema)
  - [Análise da área de atuação](#análise-da-área-de-atuação)
  - [Análise do cenário: Matriz SWOT](#análise-do-cenário-matriz-swot)
  - [Proposta de Valor: Value Proposition Canvas](#proposta-de-valor-value-proposition-canvas)
  - [Matriz de Risco](#matriz-de-risco)
- [Requisitos do Sistema](#requisitos-do-sistema)
  - [Personas](#personas)
  - [Histórias dos usuários (user stories)](#histórias-dos-usuários-user-stories)
- [Arquitetura do Sistema](#arquitetura-do-sistema)
  - [Módulos do Sistema e Visão Geral (Big Picture)](#módulos-do-sistema-e-visão-geral-big-picture)
  - [Descrição dos Subsistemas](#descrição-dos-subsistemas)
    - [Requisitos de software](#requisitos-de-software)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [UX e UI Design](#ux-e-ui-design)
  - [Wireframe + Storyboard](#wireframe--storyboard)
  - [Design de Interface - Guia de Estilos](#design-de-interface---guia-de-estilos)
- [Projeto de Banco de Dados](#projeto-de-banco-de-dados)
  - [Modelo Conceitual](#modelo-conceitual)
  - [Modelo Lógico](#modelo-lógico)
- [Teste de Software](#teste-de-software)
  - [Testes Unitários](#testes-unitários)
  - [Teste de Usabilidade](#teste-de-usabilidade)
- [Análise de Dados](#análise-de-dados)
- [ANÁLISE DOS DADOS](#análise-dos-dados)
  - [Formato](#formato)
  - [Biblioteca utilizada](#biblioteca-utilizada)
  - [CARACTERÍSTICAS DOS ARQUIVOS](#características-dos-arquivos)
  - [CARACTERÍSTICAS DOS DADOS](#características-dos-dados)
    - [INPUTS](#inputs)
    - [OUTPUT](#output)
  - [Localização dos dados no github](#localização-dos-dados-no-github)
- [Manuais](#manuais)
  - [Manual de Implantação](#manual-de-implantação)
  - [Manual do Usuário](#manual-do-usuário)
  - [Manual do Administrador](#manual-do-administrador)
- [Referências](#referências)


# Autores

* Beny Frid
* Elias Biondo
* Luiz Carlos jr
* Pedro Munhoz
* Pedro Romão
* Rafael Cabral
* Thomas Barton
* Vinicius Santos


# Visão Geral do Projeto

## Empresa

### AEL Sistemas

A AEL Sistemas é uma empresa brasileira, situada em Porto Alegre que dedica-se ao projeto, desenvolvimento, fabricação, manutenção e suporte logístico de sistemas
eletrônicos militares e espaciais, para aplicações em plataformas aéreas, marítimas e terrestres. Capacitada para o fornecimento, projeto e desenvolvimento de 
aviônicos, sistemas terrestres e sistemas para segurança pública, a empresa também participa de diversos programas da indústria espacial.

## O Problema

*Descrição_do_problema*

## Objetivos

### Objetivos gerais

*Lista_de_objetivos_gerais*

### Objetivos específicos

*Lista_de_objetivos específicos*

## Partes interessadas

AEL Sistemas - Propôs o projeto<br>
Inteli - Universidade que aceitou e organiza o projeto<br>
Autores/Alunos - Realizam o projeto

# Análise do Problema

*Descrição_da_análise_do_problema*

## Análise da área de atuação

*Descrição_da_análise_da_área_de_atuação*

## Análise do cenário: Matriz SWOT

*Matriz_SWOT*

## Descrição da solução a ser desenvolvida:



### 3.1) qual é o problema a ser resolvido

Atualmente, a AEL Sistemas tem um algoritmo para missões de voo de baixa altitude, que considera vários aspectos de voo para encontrar um equilíbrio entre a probabilidade da aeronave colidir com o solo e a probabilidade da aeronave ser alvo de forças opositoras. Entretanto, a AEL Sistemas não possui um algoritmo que consiga achar a rota mais benéfica para a missão. A presença de vários obstáculos como: regiões muito povoadas, regiões com tropas inimigas, entre outras ameaças que dificultam a missão, fazem necessário o desenvolvimento de uma nova solução.

### 3.2) qual a solução proposta (visão de negócios)

A solução proposta é o desenvolvimento de uma aplicação em Java, com a qual o cliente pode interagir e planejar trajetórias para voos a baixa altitude. Esta aplicação utilizará dados de elevação para criar uma representação gráfica da área de voo e suas características geográficas, permitindo que o cliente encontre o caminho mais otimizado entre o ponto de partida e o destino. Além disso, a aplicação será desenvolvida de forma a seguir as restrições especificadas pelo cliente, garantindo assim a segurança e eficiência dos voos.

### 3.3) como a solução proposta deverá ser utilizada

Ao receber a informação de uma missão que necessite descrição, a equipe poderá colocar na interface o ponto de partida e o de chegada. O algoritmo irá procurar, de acordo com os dados topográficos entre a região dos pontos, a melhor trajetória para manter baixa altitude e evitar ser detectado. Uma vez calculado o caminho, a solução devolverá para o usuário um caminho tracejado no mapa ligando os dois pontos, e também um arquivo de texto com um vetor de coordenadas para poder ser utilizado em outro aplicativo.


### 3.4) quais os benefícios trazidos pela solução proposta

O projeto poderá otimizar os trajetos de missões críticas, aumentando a chance de sucesso da missão, e servir de base para projetos que englobam, além da plataforma embarcada, sistemas de planejamento de missões em solo. Com a implantação deste projeto, a empresa estará preparada para enfrentar os desafios futuros e aproveitar as oportunidades emergentes, conseguindo usar a nova solução em conjunto com um produto que eles já possuem e gerar ainda mais valor.


## Proposta de Valor: Value Proposition Canvas

*Value_Proposition_Canvas*


## Matriz de Risco

*Matriz_de_risco*


# Requisitos do Sistema

*Descrição_dos_requisitos*

## Personas

[persona-1](https://github.com/2023M5T1-Inteli/grupo2/blob/master/docs/img/persona1.png)

[persona-2](https://github.com/2023M5T1-Inteli/grupo2/blob/master/docs/img/persona2.png)


## Histórias dos usuários (user stories)

*Descrição_das_histórias_dos_usuários*


# Arquitetura do Sistema

## Módulos do Sistema e Visão Geral (Big Picture)

## Descrição dos Subsistemas

### Requisitos de software


## Tecnologias Utilizadas


# UX e UI Design

## Wireframe + Storyboard

## Design de Interface - Guia de Estilos


# Projeto de Banco de Dados

## Modelo Conceitual

## Modelo Lógico


# Teste de Software

## Testes Unitários

## Teste de Usabilidade


# Análise de Dados

## Formato
Os dados repassados pela AEL são dados geoespaciais, eles estão em formato DTED2(.dt2) e precisam de algumas bibliotecas específicas para serem manipulados e visualizados.
<br>
<br>
## Biblioteca utilizada
GDAL - biblioteca tradutora para formatos de dados geoespaciais vetoriais e raster que é lançada sob uma licença de código aberto estilo MIT pela Open Source Geospatial Foundation.
<br>
<br>

## Características dos arquivos
<br>

| REGIÃO | NOME | MB |
| ------ | ---- | --- |
| SP | W045_S23.dt2 | 24.8 mb |
| SP | W045_S24.dt2 | 24.8 mb |
| SP | W046_S23.dt2 | 24.8 mb |
| SP | W046_S24.dt2 | 24.8 mb |
| SP | W047_S23.dt2 | 24.8 mb |
| SP | W047_S24.dt2 | 24.8 mb |
| RJ | W043_S23.dt2 | 24.8 mb |
| RJ | W043_S24.dt2 | 24.8 mb |
| RJ | W044_S23.dt2 | 24.8 mb |
| RJ | W044_S24.dt2 | 24.8 mb |

<br>

## Características dos dados

Para trabalharmos com os dados em questão, precisamos adicionar dois inputs: Longitude e Latitude de um local. Obteremos como output dessa coordenada: Altura(esperada) dessa região.

Além disso, é possível inputar zonas de exclusão, ou seja, zonas que devem ser evitadas de acordo com quem for inputar os dados no sistema. Também é possível adicionar locais por onde deve passar a trajetória, obrigatoriamente, essas são chamadas de zonas essenciais.

Outros dados que também devem ser implementados, são o ponto de partida e o ponto de destino, para que seja feito o cálculo da melhor trajetória pelo algoritmo. 
<br>
<br>
## Inputs

| CARACTERÍSTICA | TIPO | EXEMPLO |
|----------------|------|---------|
| 1 - Longitude  | NUMBER(double) | -23.0696792891117 |
| 2 - Latitude   | NUMBER(double) | -43.5573428666663 |
| 3 - Zonas de exclusão | Coordenada | (-23.0696792891117, -43.5573428666663) |
| 4 - Zonas essenciais | Coordenada | (-23.55666444, -46.653497386) |
| 5 - Ponto de partida | Coordenada | (-23.588333, -46.658890) |
| 6 - Ponto de destino | Coordenada | (-23.5767, -46.6878) |
<br>

## Outputs

| CARACTERÍSTICA | TIPO | EXEMPLO |
|----------------|------|---------|
| Altura(esperada) | NUMBER(double) | 1928 (valor esperado) |
| Trajetória | Imagem | -------------------------| 
<br>

## Localização dos dados no github

|--> src/main<br>
  &emsp;| --> resources/dted <br>
  &emsp;&emsp;| -->T3_G3_V5_IoT_Document.pdf<br>
  &emsp;&emsp;&emsp;| Rio<br>
  &emsp;&emsp;&emsp;| SP<br>
<br>


# Manuais

## Manual de Implantação

## Manual do Usuário

## Manual do Administrador


# Referências
