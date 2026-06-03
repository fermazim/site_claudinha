# Design System — Claudia Braga®
### Harmonização Orofacial · desde 2016

> Documento-lei do projeto. Toda decisão de UI nasce daqui. Em caso de dúvida,
> **o Guia de Identidade Visual (PDF) prevalece sobre qualquer referência externa.**

---

## 0. Hierarquia de decisão (regra de conflito)

1. **Guia de Identidade Visual (PDF) = lei.** Cor, tipografia, logo, voz, princípios e grafismos são invioláveis.
2. **Avada Dance Studio = só o esqueleto.** Define *quais* seções existem e *em que ordem*. Estilo, cor e fonte do Avada são ignorados. Conflitou → vence o PDF.
3. **André Braz / Virginia Amaral = só movimento e tom.** Influenciam micro-interações, ritmo de scroll e registro de copy onde o guia é silencioso. Nunca sobrescrevem o guia.

---

## 1. Fundação de marca

**Proposta única de valor:** Harmonização Orofacial ancorada em **ciência**, guiada pela **ética** e expressa através da **naturalidade**.

**Os três pilares** (sustentam toda decisão clínica e toda copy):
- **Ciência** — formação sólida (Mestre e Doutoranda em Odontologia), método baseado em evidências, anatomia real, prática hands-on.
- **Ética** — transparência nas indicações, honestidade nas expectativas, o bem-estar do paciente acima de tendências.
- **Naturalidade** — realçar o que é singular em cada face, sem distorções, exageros ou artificialismos.

**Cinco princípios da marca:** Excelência técnica · Transformação · Humanização · Naturalidade · Responsabilidade clínica.

**Frases-âncora** (usar como pull-quotes; não inventar variações que mudem o sentido):
- “Rostos únicos merecem abordagens únicas.”
- “Harmonizar é respeitar, não padronizar.”
- “Educar é transformar, formar é perpetuar.”
- “Nossa responsabilidade é com o paciente.”
- “A beleza não é um acidente da superfície; é o triunfo da estrutura profunda.” *(tese da Dra. Claudia — “A Renascença do Preenchimento”; ver §20)*

---

## 2. Voz & tom

Os quatro eixos do guia são **não-negociáveis** e devem ser sentidos em cada texto:

| Faça | Não faça |
|---|---|
| **Autoridade sem arrogância** — afirma com segurança e cita o porquê | Jargão pra impressionar; tom de “só eu sei” |
| **Acolhimento sem infantilização** — fala com o adulto, com calor | Diminutivos, emojis, “amada”, tom de coach |
| **Inspiração sem glamourização** — beleza como bem-estar | Promessas estéticas, “transformação radical”, antes/depois sensacionalista |
| **Educação sem elitismo** — explica de forma clara e acessível | Texto hermético; exibir títulos como muralha |

**Registro de copy (referência Virginia Amaral):** imperativos gentis em 2ª pessoa, frase curta + substantivo suave.
Exemplos canônicos do site: **Realce** o que já é seu · **Suavize** os excessos · **Preserve** a sua identidade.

**Regra de ouro:** nunca prometer resultado. Falar em *possibilidades*, *avaliação*, *o que faz sentido para você*.

---

## 3. Cor

Valores **extraídos dos arquivos reais da marca** (amostragem de pixel dos patterns). São a fonte da verdade.

```css
--cb-petrol:      #01232C;  /* verde petróleo profundo — base escura dominante */
--cb-petrol-700:  #08303A;  /* petróleo elevado — cards/camadas sobre o escuro  */
--cb-petrol-900:  #001318;  /* petróleo profundo — rodapé, vinhetas             */
--cb-sage:        #8D9B9B;  /* verde acinzentado — texto secundário, fundos     */
--cb-sage-300:    #B3BEBD;  /* sage claro — hover de texto secundário           */
--cb-mint:        #C2CBA8;  /* verde menta suave — detalhes, eyebrows, traços   */
--cb-beige:       #D0CDBE;  /* bege quente — "pele", acento sobre escuro        */
--cb-beige-200:   #E3E0D4;  /* bege claro — fundos claros alternativos          */
--cb-offwhite:    #F4F1E9;  /* off-white — seções claras, texto sobre escuro    */
--cb-ink:         #000000;  /* preto total — selo, contraste máximo             */
```

