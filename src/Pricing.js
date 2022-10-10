import React from 'react';
import './style.css'
import {
	ListGroupItem,
	ListGroup,
	Button,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Row,
	Col,
} from "reactstrap";
import { Link } from "react-router-dom";
export default function Pricing(){
	// console.log(window.location.hash)
	return (
		<div >
			 <h1 data-aos="fade-down"
				data-aos-offset="200"
				data-aos-delay="18"
				data-aos-duration="780"
				data-aos-easing="ease-in-out"
				data-aos-once="false" className="features text-center">PRICING</h1>
            <Row>
              <Col md="4">
                <Card
					data-aos="flip-left"
					data-aos-offset="200"
					data-aos-delay="18"
					data-aos-duration="780"
					data-aos-easing="ease-in-out"
					className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/robots/robot-search.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Wallet collector</h4>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Collect whitelisted members wallet</ListGroupItem>
                        <ListGroupItem>Accurate inside your server</ListGroupItem>
                        <ListGroupItem>Easy and quick</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button onClick={() => {window.location.href = "/pricing#WalletCollector"}} className="btn btn-simple" color="primary">
                      Buy
                    </Button>
                  </CardFooter>
                </Card>
				<div className="space-between"></div>
              </Col>
              <Col md="4">
                <Card data-aos="flip-left"
					data-aos-offset="200"
					data-aos-delay="18"
					data-aos-duration="780"
					data-aos-easing="ease-in-out"
					className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/robots/robot-money.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">FP/Token checker</h4>
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Track down any collection Floor price</ListGroupItem>
                        <ListGroupItem>Tracks the prices of any token</ListGroupItem>
                        <ListGroupItem>Display the prices on your server</ListGroupItem>	
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button  onClick={() => {window.location.href = "/pricing#TokenChecker"}} className="btn-simple" color="success">
                      Buy
                    </Button>
                  </CardFooter>
                </Card>
				<div className="space-between"></div>
              </Col>
              <Col md="4">
                <Card data-aos="flip-left" className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/robots/robot-message.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Purge inactive members</h4>
                        <hr className="line-info" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Tracking your active members</ListGroupItem>
                        <ListGroupItem>Warn your members about being active</ListGroupItem>
                        <ListGroupItem>send message to your members</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button  onClick={() => {window.location.href = "/pricing#purgeInactiveMembers"}} className="btn-simple" color="info">
                      Buy
                    </Button>
                  </CardFooter>
                </Card>
				<div className="space-between"></div>
              </Col>
            </Row>
            <Row className='mt-5'>
              <Col md="4">
                <Card
					data-aos="flip-left"
					data-aos-offset="200"
					data-aos-delay="18"
					data-aos-duration="780"
					data-aos-easing="ease-in-out"
					className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/robots/robot-send.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Safety collabs</h4>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>assigning roles easy and fast</ListGroupItem>
                        <ListGroupItem>Bulk assign of a specific role</ListGroupItem>
                        <ListGroupItem>Easy and quick</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button  onClick={() => {window.location.href = "/pricing#SafetyCollabs"}} className="btn-simple" color="primary">
                      Buy
                    </Button>
                  </CardFooter>
                </Card>
				<div className="space-between"></div>
              </Col>
              <Col md="4">
                <Card data-aos="flip-left"
					data-aos-offset="200"
					data-aos-delay="18"
					data-aos-duration="780"
					data-aos-easing="ease-in-out"
					className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/robots/lock-robot.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Discord Lock</h4>
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Set a password of your discord bot</ListGroupItem>
                        <ListGroupItem>Secure your discord server</ListGroupItem>
                        <ListGroupItem>Easy to use</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button onClick={() => {window.location.href = "/pricing#DiscordLock"}} className="btn-simple" color="success">
                      Buy
                    </Button>
                  </CardFooter>
                </Card>
				<div className="space-between"></div>
              </Col>
              <Col md="4">
                <Card data-aos="flip-left" className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/robots/robot-hi.png")}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase">Daily mint</h4>
                        <hr className="line-info" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Track all daily mints</ListGroupItem>
                        <ListGroupItem>Display daily mints to your members</ListGroupItem>
                        <ListGroupItem>You can never miss a mint</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button onClick={() => {window.location.href = "/pricing#DailyMint"}} className="btn-simple" color="info">
                      Buy
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
			<div className="space-between"></div>
			<Row className='last-card-container'>
			  <Col md="4">
                <Card data-aos="flip-left" className="card-coin card-plain">
					<CardHeader>
					<img
					alt="..."
					className="img-center img-fluid"
					src={require("assets/robots/robot-earn.png")}
					/>
					</CardHeader>
					<CardBody>
						<Row>
							<Col className="text-center" md="12">
								<h4 className="text-uppercase">Raid to earn</h4>
								<hr className="line-info" />
							</Col>
							<ListGroup>
								<ListGroupItem>Create a raid contest for members</ListGroupItem>
								<ListGroupItem>Reward your members for them raid</ListGroupItem>
								<ListGroupItem>raid and earn prizes </ListGroupItem>
							</ListGroup>
						</Row>
					</CardBody>
					<CardFooter className="text-center">
					<Button onClick={() => {window.location.href = "/pricing#RaidToEarn"}} className="btn-simple" color="info">
						Buy
					</Button>
					</CardFooter>
				</Card>
			</Col>
			</Row>
		</div>
	);
}
