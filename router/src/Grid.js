import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Grid() {
    return (
        <div>
            <Container>
                <Row>
                    <Col><img src={'https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/Russian-Blue_01.jpg?bust=1538073970'} /></Col>
                    <Col><img className={"katze"} src={'https://img3.goodfon.com/wallpaper/nbig/d/91/cat-cats-cute-face-tabby-tiger-2821.jpg'} /></Col>
                </Row>
                <Row>
                    <Col><img className={"cat"} src={'https://imgc.allpostersimages.com/img/print/u-g-Q10OFEQ0.jpg?w=550&h=550&p=0'} /></Col>
                    <Col><img className={"kat"} src={'https://www.demilked.com/magazine/wp-content/uploads/2019/03/5c92035339051-BmsgYqxABG3-png__700.jpg'} /></Col>
                    <Col><img className={"ccat"} src={'https://lh3.googleusercontent.com/proxy/eEtOujJeenxhJ-E1VTALjTXgQ-PALCjxHFyK7KlWpLt0O5dW1AXKqsKBb3fDXjnvTgSrcuk0_mfbm3Y16_cHgh598v9ArgakKslg6C-iW120MKLnKKj7l6SkQ6DVCdPkUlAKSb4'} /></Col>
                </Row>
            </Container>
        </div>
    )
};

export default Grid;