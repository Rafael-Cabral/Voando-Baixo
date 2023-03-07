---
title: Modelo para o artigo do Módulo 5
author: 
    - "Beny Frid"
    - "Elias Biondo"
    - "Luiz Carlos"
    - "Pedro Munhoz"
    - "Pedro Romão"
    - "Rafael Cabral"
    - "Thomas Barton"
    - "Vinícius Souza" 
date: Janeiro de 2023
abstract: Como parte das atividades do módulo 5, cada grupo deverá redigir um texto  descrevendo os resultados do projeto no formato de um artigo científico. Este arquivo no formato markdown contém a estrutura básica deste artigo. Cada grupo deverá editar este arquivo com a descrição do projeto que desenvolveu.
---

# Introdução

<p> O planejamento de trajetórias para voos militares em baixa altitude é uma tarefa complexa e desafiadora, que exige uma série de habilidades e conhecimentos técnicos para garantir a segurança dos pilotos e tripulantes. Dentre os desafios encontrados, podemos citar a necessidade de se evitar obstáculos, minimizar o tempo de exposição aos radares inimigos e garantir a máxima eficácia da missão. </p>

<p> Para lidar com esses desafios, algoritmos de planejamento de trajetórias têm sido desenvolvidos para auxiliar na melhor execução de voos sobre condições restritivas, como a baixa atitude. A exemplo, M. Ryll et al. (2019) [1] evidencia os estudos para o planejamento de rotas para micro veículos aéreos em ambientes incertos e sem acesso a GPS, permitindo um voo com altas velocidades e sem riscos de colisão. De forma análoga, o algoritmo do presente artigo visa minimizar os impactos decorrentes de erros estratégicos na elaboração das rotas, e, para isso, é explorada uma metodologia baseada em grafos, o que permite representar o ambiente do voo em um conjunto de nós e arestas, onde cada nó representa uma posição possível do avião e cada aresta representa uma possível rota entre duas posições. </p>

<p> Sob tal ótica, vale ressaltar que a escolha do algoritmo baseado em grafos para rotas de espaçonaves é fundamentada em estudos, como propõe Y. Hao et al. (2009) [2] ao dissertar sobre a maior eficiência do grafo MAKLINK e do algoritmo de multi colônias de formigas em comparação a algoritmos convencionais, como métodos baseados em campos de potencial, métodos de visibilidade de grafos, métodos de grades e até mesmo o método A* (A-estrela). O objetivo do presente trabalho é sugerir uma nova forma de representar o melhor caminho viável, tendo como base o fluxo exposto no seguinte parágrafo. </p>

<p> Em ordem a definir o melhor caminho, um arquivo DT2 foi lido por uma classe confeccionada (Dted) a fim de obter-se uma visualização das coordenadas utilizadas como referência no estudo. Com o arquivo lido, foi possível criar um array e salvar nele todos os nós do grafo com suas respectivas distâncias até dado referencial, em metros, ordenando-os com base nas coordenadas de latitude e longitude. Na sequência, foi definido o peso de cada vértice, baseado na lógica matemática de representar o peso de cada aresta com base na  altitude do nó final da conexão somado com a diferença de altitude do nó inicial com o nó final, para que o algoritmo possa escolher o menor caminho viável, isto é, aquele que possui a menor somatória dos pesos dos vértices. Após a ponderação, a classe Graph foi criada e nela foram adicionados todos os pontos lidos como classe Vertex, que armazena a latitude, longitude e altitude dos nós. Com todos os pontos adicionados, a classe Edge, pertencente a classe Vertex - que tem como variável o Vertex final da conexão e o peso -, foi desenvolvida para cada conexão. Com isso, foi possível enviar as informações para o algoritmo escolhido futuramente {mudar} achar a rota com menor altitude para aviões. A escolha desse algoritmo é sustentada por testes executados em que foram comparadas rotas geradas entre a origem e o destino de diferentes algoritmos, sendo X {mudar} o que obteve os resultados mais satisfatórios e eficazes. </p>

# Descrição do problema

# Trabalhos relacionados

# Descrição da estratégia adotada para resolver o problema

<p> Começamos o nosso trabalho nesse projeto por entender melhor o contexto que cerca nosso software e utilizando metódos ágeis, divindo o trabalho em sprints. Fizemos uma análise da indústria, a fim de entender todos os pontos do mercado em que a empresa AEL Sistemas está envolvida, uma análise SWOT, para entendermos o contexto do cliente inserido na respectiva arena competitiva, um value proposition canvas e também escrevemos na documentação do projeto uma descrição da solução a ser desenvolvida, com o objetivo de entendermos ainda melhor o nosso projeto, e uma matriz de riscos, para ajudar a equipe no processo de decisões.</p>

<p> Após isso, fizemos uma modelagem e representação do problema. Estudamos os tipos existentes de grafos, desenvolvemos um modelo matemático inicial para conseguirmos entender a parte formal do projeto e utilizamos o a biblioteca Neo4J para ter uma vizualizaçaão de como seria o nosso banco de dados, assim como para compreendemos como seria a entrega e o que o nosso cliente veria no produto final.</p>