**Uso & proporção** (dominante escura com acentos quentes — nunca paleta “tímida e distribuída”):
- **Base do site:** petróleo `#01232C`. É o fundo-mãe.
- **Seções claras (respiro):** off-white `#F4F1E9` e bege-200. Alternam com as escuras pra dar ritmo.
- **Texto sobre escuro:** off-white (corpo), sage (secundário), bege/menta (destaques e eyebrows).
- **Texto sobre claro:** petróleo (títulos/corpo), `#3A4A47` (corpo suavizado), mint-escurecido em detalhes.
- **Acento:** o **bege** faz o papel do “dourado” — calor e sofisticação sem cair em clichê. **Menta** para fios, eyebrows e detalhes finos.

**Proibido:** azul corporativo, rosa/roxo de “estética feminina”, cores saturadas/vibrantes, ciano (no guia o ciano é só linha-guia de construção, não é cor de marca).

**Contraste (AA):** off-white sobre petróleo ✔ · petróleo sobre off-white ✔ · sage sobre petróleo ✔ (use só em texto ≥16px / secundário) · bege sobre petróleo ✔.

---

## 4. Tipografia

O guia define: **Títulos = Resort Sans · Texto = SF Pro Display · Detalhes = Audrey Sans.**
Como Resort/Audrey não são fontes web, usamos substitutos fiéis ao *papel* de cada uma, declarados num único `@font-face`/import. **Ao licenciar as originais, troca-se em um lugar só e propaga.**

```css
--cb-display: "Jost", "Resort Sans", system-ui, sans-serif;     /* títulos: sans geométrica elegante, em caixa-alta */
--cb-detail:  "Tenor Sans", "Audrey Sans", serif;               /* eyebrows/labels: caps fino com tracking */
--cb-body:    -apple-system, "SF Pro Display", "Hanken Grotesk", system-ui, sans-serif; /* corpo */
```

**Regras de uso:**
- Títulos (`--cb-display`): peso 300, **caixa-alta**, `letter-spacing` positivo (.02–.06em) — espelha o logotipo CLAUDIA BRAGA.
- Eyebrows/labels (`--cb-detail`): caixa-alta, `letter-spacing` .22–.34em, tamanho pequeno (.66–.78rem), cor menta/sage.
- Corpo (`--cb-body`): peso 300–400, `line-height` 1.6.

**Escala tipográfica (fluida):**
```css
--fs-display: clamp(2.8rem, 7.5vw, 6rem);   /* hero */
--fs-h1:      clamp(2.1rem, 5vw, 3.8rem);
--fs-h2:      clamp(1.7rem, 3.4vw, 2.7rem);
--fs-h3:      clamp(1.3rem, 2vw, 1.7rem);
--fs-lead:    clamp(1.05rem, 1.5vw, 1.25rem);
--fs-body:    1rem;
--fs-eyebrow: .72rem;
```

---

## 5. Espaçamento, grid, raio, sombra

```css
--maxw: 1280px;                       /* largura de conteúdo */
--maxw-narrow: 760px;                 /* blocos de leitura/citação */
--gutter: clamp(20px, 5vw, 80px);     /* margem lateral */
--section-y: clamp(80px, 11vw, 180px);/* respiro vertical de seção */
--space: 8px;                         /* unidade base (múltiplos: 8/16/24/32/48/64) */

--radius: 16px;                       /* cards, imagens */
--radius-pill: 999px;                 /* botões */

--shadow-soft: 0 30px 70px -40px rgba(0,20,24,.55);
--line-on-dark: rgba(244,241,233,.14);
--line-on-light: rgba(1,35,44,.12);
```

