import './Loading.css'
import spiner from '../../assets/spiner.gif'
export default function Loading({arrow, buttonStyle, loading, children, ...props}) {
    return (

        <div className='d-flex al-center jc-center Loading'>
            <img src={spiner} alt="" srcset="" />
        </div>
    )
}
