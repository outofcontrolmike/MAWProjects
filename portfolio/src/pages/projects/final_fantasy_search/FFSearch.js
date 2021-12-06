import react from 'react';
import FFFooter from '../../../components/finalFantasy/FFFooter';
import FFMenu from "../../../components/finalFantasy/FFMenu";
//Main component for final fantasy search
export default function FFSearch() {
    return(
        <div id="app" class="ui container stackable">
            <FFMenu />
            <FFFooter />

        </div>
    )
}