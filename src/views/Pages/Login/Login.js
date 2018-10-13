import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Login extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="12">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Авторизация</h1>
                      <p className="text-muted">Войдите в ваш аккаунт</p>
                      <InputGroup className="mb-3">
                        <Input type="text" placeholder="E-mail" autoComplete="test@example.com" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <Input type="password" placeholder="Пароль" autoComplete="Текущий пароль" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4">Авторизация</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Забыли пароль ?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Регистрация</h2>
                      <p>В случае если у вас нет аккаунта, вы можете зарегестрировать его на платформе.</p>
                      <Button onClick={() => this.props.history.push('/signup')} color="primary" className="mt-3" active>Зарегистрироваться сейчас !</Button>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