Grid editorial de 12 colunas; permitido (e incentivado) **quebrar o grid**: assimetria, sobreposição de imagem com texto, números/eyebrows deslocados.

---

## 6. Movimento

```css
--ease: cubic-bezier(.22,.61,.36,1);
--dur:  .9s;     /* reveal padrão */
--dur-fast: .4s; /* hover/micro */
```
- **Reveal on scroll:** fade + translateY(34px), stagger por `data-d="1..4"`. Um movimento orquestrado por seção > micro-interações espalhadas.
- **Hover:** botão preenche de baixo p/ cima; imagem dá zoom suave (scale 1.04); link desenha sublinhado.
- **Parallax sutil** nos patterns/monograma de bandas escuras.
- **Ken Burns** lento no slider do hero.
- Respeitar `prefers-reduced-motion`.

---

## 7. Logo — sistema

Arquivos gerados em **3 cores** (off-white p/ fundo escuro, petróleo p/ fundo claro, bege p/ destaque), transparentes e recortados, em `assets/img/logo/`:

| Variação | Arquivo | Uso |
|---|---|---|
| **Horizontal** | `horizontal-{cor}.png` | **Header/nav** (primário em barra) |
| **Lockup completo** | `lockup-{cor}.png` | Hero, rodapé, primeira apresentação (tem tagline) |
| **Empilhado** | `stacked-{cor}.png` | Contextos verticais / mobile / selos |
| **Monograma** | `monograma-{cor}.png` | Favicon, loader, marca-d’água, âncoras, ícone |
| **Favicon** | `favicon-{512,180,32}.png` | Aba do navegador / touch icon |

**Hierarquia:** o lockup completo é o primário de apresentação; o horizontal é o de navegação; o monograma é o símbolo.
**Clear space:** mínimo = altura do “C” em volta de toda a marca. **Nunca** distorcer, recolorir fora da paleta, aplicar sombra, nem pôr off-white sobre fundo claro.

---

## 8. Monograma como device (uso livre — pedido do cliente)

O monograma CB é tratado como **elemento gráfico recorrente**, não só logo:
- **Marca-d’água gigante** (off-white a 4–8% de opacidade) atrás de seções escuras.
- **Loader** da página (monograma com leve fade/scale).
- **Âncoras de seção** e divisores (monograma pequeno centralizado entre blocos).
- **Bullets/ícones** de listas em vez de marcadores genéricos.
- **Pattern03** (`pattern03.png`) já é o monograma ladrilhado — usar como textura de fundo muito sutil.

---

## 9. Patterns (grafismos orgânicos)

São os grafismos reais do guia (fluxo facial, “a face que se move, não é estática”). Em `assets/img/patterns/`:
- `pattern01.png` — linhas petróleo sobre **sage**. Para faixas/headers de seção clara-escura.
- `pattern02.png` — fluido **bege sobre petróleo**. Para painéis laterais e bandas escuras.
- `pattern03.png` — **monograma ladrilhado** sobre preto. Textura de fundo sutil.

**Regra:** pattern entra como fundo com `overlay` de petróleo (60–85%) pra preservar legibilidade. Nunca compete com o texto.

---

## 10. Fotografia

**Acervo atual:** 20 retratos de estúdio da Dra. Claudia (`assets/img/fotos/claudia-01..20.jpg`; 15 retrato, 5 paisagem). Versões **duotone petróleo→bege** em `fotos/duotone/`.

**Fotos reais aprovadas (v0.5) — acervo prioritário:** 3 retratos oficiais em `assets/img/fotos/claudia-real-01..03.png` (01 retrato; 02 e 03 paisagem; 03 em P&B). Usados no hero e nos splits de “A Doutora” e da home, no lugar dos placeholders `claudia-NN`. **Arte renascentista** em `assets/img/arte/` — ver §20.

