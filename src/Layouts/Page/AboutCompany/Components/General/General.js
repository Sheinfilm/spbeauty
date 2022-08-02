import Profile from "./Components/Profile/Profile";
import Preferences from "./Components/Preferences";
import PrimaryButton from "../../../../../Components/PrimaryButton";
function General() {
    return (
        <div className='d-inline-flex flex-column'>
            <Profile/> {/* Company's photo and short info as it's shown for users */}
            <Preferences/> {/* Inputs for name, type and phone number */}
            <div className='d-inline-flex mt-4'>
                <PrimaryButton>Сохранить</PrimaryButton>
            </div>
        </div>
    );
}

export default General;