import React from 'react';
import { connect } from 'react-redux';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import './cart-dropdown.styles.scss';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';


import { useLocation,
    useNavigate,
    useParams,
    Link 
} from 'react-router-dom';

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
    return ComponentWithRouterProp;
}

const CartDropDown = ({cartItems, dispatch}) => (
    <div className='cart-dropdown'>
    <div className='cart-items'> 
    {
        cartItems.length ? 
        (
        cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />)))
        : (<span className='empty-message'>Your cart is empty</span>)
    } 
    </div>
    <Link to='/checkout'>
    <div> 
    <CustomButton className='custom-button' onClick={()=>dispatch(toggleCartHidden())} style={{width:'200px', marginTop:'10px'}}>
    CHECKOUT</CustomButton>
    </div>
    </Link>

    </div>
)

const mapStateToProps = createStructuredSelector ({
    cartItems : selectCartItems
})

export default withRouter(connect(
    mapStateToProps
)(CartDropDown));