**Direção de tratamento (regra do sistema):**
- **Seções claras** → foto **natural** (cor cheia), enquadramento respirado.
- **Seções escuras / hero / bandas** → foto **duotone** petróleo→bege, pra unificar no tema e não virar remendo (os fundos de estúdio variam entre claro e oliva).
- **Hero / slider:** imagens ancoram pelo **topo** (`object-position:top center`) — em retrato, o rosto é preservado e nunca cortado pelo crop do `object-fit:cover`.
- Retrato → painéis laterais, cards verticais, “A Doutora”. Paisagem → bandas full-bleed e galeria.

**Lacuna assumida (honestidade):** não há foto de clínica, de procedimento nem antes/depois. Enquanto não chegarem, as seções de Procedimentos e Antes & Depois se apoiam em **patterns + monograma** como fundo gráfico (fica proposital). Quando o cliente enviar, plugamos sem refatorar.

---

## 11. Componentes (especificação)

- **Top bar (utilitária):** **apenas os ícones de rede social** (Instagram + WhatsApp, SVG inline), alinhados **à direita** com a margem do `--gutter`. Fundo petróleo-900, ícone sage → off-white no hover. *(Antes trazia horário/telefone/localização à esquerda — removidos por decisão do cliente, v0.3.)*
- **Nav:** logo horizontal-offwhite + links (detail, caps, tracking) + botão “Agendar”. Transparente sobre o hero → sólida (petróleo-900 + blur) no scroll. **Itens:** Dra. Claudia · Tratamentos · Formações · Blog · Contato (+ Agendar). *Resultados (Antes & Depois) fica fora da navegação — página publicada, acessível por URL direta.* Mobile = overlay full-screen (`.mobile-menu`; `display:none` no desktop).
- **Botão:** pill, `--cb-detail` caps. *Solid* (bege→texto petróleo) e *outline* (borda bege). Hover = preenchimento vertical.
- **Eyebrow:** fio menta + label caps menta.
- **Card de conteúdo/procedimento:** imagem/pattern no topo (zoom no hover), badge (categoria), título display, link “Ver”.
- **Card de curso (`.card.course`):** variante do card para a Formação — imagem (duotone), badge, **data** (`.when` — detail caps menta), título, descrição curta e **botão** (outline) preso ao rodapé do card (`margin-top:auto`).
- **Banda de citação:** full-bleed escura, pattern + monograma watermark, pull-quote display centralizado.
- **Counters:** número display bege + label detail; count-up no IntersectionObserver.
- **Slider (hero/depoimentos):** fade entre slides, Ken Burns no hero, dots em monograma.
- **Galeria:** grid mosaico com lightbox.
- **Formulário:** campos com baseline (sublinhado), foco menta, label detail.
- **Footer:** lockup-offwhite + tagline + colunas de links + base legal (© Claudia Braga®).

---

## 12. Biblioteca de seções (blocos) — e a regra de variação

Esqueleto herdado do Avada, traduzido. **Cada página combina blocos diferentes, em ordens diferentes — proibido repetir o mesmo layout.**

`A` Hero slider full-bleed · `B` Faixa de promoção/aviso · `C` Trio de pilares · `D` Split imagem+texto (alternar lado) · `E` Banda de citação parallax · `F` Grid de cards · `G` Counters · `H` Verbos (Realce/Suavize/Preserve) · `I` Slider de depoimentos · `J` Teaser de conteúdo · `K` Galeria/mosaico · `L` Newsletter · `M` Faixa de CTA · `N` FAQ acordeão · `O` Linha do tempo/jornada · `P` Mapa+contato.

---

## 13. Arquitetura de páginas (com blocos — garantindo variação)

| Página (rótulo no menu) | Arquivo | Blocos (ordem) |
|---|---|---|
| Home | `index.html` | A → B → C → D → E → G → H → I → J → M → footer |
| Dra. Claudia | `sobre.html` | hero-interno → D(esq) → O(jornada) → E → D(dir) → G → M |
| Tratamentos | `procedimentos.html` | hero-interno → F(grid) → E → N(FAQ) → M |
| Formações | `formacao.html` | hero-interno → D → C(pilares) → I(alunos) → K → F(cards de curso) → M |
| Antes & Depois *(fora do menu)* | `resultados.html` | hero-interno → H → K(mosaico) → E → M |
| Blog | `conteudo.html` | hero-interno → J(lista) → L(newsletter) → M |
| Contato | `contato.html` | hero-curto → P(form+mapa) → footer |

