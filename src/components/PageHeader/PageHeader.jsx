import BackgroundImageSlider from '../BackgroundImageSlider/BackgroundImageSlider';
import Title from '../Title/Title';
import styles from './pageHeader.module.css'
import  PropTypes  from 'prop-types';

const PageHeader = ({ product, titleText }) => {
    
    const SliderImg = () => {
        if (product?.images?.length <= 1) {
            return (
                <img
                    className={styles.imgBacground}
                    src={product.images[0]}
                    alt={product.title}
                />
            );
        }

        return <BackgroundImageSlider images={product?.images} />;
    };

  return (
    <section className={styles.section}>
            <SliderImg />
            <Title type="h1" titleText={titleText} className={styles.title}   />
        </section>
  )
}

PageHeader.propTypes = {
    product: PropTypes.object,
    titleText: PropTypes.string,
};

export default PageHeader