import '../assets/css/components/subcomponents/DarkModeBtn.scss'

function DarkModeBtn() {
    return (
        <div>
            <input type="checkbox" id="darkmode-toggle" />
            <label htmlFor="darkmode-toggle"></label>
        </div>
    );
}

export default DarkModeBtn;
