import Information from "./Information";

const BmiResult = ({ bmi, info }) => {
    return (
        <div className="bmi-container">
            <p className='bmi-result'>
                {bmi}
            </p>
            <Information 
                info={info}
            />
        </div>
    )
}

export default BmiResult;