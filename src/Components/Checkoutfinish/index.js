import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Jumbotron,
  Container,
  Table,
  Form,
  FormGroup,
  FormFeedback,
  Input,
  Col,
  Row,
} from "reactstrap";
import { BsTrashFill } from "react-icons/bs";
import swal from "sweetalert";

const Checkoutfinish = (props) => {
  const Alert = () => {
    swal({
      title: "Obrigado Maria Onisia",
      text: "Sua compra foi finalizada com sucesso",
      icon: "success",
      button: "Ir para loja" ,
    });
  };
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid className="container">
          <div className="row">
            <div className="col-7">
              <h3 className="title">Finalizar Compra</h3>
              <div className="blocoformulario">
                <Form>
                  <FormGroup>
                    <row>
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nome Completo"
                      >
                        Nome
                      </Input>
                      <FormFeedback>
                        You will not be able to see this
                      </FormFeedback>
                    </row>
                  </FormGroup>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Input
                          type="number"
                          name="Cpf"
                          id="cpf"
                          placeholder="CPF"
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Input
                          type="number"
                          name="Phone"
                          id="Phone"
                          placeholder="Celular"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="E-mail"
                    />
                  </FormGroup>
                  <Row>
                    <Col md={3}>
                      <FormGroup>
                        <Input
                          type="number"
                          name="Cep"
                          id="Cep"
                          placeholder="CEP"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={9}>
                      <FormGroup>
                        <Input
                          type="text"
                          name="endereço"
                          id="endereco"
                          placeholder="Endereço"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Input
                          type="text"
                          name="Cidade"
                          id="cidade"
                          placeholder="Cidade"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Input
                          type="text"
                          name="estado"
                          id="estado"
                          placeholder="Estado"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
            <div className="col-5 ">
              <div className="boxtwo">
                <div>
                  <Table responsive="sm">
                    <thead>
                      <tr>
                        <th className="linelef">Imagem</th>
                        <th className="linelef">Nome</th>
                        <th>Qtd</th>
                        <th>Preço</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="linelef">Img</td>
                        <td className="linelef">Nome do filme</td>
                        <td>1</td>
                        <td>R$ 9,99</td>
                        <td>
                          <BsTrashFill />
                        </td>
                      </tr>
                      <tr>
                        <td>Img</td>
                        <td>Nome do filme</td>
                        <td>1</td>
                        <td>R$ 9,99</td>
                        <td>
                          <BsTrashFill />
                        </td>
                      </tr>
                      <tr>
                        <td>Img</td>
                        <td>Nome do filme</td>
                        <td>1</td>
                        <td>R$ 9,99</td>
                        <td>
                          <BsTrashFill />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <div className="totalcar">
                  <span>Total</span>
                  <h4>R$ 82,00</h4>
                </div>
                <button className="buttonFin" onClick={() => Alert()}>
                  Finalizar
                </button>
              </div>
            </div>
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Checkoutfinish;
