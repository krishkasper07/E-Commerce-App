import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
const Cart=()=>{
    return(
        <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
      >
     <Badge badgeContent={2} color="secondary"></Badge>
        <ShoppingCartIcon />
      </IconButton>
    );
}


export default Cart;