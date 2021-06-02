import React, { Component } from 'react';
//import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
//import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
class Main extends Component {

  /*
  constructor(props) {
    super(props);
  }
  */

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          //dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }

    const AboutPage = () => {
      return (
        <About
          leaderone={this.props.leaders.filter((promo) => promo.designation)[0]}
          leadertwo={this.props.leaders.filter((promo) => promo.designation)[1]}
          leaderthree={this.props.leaders.filter((promo) => promo.designation)[2]}
          leaderfour={this.props.leaders.filter((promo) => promo.designation)[3]}
        />
      )
    }
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
          <Route exact path='/contactus' component={Contact} />
          <Route exact path='/aboutus' component={AboutPage} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));