<p> A nível de experiência do usuário, fizemos personas e user stories. Nossas duas personas são Gabriel Elfer, 35 anos, piloto militar que interage com nossa aplicação pela sua necessidade de ter uma trajetória eficiente e segura, e também Fernando Alberto de 45 anos, um militar na área de reconhecimento, que tem seu contato com nosso projeto pelo desafio atual que ele enfrenta, desenhar um caminho que ele acredite ser o mais seguro possível para que sua equipe de pilotos consiga fazer suas missões. As user stories foram feitas no modelo INVEST (independente, negociável, de valor, estimável, pequena e testável) tendo como foco nossas personas e suas necessidades específicas para atingir a satisfação do usuário.</p>

<p> Uma vez feito esse primeiro contato com a solução, partimos nessa segunda sprint para a criação em Java do que seria o começo do algoritmo. Fizemos o uso da biblioteca GDAL para fazer a leitura dos arquivos de altitura no formato DTED nível 2, que nos foi fornecido pela empresa parceira. Esse arquivo nos gera vértices em todo o arquivo, com uma distância que definimos de 180 metros entre cada ponto, que usamos para criar um grafo utilizando tipos de dados criados por nós, vértices e arestas.</p>

<p> O próximo passo natural seria a criação de um algoritmo que faça uma busca entre o menor caminho do vértice A até o B, então fizemos uso do algoritmo A* (A estrela). O algoritmo A*, se trata de um algoritmo cuja finalidade é de busca entre vértices para grafos, baseado em funções heurísticas. O objetivo em cada resolução de problema está na definição da função heurística que retorne um menor custo de deslocamento de um ponto de origem A até o destino B.</p>

# Análise da complexidade da solução proposta

<p> Definimos o grafo como um conjunto de vértices e arestas, onde cada vértice representa um ponto no caminho e cada aresta representa o custo (ou distância) entre dois pontos. O problema consiste em encontrar o caminho mínimo do ponto A ao ponto F, ou seja, o caminho que minimize a soma dos custos das arestas percorridas.</p>

<p> O objetivo é minimizar a soma dos custos das arestas selecionadas. Para isso, utilizamos a seguinte fórmula: min Z = ∑(i,j)∈E c_ij * x_ij. Onde E é o conjunto de todas as arestas do grafo, c_ij é o custo da aresta que liga o vértice i ao vértice j e x_ij é a variável de decisão que indica se a aresta (i,j) é selecionada ou não. As variáveis de decisão são x_ij, variáveis binárias que indicam se a aresta que liga o vértice i ao vértice j faz parte do caminho ou não.</p>

<p> Para as restrições, devemos garantir que cada vértice tenha exatamente uma aresta de entrada e uma de saída, exceto pelos vértices A e F, que podem ter apenas uma aresta de entrada ou uma de saída, respectivamente. Para isso, utilizamos as seguintes restrições:
- ∑(i,j)∈E x_ij = 1, para todo vértice i ≠ A,F
- ∑(A,j)∈E x_Aj = 1
- ∑(i,F)∈E x_iF = 1
Onde x_Aj é a variável de decisão que indica se a aresta que liga o ponto A ao vértice j é selecionada e x_iF é a variável de decisão que indica se a aresta que liga o vértice i ao ponto F é selecionada.</p>

<p>Também devemos garantir que não haja ciclos no caminho selecionado, para isso utilizamos a seguinte restrição de fluxo:

∑(i,j)∈P x_ij ≤	P	- 1, para todo subconjunto de vértices P ⊆ V
Onde |P| é o número de vértices em P.</p>

////////////////////
Neste artigo, cada grupo precisará fazer a análise de complexidade da solução proposta, utilizando as notações $O(.)$, $\Omega(.)$ e $\Theta(.)$.

A seguir temos a citação de alguns trechos de DASGUPTA et. al. (2011) para mostrar como estas notações são em \LaTeX. 

> Sejam $f(n)$ e $g(n)$ duas funções de inteiros positivos em reais positivos. Dizemos que $f = O(g)$ (que significa que "$f$ não cresce mais rápido do que $g$") se existe uma constante $c > 0$ tal que $f(n) \leq c \cdot g(n)$.

Ainda em outro trecho de DASGUPTA et. al. (2011), temos:

> Assim como $O(.)$ é análogo a $\leq$, podemos definir análogos de $\geq$ e $=$ como se segue:

> $f = \Omega(g)$ significa $g = O(f)$

# Análise da corretude da solução proposta

# Resultados obtidos

# Conclusão

# Referências Bibliográficas

<p> [1] M. Ryll, J. Ware, J. Carter and N. Roy, "Efficient Trajectory Planning for High Speed Flight in Unknown Environments," 2019 International Conference on Robotics and Automation (ICRA), Montreal, QC, Canada, 2019, pp. 732-738, doi: 10.1109/ICRA.2019.8793930. </p>

<p> [2] Y. Hao, Z. Shen and Y. Zhao, "Path Planning for Aircraft Based on MAKLINK Graph Theory and Multi Colony Ant Algorithm," 2009 International Joint Conference on Computational Sciences and Optimization, Sanya, China, 2009, pp. 232-235, doi: 10.1109/CSO.2009.315. </p>