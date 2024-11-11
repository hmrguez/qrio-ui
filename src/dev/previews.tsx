import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import {InfoCard} from "../components";
import {Card} from "../components/Card";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/InfoCard">
                <InfoCard/>
            </ComponentPreview>
            <ComponentPreview path="/Card">
                <Card/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;