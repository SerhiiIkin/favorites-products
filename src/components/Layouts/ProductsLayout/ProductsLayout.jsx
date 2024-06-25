import PropTypes from 'prop-types'
import styles from "./productsLayout.module.css"
const ProductsLayout = ({children}) => {
  return (
    <div className={styles.container}>{children}</div>
  )
}

ProductsLayout.propTypes = {
  children: PropTypes.node
}

export default ProductsLayout