Cada hero interno usa **foto diferente** e **alinhamento diferente** (esq / centro / dir). Bandas escuras e claras **sempre alternam** pra criar respiração.

**Fora da navegação:** Resultados (Antes & Depois) saiu do menu (topo e mobile) **e do rodapé** por decisão do cliente — a página segue publicada, acessível por URL direta.

---

## 14. Estrutura de arquivos

```
/claudia-braga
  DESIGN_SYSTEM.md
  /assets
    styles.css            ← tokens + base + componentes
    app.js                ← topbar, nav, reveal, slider, counters, lightbox, menu, loader
    /img
      /logo               ← horizontal/lockup/stacked/monograma × {offwhite,petrol,beige} + favicons
      /patterns           ← pattern01..03
      /fotos              ← claudia-01..20 (+ /duotone)
  index.html  sobre.html  procedimentos.html  formacao.html
  resultados.html  conteudo.html  contato.html
```
Header/rodapé idênticos em cada HTML (estático funciona ao abrir). Versão Jinja2 (`base.html` + partials) disponível sob demanda.

---

## 15. Acessibilidade

- Contraste AA garantido nos pares acima.
- `alt` descritivo em toda imagem; logos com `alt="Claudia Braga"`.
- Foco visível (anel menta). Navegação por teclado no menu, slider e lightbox.
- `prefers-reduced-motion`: desliga parallax/Ken Burns/auto-slide.
- Hierarquia semântica de headings; landmarks (`header/nav/main/section/footer`).

---

## 16. Como usar / próximos passos

1. Todo HTML importa `assets/styles.css` e `assets/app.js`.
2. Cores/tipos/raios só via variáveis CSS — nunca hex solto.
3. Copy sempre passa pelos 4 eixos de voz (§2) e jamais promete resultado.
4. Nova seção = escolher um bloco da §12 e respeitar a regra de variação (§13).
5. Trocar fontes originais (Resort/Audrey) = editar só o `@font-face` em `styles.css`.

*v0.1 — fundação. Atualizar a cada nova decisão de marca.*

---

## 17. Adendo v0.2 — Redes sociais & ações de agendamento

**Botões de rede social (`.social-btns` / `.sbtn`):** círculo com borda (fio do tema), ícone em `currentColor`; hover preenche em bege e sobe 3px. Vivem no **rodapé de todas as páginas**. Versão `.light` inverte pra fundo claro. Ícones via SVG inline (Instagram, WhatsApp).

**Link oficial do Instagram:** `https://www.instagram.com/draclaudiabraga/` (abre em nova aba, `rel="noopener"`).

**Convenção de agendamento:** *toda* ação de marcar/agendar/“falar agora” aponta para **`https://wa.me/5521991249832`** (WhatsApp oficial · +55 21 99124-9832). Centralizado — quando mudar o número, busca-e-substitui um único valor. Vale para: botão “Agendar” da nav e do mobile, CTAs de corpo, “Falar no WhatsApp”, ícone do topbar e do rodapé.

**Endereço oficial:** Av. das Américas, 3434 — Bloco 6, sala 205 · **Integral Health Institute** · Rio de Janeiro · RJ. Na página de Contato: logo do IHI (branca, `assets/img/logo/ihi-w.webp` — baixada, sem hotlink; link → ihi.integralhealth.rio em nova aba) à **esquerda** do endereço, e **mapa do Google embutido** (embed `output=embed`, sem chave de API) no `.map-ph`.

---

## 18. Adendo v0.3 — Navegação, topbar e formação

Decisões aplicadas em **03/06/2026** (substituem o que conflitar nas seções acima):

