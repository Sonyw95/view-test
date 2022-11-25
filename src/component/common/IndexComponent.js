import Button from "./Resources/Button";
import DropBox from "./Resources/DropBox";

export const ButtonComponent = props => <Button{...props}/>;

export const DropBoxComponent = props => <DropBox data={props.data} key={props.index}/>

