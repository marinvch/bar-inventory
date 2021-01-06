import React, { useState, useEffect } from "react";
import UserNavigation from "../UserNavigation";
import {
  Container,
  Table,
  Accordion,
  Button,
  Card,
  Row,
  Col,
} from "react-bootstrap";

export default function BarInventory() {
  const [inventory, setInventory] = useState({
    alcohol: {
      vodka: 0,
      wiskey: 0,
      beer: 0,
    },
    nonAlcohol: {
      water: 0,
      soda: 0,
      cola: 0,
    },
    consumatives: {
      barNapkins: 0,
      marascino: 0,
      printerPaper: 0,
    },
  });

  useEffect(() => {
    window.localStorage.setItem('inventory', JSON.stringify(inventory));
    // localData('inventory')
  
  }, [inventory]);

  // function localData() {
  //   const data = JSON.parse('inventory')
  //   window.localStorage.getItem(data|| null);
  // }

  // const handleSubmit = () => {
  //   localStorage.setItem(data,JSON.stringify(inventory))
  //   console.log(inventory);
  // };

  return (
    <Container fluid>
      <Row>
        <Col xs lg="2">
          <UserNavigation />
        </Col>
        <Col xs lg="10">
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Alcohol
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantaty</th>
                        <th>Cart</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Vodka</td>
                        <td>20$</td>
                        <td>0</td>
                        <td>
                          <button
                            onClick={() =>
                              setInventory(
                                { ...inventory },
                                inventory.alcohol.vodka++
                              )
                            }
                          >
                            +
                          </button>
                          <span>{inventory.alcohol.vodka}</span>
                          <button
                            onClick={() =>
                              setInventory(
                                { ...inventory },
                                inventory.alcohol.vodka--
                              )
                            }
                          >
                            -
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Whiskey</td>
                        <td>30$</td>
                        <td>0</td>
                        <td>
                          <button
                            onClick={() =>
                              setInventory(
                                { ...inventory },
                                inventory.alcohol.wiskey++
                              )
                            }
                          >
                            +
                          </button>
                          <span>{inventory.alcohol.wiskey}</span>
                          <button
                            onClick={() =>
                              setInventory(
                                { ...inventory },
                                inventory.alcohol.wiskey--
                              )
                            }
                          >
                            -
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>Beer</td>
                        <td>4$</td>
                        <td>0</td>
                        <td>
                          <button
                            onClick={() =>
                              setInventory(
                                { ...inventory },
                                inventory.alcohol.beer++
                              )
                            }
                          >
                            +
                          </button>
                          <span>{inventory.alcohol.beer}</span>
                          <button
                            onClick={() =>
                              setInventory(
                                { ...inventory },
                                inventory.alcohol.beer--
                              )
                            }
                          >
                            -
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Non- Alcohol
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  {" "}
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantaty</th>
                        <th>Cart</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{inventory.nonAlcohol.cola}</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <button
                          onClick={() =>
                            setInventory(
                              { ...inventory },
                              inventory.alcohol.beer++
                            )
                          }
                        >
                          +
                        </button>
                        <span>{inventory.alcohol.beer}</span>
                        <button
                          onClick={() =>
                            setInventory(
                              { ...inventory },
                              inventory.alcohol.beer--
                            )
                          }
                        >
                          -
                        </button>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <button
                          onClick={() =>
                            setInventory(
                              { ...inventory },
                              inventory.alcohol.beer++
                            )
                          }
                        >
                          +
                        </button>
                        <span>{inventory.alcohol.beer}</span>
                        <button
                          onClick={() =>
                            setInventory(
                              { ...inventory },
                              inventory.alcohol.beer--
                            )
                          }
                        >
                          -
                        </button>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <button
                          onClick={() =>
                            setInventory(
                              { ...inventory },
                              inventory.alcohol.beer++
                            )
                          }
                        >
                          +
                        </button>
                        <span>{inventory.alcohol.beer}</span>
                        <button
                          onClick={() =>
                            setInventory(
                              { ...inventory },
                              inventory.alcohol.beer--
                            )
                          }
                        >
                          -
                        </button>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Consumables
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  {" "}
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantaty</th>
                        <th>Cart</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <button
                          onClick={() =>
                            setInventory(
                              { ...inventory },
                              inventory.alcohol.beer++
                            )
                          }
                        >
                          +
                        </button>
                        <span>{inventory.alcohol.beer}</span>
                        <button
                          onClick={() =>
                            setInventory(
                              { ...inventory },
                              inventory.alcohol.beer--
                            )
                          }
                        >
                          -
                        </button>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <button
                          onClick={() =>
                            setInventory(
                              { ...inventory },
                              inventory.alcohol.beer++
                            )
                          }
                        >
                          +
                        </button>
                        <span>{inventory.alcohol.beer}</span>
                        <button
                          onClick={() =>
                            setInventory(
                              { ...inventory },
                              inventory.alcohol.beer--
                            )
                          }
                        >
                          -
                        </button>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <button
                          onClick={() =>
                            setInventory(
                              { ...inventory },
                              inventory.alcohol.beer++
                            )
                          }
                        >
                          +
                        </button>
                        <span>{inventory.alcohol.beer}</span>
                        <button
                          onClick={() =>
                            setInventory(
                              { ...inventory },
                              inventory.alcohol.beer--
                            )
                          }
                        >
                          -
                        </button>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          <button
            onClick={() => {
              console.log(JSON.stringify(inventory));
            }}
          >
            Submit
          </button>
        </Col>
      </Row>
    </Container>
  );
}