1. **Menu renomeado:** A Doutora → **Dra. Claudia** · Procedimentos → **Tratamentos** · Formação → **Formações** · Conteúdo → **Blog** · Contato (mantido). “Claudia” **sem acento**, pra casar com o wordmark CLAUDIA. Aplicado em topo, mobile e rodapé.
2. **Resultados fora do menu:** removido do topo e do mobile; página mantida (ver v0.4 — depois também saiu do rodapé).
3. **Topbar enxuta:** só os ícones Instagram + WhatsApp, à direita, com margem do `--gutter` (§11 atualizado).
4. **Hero ancorado ao topo:** `object-position:top center` no slider, pra não cortar o rosto (§10 atualizado).
5. **Cards de curso na Formação:** nova variante `.card.course` (imagem, data, título, botão) na seção de turmas (§11/§13 atualizados). **Conteúdo é mockup** — títulos e datas (ago/2026, out/2026, mar/2027) são provisórios até o cliente confirmar.
6. **Endereço oficial** registrado no §17 (Integral Health Institute).

*v0.3 — atualizar a cada nova decisão de marca.*

---

## 19. Adendo v0.4 — Rodapé

Decisões aplicadas em **03/06/2026**:

1. **Base legal = mesma tipografia da `.tag`:** `footer .base span` usa `--cb-detail`, **caixa-alta**, `letter-spacing:.18em`, `.66rem`, sage, `line-height:2` — idêntica ao bloco `.tag` do rodapé. Espaçamento: `margin-top:10px` no `.base` (era 3rem). **Atenção:** `.base` fica *fora* de `.foot` (irmã, sob `footer > .wrap`); por isso o seletor é `footer .base`, não `.foot .base` — o seletor antigo não casava e a regra nunca aplicava.
2. **Rodapé em 2 colunas:** **Navegar** (Dra. Claudia · Tratamentos · Formações · Blog · Contato) + **Agendamento** (WhatsApp · Instagram). A coluna **Conteúdo** foi removida — Blog e Contato passaram para Navegar.
3. **Antes & Depois sai do rodapé:** com isso, Resultados fica **sem nenhum link** na navegação (atualiza o §13/§18). Página segue publicada e acessível por URL direta; quando virar conteúdo real, replugamos no menu.

---

## 20. Adendo v0.5 — Bio real & o motivo da Renascença

Material da cliente (2 CVs, deck Revanesse, fotos) processado em **03/06/2026**. Notas de pesquisa completas em `fonts/PESQUISA_*.md` (pasta gitignored).

**Bio real (fonte: 2 CVs).** “A Doutora” (`sobre.html`) foi reescrita com a trajetória verdadeira: graduação na **UFRJ (1995)**, oficial dentista (FAB / Bombeiros, 1997–2006), **uma década na indústria de saúde (2006–2016)** em regulatório/qualidade/comércio exterior, virada para a **Harmonização Orofacial desde 2016**, **Mestre (2024)** e **Doutoranda** em Odontologia, professora e coordenadora de especializações, autora da metodologia **“Anatomy First”**. Diferencial-chave da narrativa: **rigor industrial (rastreabilidade, gestão de risco, previsibilidade) aplicado à estética**. Divergências a confirmar (telefone/e-mail) em `fonts/PESQUISA_bio.md`.

**O motivo da Renascença.** A própria Dra. Claudia enquadra a HOF como **escultura renascentista** (deck “A Renascença do Preenchimento”, como Speaker Revanesse). Virou motivo do site porque **encaixa nos três pilares**: Naturalidade = Michelangelo revela o Davi (não inventa um rosto); Ciência = “triunfo da estrutura profunda” (anatomia); e o **chiaroscuro** já É a estética escura+luz do site. Aplicação:
- **Nova frase-âncora** (§1): *“A beleza não é um acidente da superfície; é o triunfo da estrutura profunda.”*
- **Componente `.banda.art`** — variante da banda de citação com a obra mais visível (overlay petróleo mais leve). Usada na home (Botticelli) e em “A Doutora” (escultura + Estética×Anatomia).
- Entra como **motivo** (≈1 banda por página + 1 pull-quote), nunca competindo com a foto real nem com a voz (sem prometer resultado).

