/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import styles from './list.module.css'
function ButtonClick(){
    return(
        <button className={styles.buttonstyles}>Click</button>
    );
}
function Productlistseq({ item, key }) {
    return (
        <div key={key}>
            <p className={styles.para}>{item}</p>

            <ButtonClick/>
        </div>
    );
}
export default Productlistseq;