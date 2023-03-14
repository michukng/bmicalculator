import BmiResult from "./BmiResult";

const Content = ({ height, handleChangeHeight, weight, handleChangeWeight, handleSubmit, bmi, info }) => {
    return (
        <main>
            <span>Aby uzyskać informację na temat swojego BMI proszę wpisać wzrost w centymetrach oraz wagę w kilogramach.</span>
            <form htmlFor="Content" className="addForm">
                <label>
                    Podaj wzrost
                </label>
                <input 
                    id='height'
                    type="number"
                    required
                    inputMode="numeric"
                    pattern="[100-300]{3}"
                    value={height}
                    onChange={(e) => handleChangeHeight(e.target.value)}
                />
                
                <label>
                    Podaj wagę
                </label>
                <input
                    type="number"
                    required
                    inputMode="numeric"
                    value={weight}
                    onChange={(e) => handleChangeWeight(e.target.value)}
                />
                <button
                    type='submit'
                    onClick={handleSubmit}
                >
                    Oblicz BMI
                </button>
            </form>
            <BmiResult
                bmi={bmi}
                info={info}
            />
        </main>
    )
}

export default Content;