**Assets de arte (`assets/img/arte/`):**
| Arquivo | Obra | Proveniência |
|---|---|---|
| `botticelli-venus.png` | “O Nascimento de Vênus”, Botticelli (c.1485) | ✅ Renascimento genuíno · **domínio público** |
| `escultura-marmore.jpg` | Davi sendo cinzelado (chiaroscuro) | ⚠️ render por **IA** (do deck dela) |
| `chiaroscuro.jpg` | Perfil feminino em chiaroscuro | ⚠️ render por **IA** (do deck dela) |
| `estetica-anatomia.jpg` | Davi × anatomia facial | ⚠️ render por **IA** (do deck dela) |

⚠️ **Proveniência/IP:** só o Botticelli é domínio público. As demais são imagens **geradas por IA** vindas do deck da cliente — uso autorizado por ela, mas titularidade incerta. Para produção: confirmar uso ou trocar por arte de domínio público equivalente. Fotos reais e arte ainda **não otimizadas** (PNG/JPG pesados; sem ferramenta no ambiente) — converter p/ WebP + duotone quando possível.

*v0.5 — atualizar a cada nova decisão de marca.*

---

## 21. Adendo v0.6 — Seção menta & pattern de canto

Decisões aplicadas em **03/06/2026** (home):

1. **Seção menta (`.sec.mint`)** — fundo verde menta (`--cb-mint` #C2CBA8) como "respiro" claro, com **texto petróleo** (#01232C; corpo/lead #2f4a46). Branco (ou menta-claro) sobre menta é ilegível — por isso o texto é **escuro**, contraste AA. Eyebrow herda `.on-light` (#3c5a55). Na home: pausa clara entre a banda do Botticelli e os depoimentos ("Rostos únicos merecem abordagens únicas").
2. **Pattern de canto sangrado (`.pattern-corner`)** — grafismo (`pattern02`) ancorado a um canto e sangrando para fora (via `transform: translate`), clipado por `overflow:hidden` na seção. `mix-blend-mode:screen` revela só os **traços bege** (o campo petróleo do pattern desaparece), a ~`.5` de opacidade; `z-index:0`, atrás do `.wrap` (z-index 2). Variantes `.br` (canto inferior-direito) e `.tr` (superior-direito). **Removido da home** (o efeito sangrado não agradou em uso). O componente segue definido no CSS e disponível, mas **não está aplicado em nenhuma página** no momento.

---

## 22. Adendo v0.7 — Aposentadoria das fotos-placeholder & heros

Decisões aplicadas em **03/06/2026**:

1. **As fotos `claudia-01..20` eram placeholder** (modelo de banco de imagem, ≠ Dra. Claudia). **Retiradas de todas as páginas.** Em uso agora: as **3 fotos reais aprovadas** (`claudia-real-01..03`) nos pontos de rosto (heros, splits, 1–2 tiles de galeria) e **arte renascentista + patterns** nas galerias, cards e bandas. *(Substitui o que §10 dizia sobre o acervo; os arquivos `claudia-NN` seguem em disco, órfãos — podem ser apagados.)*
2. **Heros por página:** Home = slider das 3 reais (real-01 ao final, `object-position` +20%). Dra. Claudia = real-03. Tratamentos = real-02 (rosto em evidência). Formações = **Davi sendo esculpido** (escultura). Blog = rosto dela (real-01). Contato = **Botticelli**. Resultados (off-nav) = real-01.
3. **Contraste de hero:** `text-shadow` no eyebrow/h1/lead + overlay mais forte em `.hero.center` — texto legível sobre rosto ou arte.
4. **Limite conhecido:** só existem 3 fotos reais; por isso elas se repetem entre páginas e as galerias se apoiam em arte/pattern (ligado à "lacuna assumida" do §10). Quando chegarem mais fotos reais (clínica/procedimento/turmas), plugar no lugar da arte/pattern.

*v0.7 — atualizar a cada nova decisão de marca.*
