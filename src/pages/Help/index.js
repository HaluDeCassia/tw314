import React, { Suspense } from "react";

import { Container } from "./styles";

const Page = React.lazy(() => import("../../components/Page"));
const Collapse = React.lazy(() => import("../../components/Collapse"));

const renderLoader = () => <i class="fas fa-spinner fa-spin"></i>;

export default function Help () {
  const [faqs, setFaqs] = React.useState([{
    question: "O que é um qrcode?",
    answer: (<React.Fragment>O qrcode (ou código qr) é um código de barras bidimensional, com um padrão de barras diferente dos tradicionais, parecido com esse aqui <i className="fas fa-qrcode"></i><br />  Com ele, você consegue escanear com seu celular e ter acesso a várias coisas legais, como textos, links e outros arquivos de mídia (vídeo, imagem...). No tw, o código qr vai te dar uma senha que vai conseguir entrar diretamente no <abbr title="Aplicativo mobile">app</abbr>, pra deixar sua vida ainda mais fácil. Não é demais?</React.Fragment>),
    open: false
  }, {
    question: "Onde encontro a senha?",
    answer: (<React.Fragment>A senha (ou o qrcode) são disponibilizadas pelo estabelecimento, seja por meio de site do local ou pessoalmente, no momento do atendimento. Basta depois adicionar a senha ou escanear o qrCode e pronto! Você entrou na fila <span role="img" aria-label="risadinha tampando a boca">&#129325;</span></React.Fragment>),
    open: false
  }, {
    question: "Onde posso usar o TW?",
    answer: (<React.Fragment>O TW pode ser usado em qualquer estabelecimento (local) parceiro. Só precisa adicionar a senha ou escanear o qrcode usando esse <abbr title="Aplicativo mobile">app</abbr> bonitão aqui e ser feliz. Simples assim! <span role="img" aria-label="sorriso com olhos de estrela">&#129321;</span></React.Fragment>),
    open: false
  }]);

  function toggleCollapse(index) {
    setFaqs(faqs.map((faq, i) => {
      i === index ? faq.open = !faq.open : faq.open = false;

      return faq;
    }));
  }

  return (
    <Suspense fallback={renderLoader()}>
      <Page title="ajuda">
        <Container>
          {faqs.map((faq, i) => (
            <Collapse faq={faq} index={i} toggle={toggleCollapse} />
          ))}
        </Container>
      </Page>
    </Suspense>
  );
}
