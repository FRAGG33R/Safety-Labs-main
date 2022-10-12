import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './assets/css/style.css'
import {
	NavItem,
	NavLink,
	Nav,
	Container,
	Collapse,
	NavbarBrand,
	Navbar,
	Row,
	Col,
} from "reactstrap";
import 'react-vertical-timeline-component/style.min.css';
export default function ExamplesNavbar({index})
{
	const [collapseOpen, setCollapseOpen] = React.useState(false);
	const [collapseOut, setCollapseOut] = React.useState("");
	const [color, setColor] = React.useState("navbar-transparent");
	React.useEffect(() => {
		window.addEventListener("scroll", changeColor);
		return function cleanup() {
			window.removeEventListener("scroll", changeColor);};
	}, []);
	const changeColor = () => {
		if ( document.documentElement.scrollTop > 99 || document.body.scrollTop > 99 )
			setColor("bg-info");
		else if ( document.documentElement.scrollTop < 100 || document.body.scrollTop < 100 )
			setColor("navbar-transparent");
	};
	const toggleCollapse = () =>
	{
		document.documentElement.classList.toggle("nav-open");
		setCollapseOpen(!collapseOpen);
	};
	const onCollapseExiting = () =>
	{
		setCollapseOut("collapsing-out");
	};
	const onCollapseExited = () =>
	{
		setCollapseOut("");
	};
	useEffect(() =>
	{
		if (window.location.hash === "#empty-roadmap")
			window.location.href = "#empty-roadmap";
		else if (window.location.hash === "#empty")
			window.location.href = "#empty";
		else if (window.location.hash === "#empty-pricing")
			window.location.href = "#empty-pricing";
	}, [])
	let scrollToFeatures = () =>
	{
		if (index === 1)
			window.location.href = "#empty";
		else if (index === 2)
			window.location.href = "/#empty";
	}

	let scrollToRoadmap = () =>
	{
		if (index === 1)
			window.location.href = "#empty-roadmap";
		else if (index === 2)
			window.location.href='/#empty-roadmap'
	}
	let scrollToPricing = () =>
	{
		if (index === 1)
			window.location.href = "#empty-pricing";
		else if (index === 2)
			window.location.href='/#empty-pricing'
	}
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
					<Container>
						<div className="navbar-translate">
							<a href="/" onclick="window.location.reload(); return false;"><NavbarBrand id="navbar-brand">
								<img className="Safety-logo" alt="Safety-Labs-Logo" src={require("./assets/images/Safety-Labs-logo.png")}/>
							</NavbarBrand></a>
							<button
								aria-expanded={collapseOpen}
								className="navbar-toggler navbar-toggler"
								onClick={toggleCollapse}>
								<span className="navbar-toggler-bar bar1" />
								<span className="navbar-toggler-bar bar2" />
								<span className="navbar-toggler-bar bar3" />
							</button>
						</div>
						<Collapse
							className={"justify-content-end " + collapseOut}
							navbar
							isOpen={collapseOpen}
							onExiting={onCollapseExiting}
							onExited={onCollapseExited}
							>
						<div className="navbar-collapse-header">
							<Row>
								<Col className="collapse-brand" xs="6">
									<a href="#pablo" onClick={(e) => e.preventDefault()}>
									SAFETY LABS
									</a>
								</Col>
							<Col className="collapse-close text-right" xs="6">
								<button
									aria-expanded={collapseOpen}
									className="navbar-toggler"
									onClick={toggleCollapse}
									>
									<i className="tim-icons icon-simple-remove" />
								</button>
							</Col>
							</Row>
						</div>
						<Nav navbar>
							<NavItem className="p-0">
								<NavLink
									data-placement="bottom"
									href="https://twitter.com/Safetylabs_"
									rel="noopener noreferrer"
									target="_blank"
									title="Follow us on Twitter"
									>
									<i className="fab fa-twitter" />
									<p className="d-lg-none d-xl-none">Twitter</p>
								</NavLink>
							</NavItem>

							<NavItem>
								<NavLink tag={Link} onClick={scrollToFeatures}>
									Features
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink tag={Link} onClick={scrollToRoadmap}>
									Roadmap
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink tag={Link} onClick={scrollToPricing}>
									Pricing
								</NavLink>
							</NavItem>
						</Nav>
						</Collapse>
					</Container>
    </Navbar>
  );
}
