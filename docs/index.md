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
  - [Análise de mercado](#análise-de-mercado)
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
  - [Formato](#formato)
  - [Biblioteca utilizada](#biblioteca-utilizada)
  - [CARACTERÍSTICAS DOS ARQUIVOS](#características-dos-arquivos)
  - [CARACTERÍSTICAS DOS DADOS](#características-dos-dados)
    - [INPUTS](#inputs)
    - [OUTPUT](#output)
  - [Localização dos dados no github](#localização-dos-dados-no-github)
- [Limitações](#limitações)
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
## Análise de mercado
###Contexto da indústria
O mercado de tecnologia e defesa aeroespacial brasileiro possui baixa diversidade em relação aos players, sendo 11 empresas no total. Isso se deve ao mercado ser extremamente estruturado e conservador, afinal, soluções nessa área afetam diretamente a segurança nacional. Contudo, esse é um mercado que, historicamente, recebe grande atenção do governo e, segundo a Associação de Indústrias Aeroespaciais do Brasil, houve um programa de incentivo a projetos da área no valor de 120 milhões de reais, além dos investimentos previstos no orçamento público.
O orçamento de Defesa Nacional é revisto anualmente e projeta o mercado futuro das empresas que atuam nessa área, pois, com ele, podemos ter noção do valor total disponível do principal cliente desses produtos, o próprio governo.
Figura 1 – Orçamento total da Defesa Nacional

Fonte: Portal da Transparência
Com base no exposto, existem alguns players que são principais nesse mercado, então, em seguida, analisaremos mais profundamente qual é a atuação de cada um deles e como isso afeta a Ael Sistemas.
Primeiramente, a Embraer, que é uma das principais produtoras de aviões do mundo, tem uma divisão de Defesa e Segurança, especializada em soluções para esse mercado, e oferece uma ampla gama de produtos, dentre eles: aviões militares e sistemas de defesa aérea. A empresa registrou, em 2022, uma receita líquida de R$22,6 bilhões e isso é consequência da sua dominância nacional, afinal, ela detém 20% do market share. Além da atuação nacional, ela também exporta muita tecnologia e hoje a Embraer fornece produtos e serviços a 40 países ao redor do mundo.
Logo após a análise desta empresa, precisamos recorrer a análise da Atech, que também é uma competidora direta da Ael. A empresa, segundo o seu demonstrativo financeiro, obteve, no ano de 2020, a receita líquida de R$234,6 milhões e, apesar desse valor ser bem menos expressivo que o da Embraer, a empresa detém 10% do market share brasileiro. Assim como a empresa anterior, ela também tem atuação internacional e fornece serviços em países como a França, Portugal e Espanha, mas sua principal atuação se concentra no Brasil e em outros países da américa latina.
Outra empresa muito relevante no setor é a Avibras, fundada em 1971, que atua hoje de forma nacional e internacional, possuindo escritórios em São Paulo, Distrito Federal e Arábia Saudita. A empresa tem dificuldades financeiras agravadas pela pandemia, mas vem se recuperando e no ano de 2021 a sua receita líquida foi de R$220 milhões.
Por fim, devemos analisar a Ael Sistemas. Ela é uma empresa de capital privado que possui um modelo de negócio B&G (business to government) e, infelizmente, ela não divulga, de forma pública, o seu demonstrativo financeiro. Contudo, com uma pesquisa detalhada ao site do portal da transparência, podemos verificar que, no ano de 2022, a empresa formalizou 5 contratos no âmbito da administração pública e isso contempla todas as esferas de defesa pública: exército, aeronáutica e marinha.
Figura 2 – Montante do valor formalizado de contratos públicos

Fonte: Portal da Transparência
###Análise 5 Forças de Porter:
####Poder de barganha dos clientes:
O cenário específico da Ael está ligado diretamente aos órgãos públicos de defesa, pois esses constituem a maior parte da sua receita relatada no Brasil, segundo dados apresentados pela própria instituição. Sendo assim, existe, basicamente, um único cliente, o governo, e isso depende do orçamento ser aprovado no congresso e das licitações. Além disso, existem outras 10 empresas que atuam nesse mesmo ramo e compartilham do mesmo cliente governamental. Apesar disso, a Ael indica que sua receita atual ampliou sua composição no exterior para 50%, mas não existem dados públicos sobre isso. Sendo assim, com base nos dados disponíveis, pode-se concluir que existe um baixo poder de barganha com o cliente, uma vez que ele é único (o governo) e pode procurar melhores ofertas caso ache necessário.
####Poder de barganha dos fornecedores
O único produto do portfólio da AEL Sistemas que possui um fornecedor evidente é o seu computador embarcado de alto desempenho “X-86”, que, como todo computador embarcado, o “X-86” precisa de componentes eletrônicos que são produzidos, hoje, por diversas fábricas centralizadas no mercado asiático, com destaque para Taiwa e China. Essa dependência de poucos países se mostrou maléfica sobretudo durante a pandemia, mas, historicamente, elas não ocorrem com frequência. Portanto, podemos considerar esse um mercado estável e bem diversificado. Por conta disso, podemos dizer que o poder de barganha com o fornecedor é alto.
####Ameaça de novos entrantes:
A indústria de tecnologia e defesa aeroespacial é altamente restritiva a novos entrantes, pois os contratos priorizam a segurança institucionalizada e, por conta de serem conservadores, os custos operacionais e de P&D são muito altos, pois precisam atender a critérios extremamente rigorosos e existe, por fim, uma predisposição política as empresas que já atuam neste cenário, já que existe um histórico do governo atrelado ao trabalho destas empresas. Deste modo, existe uma baixa ameaça de novos entrantes e isso pode ser e é muito bem explorado pela empresa que sabe da segurança deste ponto.
####Ameaça de produtos substitutos:
A empresa possui em seu portfólio produtos extremamente específicos, como o Terrain Following, que é um sistema embarcado a aeronaves que, de forma síncrona, identificam a posição territorial do avião e guiam o piloto, através de sensores, com base no relevo. Por se tratar de necessidades muito específicas, existe baixa probabilidade de haver um produto que substitua, mas ainda existe a opção de outras empresas apresentarem a mesma solução com precisões melhores ou um incremento tecnológico neste sentido, mas por ser um mercado conservador, essa ameaça é baixa. Portanto, a ameaça de produtos substitutos no mercado é baixa. 
####Rivalidade entre concorrentes:
Existem alguns fatores que demonstram a rivalidade, dentre eles, podemos destacar que a barreira de entrada é alta e esse setor é composto por apenas 11 empresas. Além disso, a demanda é linear durante todo o ano e o Brasil não possui histórico de conflitos armados externos, sendo assim, podemos observar um mercado bastante previsível para as empresas que já estão no meio. Por isso, podemos definir que a rivalidade entre concorrentes é baixa e que existe até mesmo uma colaboração entre eles em alguns setores em que os players não tem expertise. 



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
<br>
<br>

# Indicação de uma solução viável

O software sera projetado para calcular a rota mais otimizada para voos a baixa altitude de uma aeronave. Ele utiliza informações geográficas fornecidas por um arquivo .dt2 como entrada e retorna a rota ideal para voar entre dois pontos, levando em consideração restrições específicas definidas pelo usuário. A solução é baseada em teorias de grafos e emprega algoritmos eficientes, como algoritmos de caminho mínimo, para determinar a rota ideal para a aeronave percorrer.

### Objetivos

1. Definir a melhor rota segundo os parâmetros estabelecidos, como:
   - Menor altitude
   - Percurso com baixa visibilidade
   - Exclusão de zonas mais perigosas
2. Desenvolver um algoritmo eficiente
3. Agregar valor a AEL

### Benefícios

1. Vantagens econômicas: gera trajetórias de voo ótimas, economizando combustível e tempo na viagem.
2. Economia de tempo: particularmente importante nas operações militares, aumentando as chances de sucesso em missões de interceptação e reconhecimento de inimigos.
3. Segurança dos pilotos: evita rotas perigosas, reduzindo o risco de acidentes.

### Conclusão

O software desenvolvido visa ser uma ferramenta de suporte valiosa para pilotos que realizam voos em altitudes baixas, fornecendo-lhes uma rota eficiente e segura. A solução é um MVP e precisará de algumas alterações para se adequar aos sistemas da AEL, mas pode apresentar grandes benefícios para os usuários.
<br>
<br>

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

## Limitações

Desenvolver uma solução eficaz para o problema de caminho mínimo apresenta complexidade elevada, ainda mais quando adicionamos features como optar pela menor altura possível. A memória é intensivamente usada durante o desenvolvimento dos algoritmos, o que pode causar desempenho lento e dificultar a escalabilidade da solução. 

Por conta da solução ter uma complexidade muito alta e a equipe de desenvolvimento ainda é pouco familiarizada com as ferramentas utilizadas, podem ocorrer erros ao escolher o melhor algoritmo e torná-lo o mais eficiente possível. Alguns pontos que também podem influenciar, são os fatores externos, como dificuldade dos terrenos e condições climáticas, também devem ser considerados ao definir o percurso.

# Manuais

## Manual de Implantação

## Manual do Usuário

## Manual do Administrador


# Referências
